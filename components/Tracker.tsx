'use client'
import { useEffect } from 'react'
import { getOrCreateSessionId } from '@/lib/cookies'
import { usePortfolioStore } from '@/store/portfolio'
import { trackActivity } from '@/lib/actions/track-activity'

const SECTIONS = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

export default function Tracker() {
  const { setSessionId, setActiveSection, sessionId } = usePortfolioStore()

  // Initialize session
  useEffect(() => {
    const id = getOrCreateSessionId()
    setSessionId(id)

    trackActivity({
      session_id: id,
      event_type: 'page_visit',
      metadata: {
        url: window.location.href,
        referrer: document.referrer || 'direct',
      },
      user_agent: navigator.userAgent,
      referrer: document.referrer,
    })
  }, [setSessionId])

  // Intersection observer for section tracking
  useEffect(() => {
    if (!sessionId) return

    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
              trackActivity({
                session_id: sessionId,
                event_type: 'section_view',
                metadata: { section: sectionId },
              })
            }
          })
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sessionId, setActiveSection])

  return null
}
