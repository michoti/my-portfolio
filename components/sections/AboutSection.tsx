'use client'
import { bio } from '@/lib/data'
import { Globe, Layers, AtSign, Mail, MapPin, Terminal } from 'lucide-react'

export default function AboutSection() {
  const lines = bio.summary.trim().split('\n').map(l => l.trim()).filter(Boolean)

  return (
    <section id="about" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-orbitron text-5xl font-black" style={{ color: 'rgba(218,165,32,0.15)' }}>02</span>
          <div>
            <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: '#FF6F61' }}>WHO AM I</p>
            <h2 className="font-orbitron font-bold text-3xl tracking-wide" style={{ color: '#F5E8D8' }}>
              ABOUT ME
            </h2>
          </div>
          <div className="flex-1 ml-4 h-px" style={{ background: 'linear-gradient(to right, rgba(218,165,32,0.4), transparent)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Terminal bio block */}
          <div
            className="rounded-none border"
            style={{
              background: 'rgba(28,28,28,0.8)',
              borderColor: 'rgba(218,165,32,0.2)',
              boxShadow: '0 0 40px rgba(218,165,32,0.05)',
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-3 px-4 py-3 border-b"
              style={{ borderColor: 'rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.05)' }}
            >
              <div className="flex gap-2">
                {['#FF4500', '#DAA520', '#5cb85c'].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal size={12} style={{ color: '#DAA520' }} />
                <span className="font-orbitron text-xs" style={{ color: 'rgba(245,232,216,0.4)' }}>
                  alex@cipher:~$ bio.txt
                </span>
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-roboto text-sm leading-7" style={{ color: 'rgba(245,232,216,0.75)' }}>
              <div className="mb-4">
                <span style={{ color: '#DAA520' }}>$ </span>
                <span style={{ color: '#FF6F61' }}>cat</span>
                <span style={{ color: 'rgba(245,232,216,0.5)' }}> about.md</span>
              </div>
              {lines.map((line, i) => (
                <p key={i} className="mb-3">
                  {line}
                </p>
              ))}
              <div className="mt-6 flex items-center gap-2">
                <span style={{ color: '#DAA520' }}>$ </span>
                <span className="terminal-cursor" style={{ color: 'rgba(245,232,216,0.4)' }}>
                  &nbsp;
                </span>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {/* Location & contact */}
            <div
              className="p-6 border"
              style={{
                borderColor: 'rgba(218,165,32,0.15)',
                background: 'rgba(218,165,32,0.02)',
              }}
            >
              <h3 className="font-orbitron text-xs tracking-widest mb-4" style={{ color: '#FF6F61' }}>
                CONTACT INFO
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={14} style={{ color: '#DAA520' }} />
                  <span className="font-rajdhani text-base" style={{ color: 'rgba(245,232,216,0.7)' }}>
                    {bio.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} style={{ color: '#DAA520' }} />
                  <a
                    href={`mailto:${bio.email}`}
                    className="font-rajdhani text-base transition-colors duration-200"
                    style={{ color: 'rgba(245,232,216,0.7)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FF6F61' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,232,216,0.7)' }}
                  >
                    {bio.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              className="p-6 border"
              style={{
                borderColor: 'rgba(218,165,32,0.15)',
                background: 'rgba(218,165,32,0.02)',
              }}
            >
              <h3 className="font-orbitron text-xs tracking-widest mb-4" style={{ color: '#FF6F61' }}>
                FIND ME ONLINE
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Globe, label: "GitHub", href: bio.github },
                  { icon: Layers, label: "LinkedIn", href: bio.linkedin },
                  { icon: AtSign, label: "Twitter", href: bio.twitter },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 border transition-all duration-200 flex-1"
                    style={{
                      borderColor: 'rgba(218,165,32,0.2)',
                      color: 'rgba(245,232,216,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#DAA520'
                      e.currentTarget.style.background = 'rgba(218,165,32,0.08)'
                      e.currentTarget.style.color = '#DAA520'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(218,165,32,0.2)'
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'rgba(245,232,216,0.5)'
                    }}
                  >
                    <Icon size={20} />
                    <span className="font-orbitron text-xs tracking-widest">{label.toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div
              className="p-6 border"
              style={{
                borderColor: 'rgba(255,111,97,0.2)',
                background: 'rgba(255,111,97,0.02)',
              }}
            >
              <h3 className="font-orbitron text-xs tracking-widest mb-4" style={{ color: '#FF6F61' }}>
                QUICK FACTS
              </h3>
              <ul className="space-y-2">
                {[
                  '↗ Currently building at Meridian Systems',
                  '↗ Open source maintainer (NexusDB, Keystone CLI)',
                  '↗ Interested in distributed systems & AI infra',
                  '↗ Based in Nairobi — working globally',
                ].map((fact) => (
                  <li key={fact} className="font-rajdhani text-base" style={{ color: 'rgba(245,232,216,0.65)' }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
