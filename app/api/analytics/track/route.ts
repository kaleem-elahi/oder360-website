import { NextRequest, NextResponse } from 'next/server'
import { addVisit } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, userAgent } = body

    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 })
    }

    addVisit({ path, userAgent })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking visit:', error)
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
  }
}
