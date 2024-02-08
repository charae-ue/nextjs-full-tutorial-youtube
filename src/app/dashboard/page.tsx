'use client';

import { FormEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SessionStatus } from '@/types/types';
import useSWR, { Fetcher } from 'swr';
import Image from 'next/image';

import { Post } from '../blog/page';
import Button from '@/components/Button';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // TODO: Check type
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === SessionStatus.Loading) {
    return <p>Loading...</p>;
  }

  if (session.status === SessionStatus.Unauthenticated) {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const title = target.postTitle.value;
    const description = target.description.value;
    const image = target.image.value;
    const content = target.content.value;

    try {
      await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === SessionStatus.Authenticated) {
    return (
      <div className="flex gap-24">
        <div className="flex-1">
          {isLoading
            ? 'Loading...'
            : data?.map((post: Post) => (
                <div
                  key={post._id}
                  className="flex items-center justify-between my-12 mx-0"
                >
                  <div className="min-w-[200px] h-[100px] relative">
                    <Image
                      src={post.image}
                      alt=""
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold">{post.title}</h2>
                  <span
                    className="cursor-pointer text-red-600"
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold">Add New Post</h1>
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="postTitle">Title: </label>
            <input
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              id="postTitle"
              name="postTitle"
              type="text"
              placeholder="Post title"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description: </label>
            <input
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              id="description"
              name="description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">Image URL: </label>
            <input
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              id="image"
              name="image"
              type="url"
              placeholder="Image URL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="content">Content: </label>
            <textarea
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              name="content"
              id="content"
              placeholder="Content"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <Button text="Submit Post" />
        </form>
      </div>
    );
  }
};

export default Dashboard;
