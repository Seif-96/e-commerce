import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cooke = await cookies();
  const myToken = cooke.get('next-auth.session-token')?.value;
  const decodedToken = await decode({ token: myToken, secret: process.env.NEXTAUTH_SECRET! });
  const token = decodedToken?.routeToken;
  return token;
}
