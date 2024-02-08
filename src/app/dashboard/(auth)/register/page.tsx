'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

const Register = () => {
  const [error, setError] = useState<string | null>(null); // TODO: Check type?

  const router = useRouter();

  // TODO: Type
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log(event.formD)
    const target = event.currentTarget;

    const name = target.username.value;
    const email = target.email.value;
    const password = target.password.value;

    // console.log({ name, email, password });

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (error) {
      setError(error as string);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold text-indigo-500">Create an Account</h1>
      <h2 className="text-xl font-medium mb-7 text-indigo-500">
        Please sign up to see the dashboard
      </h2>
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          {/* TODO: Could extract into an Input component? */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            className="p-4 bg-transparent border-2 border-gray-400 outline-none text-gray-400 text-lg font-bold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
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

        <Button text="Register" fullWidth />
        {error && 'Something went wrong'}
      </form>

      <span className="text-gray-400">- OR -</span>
      <Link
        href="/dashboard/login"
        className="underline text-indigo-500 hover:text-indigo-800"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
