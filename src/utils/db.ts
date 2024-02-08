import mongoose from 'mongoose';

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (error) {
    throw new Error('Connection failed!');
  }
}
