import { supabase } from '@/lib/supabase/client'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  if (!supabase) {
    return NextResponse.json({ error: 'Tracking not configured' }, { status: 503 })
  }
  try {
    const body = await request.json()
    const { session_id, event_type, metadata } = body

    if (!session_id || !event_type) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const userAgent = request.headers.get('user-agent') || ''
    const referrer = request.headers.get('referer') || ''
    const ip = request.headers.get('x-forwarded-for') || ''

    await supabase.from('visitor_activities').insert({
      session_id,
      event_type,
      metadata,
      user_agent: userAgent,
      referrer,
      ip_address: ip.split(',')[0].trim(),
      created_at: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
