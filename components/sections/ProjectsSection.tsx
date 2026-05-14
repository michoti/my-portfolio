'use client'
import { useState } from 'react'
import { projects } from '@/lib/data'
import { ExternalLink, Star, GitBranch } from 'lucide-react'
import { usePortfolioStore } from '@/store/portfolio'
import { trackActivity } from '@/lib/actions/track-activity'

const STATUS_COLORS: Record<string, string> = {
  Production: '#5cb85c',
  Beta: '#DAA520',
  Active: '#FF6F61',
  Experimental: '#FF4500',
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const { sessionId } = usePortfolioStore()

  const displayed = filter === 'featured' ? projects.filter(p => p.featured) : projects

  const handleProjectClick = async (title: string) => {
    if (sessionId) {
      await trackActivity({
        session_id: sessionId,
        event_type: 'project_click',
        metadata: { project: title },
      })
    }
  }

  return (
    <section id="projects" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-orbitron text-5xl font-black" style={{ color: 'rgba(218,165,32,0.15)' }}>03</span>
          <div>
            <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: '#FF6F61' }}>WHAT I&apos;VE BUILT</p>
            <h2 className="font-orbitron font-bold text-3xl tracking-wide" style={{ color: '#F5E8D8' }}>
              PROJECTS
            </h2>
          </div>
          <div className="flex-1 ml-4 h-px" style={{ background: 'linear-gradient(to right, rgba(218,165,32,0.4), transparent)' }} />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-12">
          {(['all', 'featured'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="font-orbitron text-xs tracking-widest px-6 py-2 border transition-all duration-200"
              style={{
                borderColor: filter === f ? '#DAA520' : 'rgba(218,165,32,0.2)',
                background: filter === f ? 'rgba(218,165,32,0.1)' : 'transparent',
                color: filter === f ? '#DAA520' : 'rgba(245,232,216,0.4)',
              }}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <div
              key={project.id}
              className="group relative border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: 'rgba(218,165,32,0.15)',
                background: 'rgba(28,28,28,0.6)',
                opacity: 0,
                animation: `fadeIn 0.5s ease forwards ${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#DAA520'
                e.currentTarget.style.background = 'rgba(218,165,32,0.04)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(218,165,32,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(218,165,32,0.15)'
                e.currentTarget.style.background = 'rgba(28,28,28,0.6)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onClick={() => handleProjectClick(project.title)}
            >
              {/* Card top bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(to right, ${STATUS_COLORS[project.status] || '#DAA520'}, transparent)`,
                }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron font-bold text-base mb-1" style={{ color: '#F5E8D8' }}>
                      {project.title}
                    </h3>
                    <span
                      className="font-rajdhani text-xs tracking-widest px-2 py-0.5"
                      style={{
                        color: STATUS_COLORS[project.status] || '#DAA520',
                        border: `1px solid ${STATUS_COLORS[project.status] || '#DAA520'}40`,
                        background: `${STATUS_COLORS[project.status] || '#DAA520'}10`,
                      }}
                    >
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors duration-200"
                    style={{ color: 'rgba(245,232,216,0.3)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#DAA520' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,232,216,0.3)' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Description */}
                <p className="font-roboto text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,232,216,0.55)' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-orbitron text-xs px-2 py-1"
                      style={{
                        color: '#FF6F61',
                        background: 'rgba(255,111,97,0.08)',
                        border: '1px solid rgba(255,111,97,0.15)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mt-auto">
                  <Star size={12} style={{ color: '#DAA520' }} />
                  <span className="font-rajdhani text-sm" style={{ color: 'rgba(245,232,216,0.4)' }}>
                    {project.stars.toLocaleString()}
                  </span>
                  <GitBranch size={12} className="ml-2" style={{ color: '#DAA520' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
