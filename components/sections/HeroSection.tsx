'use client'
import { useEffect, useState } from 'react'
import { bio } from '@/lib/data'
import { usePortfolioStore } from '@/store/portfolio'
import { trackActivity } from '@/lib/actions/track-activity'

const TITLES = [
  'Software Engineer',
  'Systems Architect',
  'Open Source Builder',
  'Backend Specialist',
  'Full-Stack Developer',
]

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const { sessionId, setResumeDownloaded } = usePortfolioStore()

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  const handleDownload = async () => {
    if (sessionId) {
      await trackActivity({
        session_id: sessionId,
        event_type: 'resume_download',
        metadata: { section: 'hero' },
      })
    }
    setResumeDownloaded(true)
    // Create a sample resume download (in real scenario, link to actual PDF)
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Alex_Cipher_Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg"
      style={{ zIndex: 1 }}
    >
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border rounded-full"
          style={{ borderColor: 'rgba(218,165,32,0.3)', background: 'rgba(218,165,32,0.05)' }}
        >
          <div className="w-2 h-2 rounded-full pulse-glow" style={{ background: '#DAA520' }} />
          <span className="font-rajdhani text-sm tracking-widest" style={{ color: '#DAA520' }}>
            {bio.availableForWork ? 'AVAILABLE FOR OPPORTUNITIES' : 'CURRENTLY UNAVAILABLE'}
          </span>
        </div>

        {/* Name */}
        <h1 className="font-orbitron font-black mb-4 leading-none tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            color: '#F5E8D8',
            textShadow: '0 0 40px rgba(218,165,32,0.2)',
          }}
        >
          {bio.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'glitch' : ''} style={{ display: 'block', color: i === 1 ? '#DAA520' : '#F5E8D8' }}>
              {word}
            </span>
          ))}
        </h1>

        {/* Typewriter title */}
        <div className="h-10 mb-8 flex items-center justify-center">
          <span className="font-rajdhani font-semibold tracking-widest"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: '#FF6F61' }}
          >
            {'>> '}{displayed}
            <span className="blink" style={{ color: '#DAA520' }}>█</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="font-roboto max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'rgba(245,232,216,0.6)' }}
        >
          {bio.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group relative font-orbitron font-bold tracking-widest px-8 py-4 text-sm overflow-hidden transition-all duration-300"
            style={{
              background: '#DAA520',
              color: '#1C1C1C',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF6F61'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#DAA520'
            }}
          >
            VIEW PROJECTS
          </button>

          <button
            onClick={handleDownload}
            className="font-orbitron font-bold tracking-widest px-8 py-4 text-sm border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: 'rgba(245,232,216,0.3)',
              color: '#F5E8D8',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            DOWNLOAD CV
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Shipped' },
            { value: '3K+', label: 'GitHub Stars' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron font-black text-2xl" style={{ color: '#DAA520' }}>
                {stat.value}
              </div>
              <div className="font-rajdhani text-xs tracking-widest mt-1" style={{ color: 'rgba(245,232,216,0.4)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 float">
        <span className="font-rajdhani text-xs tracking-widest" style={{ color: 'rgba(245,232,216,0.3)' }}>
          SCROLL
        </span>
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, #DAA520, transparent)' }} />
      </div>
    </section>
  )
}
