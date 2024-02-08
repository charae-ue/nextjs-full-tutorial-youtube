import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import connect from '@/utils/db';
import User from '@/models/User';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  console.log({ name, email, password });

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (error: any) {
    // TODO: Type
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
