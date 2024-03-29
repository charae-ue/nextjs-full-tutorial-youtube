import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();

    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error - error getting post', {
      status: 500,
    });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error - Error deleting item', {
      status: 500,
    });
  }
};
