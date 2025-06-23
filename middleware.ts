// middleware.ts
import { NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) return NextResponse.redirect(new URL('/login', req.url))

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (!profile) return NextResponse.redirect(new URL('/login', req.url))

  const role = profile.role

  if (req.nextUrl.pathname === '/') {
    if (role === 'admin') return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    if (role === 'super_admin') return NextResponse.redirect(new URL('/super-admin', req.url))
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}
