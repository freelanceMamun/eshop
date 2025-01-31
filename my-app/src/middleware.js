import { NextResponse } from 'next/server';

// Define the routes where middleware should apply
const protectedRoutes = ['/dashboard'];

export function middleware(req) {
  const token = req.cookies.get('webnuxtauth'); // Read the token from cookies in Login auth

  const resToken = req.cookies.get('resetp'); // Reset Password Token

  const params = req.params;
  // Check if the route is protected
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    // If token is missing or invalid, redirect to login page
    if (!token) {
      const loginUrl = new URL('/my-account', req.url);
      return NextResponse.redirect(loginUrl);

      // Check User Auth Token
    }

    // Optionally, validate the token (e.g., using JWT)
    try {
      // Decode/verify the token here (server-side verification is better)
      // Example: jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      const loginUrl = new URL('/my-account', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Check Token in Reset Passoword  redriret in Reset password page ;
  if (!resToken) {
    const redirectURL = new URL('/reset-password', req.url);
    //  return NextResponse.redirect(redirectURL);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the routes the middleware should match
export const config = {
  matcher: ['/dashboard/:path*', '/reset-password/email:path*'], // Matches `/dashboard` and all sub-paths
};
