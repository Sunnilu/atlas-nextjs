// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  // Public routes
  const publicPaths = ['/', '/about', '/login'];
  const pathname = request.nextUrl.pathname;

  // If path is public, let it through
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // If accessing /ui/* and not logged in, redirect to login
  if (pathname.startsWith('/ui') && session?.value !== 'valid') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Define paths the middleware should run on
export const config = {
  matcher: ['/ui/:path*'],
};
