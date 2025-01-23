import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('middlware');

  return NextResponse.redirect(new URL('/my-account', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*'], // Match `/dashboard` and its sub-paths
};
