import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cooke = cookies();

  const tokenDev = (await cooke).get('next-auth.session-token')?.value;
  const tokenProd = (await cooke).get('__Secure-next-auth.session-token')?.value;

  const myToken = tokenDev || tokenProd;

  // 🔥 أهم سطر
  if (!myToken) {
    console.log('Login First');
    return null;
  }

  try {
    const decodedToken = await decode({
      token: myToken,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return decodedToken?.routeToken || null;
  } catch (err) {
    console.error('❌ Decode failed:', err);
    return null;
  }
}