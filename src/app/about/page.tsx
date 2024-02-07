import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          className="object-cover grayscale"
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="About background image - a group of people working on their laptop"
        />
        <div className="absolute bottom-5 left-5 bg-indigo-500 p-2 text-white">
          <h1 className="text-3xl font-bold">Digital Storytellers</h1>
          <h2 className="text-2xl font-bold">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex-1 flex flex-col gap-7 mt-12">
          <h3 className="font-bold text-2xl text-indigo-500">Who Are We?</h3>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-7 mt-12">
          <h3 className="font-bold text-2xl text-indigo-500">What We Do?</h3>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <Button text="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
