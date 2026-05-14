'use client'
import { experience } from '@/lib/data'
import { MapPin, Calendar } from 'lucide-react'

const TYPE_COLORS: Record<string, string> = {
  'full-time': '#DAA520',
  'open-source': '#FF6F61',
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-orbitron text-5xl font-black" style={{ color: 'rgba(218,165,32,0.15)' }}>04</span>
          <div>
            <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: '#FF6F61' }}>CAREER PATH</p>
            <h2 className="font-orbitron font-bold text-3xl tracking-wide" style={{ color: '#F5E8D8' }}>
              EXPERIENCE
            </h2>
          </div>
          <div className="flex-1 ml-4 h-px" style={{ background: 'linear-gradient(to right, rgba(218,165,32,0.4), transparent)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #DAA520, rgba(218,165,32,0.1))' }}
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={job.id} className="relative pl-24">
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-2 w-4 h-4 border-2 rotate-45 transition-all duration-300"
                  style={{
                    background: '#1C1C1C',
                    borderColor: TYPE_COLORS[job.type] || '#DAA520',
                    boxShadow: `0 0 10px ${TYPE_COLORS[job.type] || '#DAA520'}40`,
                  }}
                />

                {/* Card */}
                <div
                  className="border p-6 transition-all duration-300 group"
                  style={{
                    borderColor: 'rgba(218,165,32,0.15)',
                    background: 'rgba(28,28,28,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(218,165,32,0.4)'
                    e.currentTarget.style.background = 'rgba(218,165,32,0.03)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(218,165,32,0.15)'
                    e.currentTarget.style.background = 'rgba(28,28,28,0.6)'
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-orbitron font-bold text-lg mb-1" style={{ color: '#F5E8D8' }}>
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-rajdhani font-semibold text-base" style={{ color: '#DAA520' }}>
                          {job.company}
                        </span>
                        <span
                          className="font-orbitron text-xs px-2 py-0.5"
                          style={{
                            color: TYPE_COLORS[job.type] || '#DAA520',
                            border: `1px solid ${TYPE_COLORS[job.type] || '#DAA520'}30`,
                          }}
                        >
                          {job.type.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} style={{ color: '#FF6F61' }} />
                        <span className="font-rajdhani text-sm" style={{ color: 'rgba(245,232,216,0.5)' }}>
                          {job.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={12} style={{ color: '#FF6F61' }} />
                        <span className="font-rajdhani text-sm" style={{ color: 'rgba(245,232,216,0.5)' }}>
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-roboto text-sm leading-relaxed mb-5" style={{ color: 'rgba(245,232,216,0.6)' }}>
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span style={{ color: '#DAA520', fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}>▶</span>
                        <span className="font-roboto text-sm" style={{ color: 'rgba(245,232,216,0.65)' }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'rgba(218,165,32,0.1)' }}>
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-orbitron text-xs px-2 py-1"
                        style={{
                          color: 'rgba(245,232,216,0.5)',
                          background: 'rgba(245,232,216,0.04)',
                          border: '1px solid rgba(245,232,216,0.08)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
