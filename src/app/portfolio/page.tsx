import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Charae - Portfolio',
};

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-5 mx-0">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link
          className="border-4 border-gray-400 rounded-md w-[300px] h-[400px] relative bg-portfolio-illustrations bg-cover  hover:text-indigo-500"
          href="/portfolio/illustrations"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold ">
            Illustrations
          </span>
        </Link>
        <Link
          className="border-4 border-gray-400 rounded-md w-[300px] h-[400px] relative bg-portfolio-websites bg-cover  hover:text-indigo-500"
          href="/portfolio/websites"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Websites
          </span>
        </Link>
        <Link
          className="border-4 border-gray-400 rounded-md w-[300px] h-[400px] relative bg-portfolio-apps bg-cover hover:text-indigo-500"
          href="/portfolio/applications"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
