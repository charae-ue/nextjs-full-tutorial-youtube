import { NextResponse } from 'next/server';

import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request: Request) => {
  try {
    await connect();

    // TODO: Type
    const posts: any = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
