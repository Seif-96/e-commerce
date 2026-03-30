import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(requset: NextRequest, url: string) {
  const protectedRoutes = [
    '/profile/addresses',
    '/profile/addresses',
    '/profile/orders',
    '/checkout',
    '/allorders',
  ];
  const authRoutes = ['/login', '/register'];
  const myPath = requset.nextUrl.pathname;
  const myToken = await getToken({
    req: requset,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });
  const token = myToken?.accessToken;
  // if(token&&protectedRoutes.includes(myPath)){}
  if (!token && protectedRoutes.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL('/login', requset.url));
  }
  if (token && authRoutes.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL('/', requset.url));
  }
  return NextResponse.next();
}
export const config = {
  // matcher: '/about/:path*',
  matcher: [
    '/profile/addresses/:path*',
    '/profile/addresses/:path*',
    '/profile/orders/:path*',
    '/checkout/:path*',
    '/allorders/:path*',
    '/login',
    '/register',
  ],
};
