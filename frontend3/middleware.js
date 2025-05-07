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

export async function middleware(req) {

}

export const config = {
  matcher: ['/dashboard', '/protected/:path*'],
}
