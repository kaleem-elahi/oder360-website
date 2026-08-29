import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getVisits, getSubmissions } from '@/lib/db'

export async function GET(request: NextRequest) {
  // Check auth
  const authCookie = cookies().get('admin_auth')
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const visits = getVisits()
    const submissions = getSubmissions()

    return NextResponse.json({ visits, submissions })
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
