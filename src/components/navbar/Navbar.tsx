'use client';

import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { SessionStatus } from '@/types/types';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'About',
    url: '/about',
  },
];

const Navbar = () => {
  const { status } = useSession();

  return (
    <nav className="h-24 flex justify-between items-center">
      <Link className="font-bold text-2xl" href="/">
        Charae
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link className="hover:text-indigo-500" key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {status === SessionStatus.Authenticated && (
          <button
            className="px-2 py-1 border border-indigo-500 bg-indigo-500 text-white cursor-pointer rounded-[4px] font-normal hover:bg-transparent hover:text-indigo-500"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
