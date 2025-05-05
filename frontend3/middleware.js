// import { NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';

// export async function middleware(req) {
//   const token = req.cookies.get('access_token')?.value;
//   if (!token) return NextResponse.redirect(new URL('/login', req.url));

//   try {
//     await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }
// }

// export const config = {
//   matcher: ['/dashboard', '/protected/:path*'],
// };


// middleware.js
import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(req) {
  const accessToken = req.cookies.get('access_token')?.value
  const refreshToken = req.cookies.get('refresh_token')?.value

  try {
    if (!accessToken) throw new Error('No access token')
    return NextResponse.next()
  } catch (err) {
    if (refreshToken) {
      // Try refreshing the token
      const refreshRes = await fetch(`${req.nextUrl.origin}/api/token/refresh/`, {
        method: 'GET',
        headers: { cookie: req.headers.get('cookie') || '' },
      })
      if (refreshRes.ok) return NextResponse.next()
    }
    // Redirect to login if refresh fails
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/dashboard', '/protected/:path*'],
}
