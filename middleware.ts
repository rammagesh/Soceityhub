import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protected routes
  const protectedRoutes = ['/user', '/admin', '/super-admin']
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  
  // Check for auth token (simplified)
  const token = request.cookies.get('auth-token')?.value
  
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/user/:path*',
    '/admin/:path*', 
    '/super-admin/:path*'
  ],
}