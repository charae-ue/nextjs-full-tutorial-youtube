/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { Post } from '../page';

interface BlogPostProps {
  params: { id: string };
}

const baseUrl = `http://localhost:3000/api/posts`;

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { id } = params;

  const post: Post = await getData(id);

  return {
    title: post.title,
    description: post.description,
  };
}

async function getData(id: string) {
  const res = await fetch(`${baseUrl}/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const post: Post = await getData(params.id);

  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-[40px] font-bold">{post.title}</h1>
          <p className="text-lg font-light">{post.description}</p>

          {/* Avatar */}
          <div className="flex items-center gap-[10px] h-10">
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              width={40}
              height={40}
              alt=""
              className="object-cover rounded-[50%] h-10"
            />
            <span className="">Mr. Robert</span>
          </div>
        </div>
        {/* Blog post image */}
        <div className="flex-1 h-[300px] relative">
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 text-xl font-light text-gray-500 text-justify"></div>
    </div>
  );
};

export default BlogPost;
