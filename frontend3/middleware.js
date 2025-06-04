import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// Define public routes that don't require authentication
const publicRoutes = ['/', '/about', '/contact', '/login', '/register', '/logout']

export function middleware(request) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // Allow access to public routes without token
  if (publicRoutes.includes(pathname)) {
    // Redirect to dashboard if user is already logged in and trying to access login/register
    if (token && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
  }

  // Check for token on protected routes
  if (!token) {
    // Redirect to login if no token is present
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Allow access to protected routes if token exists
  return NextResponse.next()
}

export const config = {
  // Define which paths the middleware will run on
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. All files in public folder
     * 5. Public routes defined above
     * 6. File extensions (assets)
     */
    '/((?!api|_next|static|.*\\..*|robots\\.txt|sitemap\\.xml|about|contact|login|register|logout).*)'
  ],
}