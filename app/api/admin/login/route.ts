import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Simple password check. In production, use env variable like process.env.ADMIN_PASSWORD
    const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'oder360admin'

    if (password === ADMIN_PASS) {
      // Set an httpOnly cookie
      cookies().set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
      })
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
