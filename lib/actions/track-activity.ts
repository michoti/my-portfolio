import { supabase } from "../supabase/client"

export type ActivityEvent = {
  session_id: string
  event_type: 'page_visit' | 'section_view' | 'resume_download' | 'project_click' | 'skill_hover'
  metadata?: Record<string, string | number | boolean>
  user_agent?: string
  referrer?: string
}

export async function trackActivity(event: ActivityEvent) {
  if (!supabase) return
  try {
    await supabase.from('visitor_activities').insert({
      ...event,
      created_at: new Date().toISOString(),
    })
  } catch {
    // Silently fail — tracking shouldn't break UX
  }
}