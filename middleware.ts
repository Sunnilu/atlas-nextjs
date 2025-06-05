// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_PATHS = ['/', '/about', '/login'];

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('session')?.value === 'valid';

  const pathname = request.nextUrl.pathname;

  if (!PUBLIC_PATHS.includes(pathname) && pathname.startsWith('/ui') && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/ui/:path*'],
};
