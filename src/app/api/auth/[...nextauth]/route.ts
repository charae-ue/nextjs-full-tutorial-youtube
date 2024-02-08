import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // TODO: Check TS warning
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials?.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials');
            }
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
