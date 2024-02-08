'use client';

import { FormEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SessionStatus } from '@/types/types';

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === SessionStatus.Loading) {
    return <p>Loading...</p>;
  }

  if (status === SessionStatus.Unauthenticated) {
    router?.push('/dashboard/login');
  }

  // const handleSubmit = async(e: FormEvent<HTMLFormElement>) {

  // }

  return <div>Dashboard</div>;
};

export default Dashboard;
