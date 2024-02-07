/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import styles from './page.module.css';

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-6xl mb-24 text-center">Let's Keep In Touch!</h1>
      <div className="flex items-center gap-24">
        <div className="flex-1 h-[500px] relative">
          <Image
            className={`object-contain ${styles.imageBounce}`}
            src="/contact.png"
            alt="Contact icon"
            fill={true}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5" action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name: </label>
            <input
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email: </label>
            <input
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message: </label>
            <textarea
              className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
              name="message"
              id="message"
              placeholder="Message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <Link href="#">
            <Button text="Send" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;
