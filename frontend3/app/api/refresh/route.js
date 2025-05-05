// app/api/refresh/route.js
import { NextResponse } from 'next/server'

export async function GET(req) {
  const refreshToken = req.cookies.get('refresh_token')?.value

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ refresh: refreshToken }),
  })

  if (!res.ok) return NextResponse.json({ error: 'Refresh failed' }, { status: 401 })

  const data = await res.json()
  const response = NextResponse.json({ message: 'Token refreshed' })
  response.cookies.set('access_token', data.access, {
    httpOnly: true,
    sameSite: 'Lax',
    secure: true,
  })
  return response
}
