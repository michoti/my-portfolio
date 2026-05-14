'use client'
import { bio } from '@/lib/data'
import { Mail, Globe, Layers, AtSign, Download } from 'lucide-react'
import { usePortfolioStore } from '@/store/portfolio'
import { trackActivity } from '@/lib/actions/track-activity'

export default function ContactSection() {
  const { sessionId, setResumeDownloaded } = usePortfolioStore()

  const handleDownload = async () => {
    if (sessionId) {
      await trackActivity({
        session_id: sessionId,
        event_type: 'resume_download',
        metadata: { section: 'contact' },
      })
    }
    setResumeDownloaded(true)
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Alex_Cipher_Resume.pdf'
    link.click()
  }

  return (
    <section id="contact" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(218,165,32,0.4))' }} />
          <div>
            <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: '#FF6F61' }}>GET IN TOUCH</p>
            <h2 className="font-orbitron font-bold text-3xl tracking-wide" style={{ color: '#F5E8D8' }}>
              CONTACT
            </h2>
          </div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(218,165,32,0.4))' }} />
        </div>

        {/* Main CTA */}
        <div
          className="relative border p-12 mb-10 overflow-hidden"
          style={{
            borderColor: 'rgba(218,165,32,0.2)',
            background: 'rgba(28,28,28,0.7)',
          }}
        >
          {/* Corner decorations */}
          {[
            'top-0 left-0 border-t-2 border-l-2',
            'top-0 right-0 border-t-2 border-r-2',
            'bottom-0 left-0 border-b-2 border-l-2',
            'bottom-0 right-0 border-b-2 border-r-2',
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 ${cls}`}
              style={{ borderColor: '#DAA520' }}
            />
          ))}

          <p className="font-orbitron text-sm tracking-widest mb-4" style={{ color: '#FF6F61' }}>
            OPEN TO OPPORTUNITIES
          </p>
          <h3
            className="font-orbitron font-black mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#F5E8D8' }}
          >
            Let&apos;s build something<br />
            <span style={{ color: '#DAA520' }}>remarkable together.</span>
          </h3>
          <p className="font-roboto max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(245,232,216,0.55)' }}>
            Whether you have a role in mind, a problem to solve, or just want to connect —
            my inbox is always open. I respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${bio.email}`}
              className="group flex items-center gap-3 font-orbitron font-bold tracking-widest px-8 py-4 text-sm transition-all duration-300"
              style={{
                background: '#DAA520',
                color: '#1C1C1C',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FF6F61' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#DAA520' }}
            >
              <Mail size={16} />
              SAY HELLO
            </a>

            <button
              onClick={handleDownload}
              className="flex items-center gap-3 font-orbitron font-bold tracking-widest px-8 py-4 text-sm border transition-all duration-300"
              style={{
                borderColor: 'rgba(245,232,216,0.25)',
                color: '#F5E8D8',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DAA520'
                e.currentTarget.style.background = 'rgba(218,165,32,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(245,232,216,0.25)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Download size={16} />
              DOWNLOAD CV
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          {[
            { icon: Globe, href: bio.github, label: 'GitHub' },
            { icon: Layers, href: bio.linkedin, label: 'LinkedIn' },
            { icon: AtSign, href: bio.twitter, label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-rajdhani text-sm tracking-widest transition-all duration-200"
              style={{ color: 'rgba(245,232,216,0.4)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#DAA520' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,232,216,0.4)' }}
            >
              <Icon size={16} />
              {label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t" style={{ borderColor: 'rgba(218,165,32,0.1)' }}>
          <p className="font-orbitron text-xs tracking-widest" style={{ color: 'rgba(245,232,216,0.2)' }}>
            © {new Date().getFullYear()} ALEX CIPHER — BUILT WITH NEXT.JS & SUPABASE
          </p>
        </div>
      </div>
    </section>
  )
}
