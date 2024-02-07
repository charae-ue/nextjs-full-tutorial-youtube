import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div>
      <Link href={`blog/1`} className="flex items-center gap-12 mb-12">
        <div>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold ">Title</h1>
          <p className="text-lg text-gray-500">Content</p>
        </div>
      </Link>
      <Link href={`blog/1`} className="flex items-center gap-12 mb-12">
        <div>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold ">Title</h1>
          <p className="text-lg text-gray-500">Content</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
