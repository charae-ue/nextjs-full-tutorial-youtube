import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export interface Post {
  userId: number;
  _id: string;
  title: string;
  description: string;
  content: string;
  image: string;
}

// const url = 'https://jsonplaceholder.typicode.com/posts';
const url = 'http://localhost:3000/api/posts';

export const metadata: Metadata = {
  title: 'Charae - Blog',
};

async function getData() {
  const res = await fetch(url, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((item: Post) => (
        <Link
          href={`blog/${item._id}`}
          key={item._id}
          className="flex items-center gap-12 mb-12"
        >
          <div className="min-w-[400px]">
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold ">{item.title}</h1>
            <p className="text-lg text-gray-500">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
