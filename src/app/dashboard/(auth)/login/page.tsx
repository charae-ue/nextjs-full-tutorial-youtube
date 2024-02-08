'use client';

import { FormEvent, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Button from '@/components/Button';
import { SessionStatus } from '@/types/types';

interface LoginProps {
  url: string;
}

const Login = ({ url }: LoginProps) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(''); // TODO: Check type
  const [success, setSuccess] = useState<string | null>('');

  useEffect(() => {
    setError(() => params.get('error'));
    setSuccess(() => params.get('success'));
  }, [params]);

  // TODO: Can make 'loading' into enum
  if (session.status === SessionStatus.Loading) {
    return <p>Loading...</p>;
  }

  if (session.status === SessionStatus.Authenticated) {
    router?.push('/dashboard');
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const email = target.email.value;
    const password = target.password.value;

    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold text-indigo-500 mb-2">
        {success ? success : 'Welcome Back'}
      </h1>
      <h2 className="text-xl font-medium text-indigo-500 mb-7">
        Please sign in to see the dashboard
      </h2>

      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
          />
        </div>

        <Button text="Login" fullWidth />
        {error && 'Something went wrong'}
      </form>

      <button
        className="w-[300px] px-4 py-2 cursor-pointer bg-white border border-white rounded-md text-indigo-500 hover:bg-transparent hover:text-white hover:bg-indigo-500 hover:border-indigo-500"
        onClick={() => signIn('google')}
      >
        Login with Google
      </button>

      <span className="text-gray-400">- OR -</span>
      <Link
        href="/dashboard/register"
        className="underline text-indigo-500 hover:text-indigo-800"
      >
        Create new account
      </Link>
    </div>
  );
};

export default Login;
