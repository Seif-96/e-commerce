import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    // Add your authentication providers here
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Implement your authentication logic here
        try {
          const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          const result = await res.json();
          console.log('result', result);
          if (!res.ok) {
            throw new Error(result.message || 'Authentication failed');
          }
          return {
            id:"",
            name  : result.user.name,
            email : result.user.email,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  // Add any additional NextAuth options here
};
