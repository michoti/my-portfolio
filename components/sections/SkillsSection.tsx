'use client'
import { useState } from 'react'
import { skillCategories, tools } from '@/lib/data'
import { Code2, Monitor, Server, Cloud } from 'lucide-react'
import { usePortfolioStore } from '@/store/portfolio'
import { trackActivity } from '@/lib/actions/track-activity'

const ICONS: Record<string, React.ElementType> = { Code2, Monitor, Server, Cloud }

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { sessionId } = usePortfolioStore()

  const handleSkillHover = async (name: string) => {
    setHoveredSkill(name)
    if (sessionId) {
      await trackActivity({
        session_id: sessionId,
        event_type: 'skill_hover',
        metadata: { skill: name },
      })
    }
  }

  return (
    <section id="skills" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-orbitron text-5xl font-black" style={{ color: 'rgba(218,165,32,0.15)' }}>05</span>
          <div>
            <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: '#FF6F61' }}>TECH STACK</p>
            <h2 className="font-orbitron font-bold text-3xl tracking-wide" style={{ color: '#F5E8D8' }}>
              SKILLS & TOOLS
            </h2>
          </div>
          <div className="flex-1 ml-4 h-px" style={{ background: 'linear-gradient(to right, rgba(218,165,32,0.4), transparent)' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Category tabs */}
          <div className="flex flex-col gap-2">
            {skillCategories.map((cat, i) => {
              const Icon = ICONS[cat.icon] || Code2
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(i)}
                  className="flex items-center gap-4 p-4 border text-left transition-all duration-200"
                  style={{
                    borderColor: activeCategory === i ? '#DAA520' : 'rgba(218,165,32,0.15)',
                    background: activeCategory === i ? 'rgba(218,165,32,0.08)' : 'rgba(28,28,28,0.4)',
                    borderLeft: activeCategory === i ? '3px solid #DAA520' : '3px solid transparent',
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: activeCategory === i ? '#DAA520' : 'rgba(245,232,216,0.35)' }}
                  />
                  <span
                    className="font-orbitron font-semibold text-sm tracking-wide"
                    style={{ color: activeCategory === i ? '#DAA520' : 'rgba(245,232,216,0.5)' }}
                  >
                    {cat.name.toUpperCase()}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Skills bars */}
          <div
            className="lg:col-span-2 border p-8"
            style={{
              borderColor: 'rgba(218,165,32,0.15)',
              background: 'rgba(28,28,28,0.5)',
            }}
          >
            <h3 className="font-orbitron text-xs tracking-widest mb-8" style={{ color: '#FF6F61' }}>
              {skillCategories[activeCategory]?.name.toUpperCase()} PROFICIENCY
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory]?.skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => handleSkillHover(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group cursor-default"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="font-rajdhani font-semibold text-base transition-colors duration-200"
                      style={{ color: hoveredSkill === skill.name ? '#DAA520' : 'rgba(245,232,216,0.8)' }}
                    >
                      {skill.name}
                    </span>
                    <span className="font-orbitron text-xs" style={{ color: '#FF6F61' }}>
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div
                    className="h-1.5 w-full rounded-none overflow-hidden"
                    style={{ background: 'rgba(245,232,216,0.08)' }}
                  >
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: hoveredSkill === skill.name
                          ? 'linear-gradient(to right, #FF6F61, #FF4500)'
                          : 'linear-gradient(to right, #DAA520, #FF6F61)',
                        boxShadow: hoveredSkill === skill.name ? '0 0 10px rgba(255,111,97,0.5)' : 'none',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div className="mt-16">
          <h3 className="font-orbitron text-xs tracking-widest mb-6" style={{ color: '#FF6F61' }}>
            TOOLS & ENVIRONMENT
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-rajdhani font-semibold text-base px-4 py-2 border transition-all duration-200 cursor-default"
                style={{
                  borderColor: 'rgba(218,165,32,0.2)',
                  color: 'rgba(245,232,216,0.6)',
                  background: 'rgba(28,28,28,0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF6F61'
                  e.currentTarget.style.color = '#FF6F61'
                  e.currentTarget.style.background = 'rgba(255,111,97,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218,165,32,0.2)'
                  e.currentTarget.style.color = 'rgba(245,232,216,0.6)'
                  e.currentTarget.style.background = 'rgba(28,28,28,0.4)'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
