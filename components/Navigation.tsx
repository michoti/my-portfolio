'use client'
import { useState, useEffect } from 'react'
import { usePortfolioStore } from '@/store/portfolio'

const navItems = [
  { id: 'home', label: 'HOME', code: '01' },
  { id: 'about', label: 'ABOUT', code: '02' },
  { id: 'projects', label: 'PROJECTS', code: '03' },
  { id: 'experience', label: 'EXPERIENCE', code: '04' },
  { id: 'skills', label: 'SKILLS', code: '05' },
  { id: 'contact', label: 'CONTACT', code: '06' },
]

export default function Navigation() {
  const { activeSection, isNavOpen, setNavOpen } = usePortfolioStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setNavOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(28,28,28,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(218,165,32,0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="font-orbitron font-black text-xl tracking-widest"
            style={{ color: '#DAA520' }}
          >
            AC<span style={{ color: '#FF6F61' }}>_</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="group flex flex-col items-center gap-0.5 transition-all duration-200"
              >
                <span
                  className="font-rajdhani text-xs tracking-widest transition-colors duration-200"
                  style={{ color: activeSection === item.id ? '#DAA520' : 'rgba(245,232,216,0.4)' }}
                >
                  {item.code}
                </span>
                <span
                  className="font-orbitron text-xs font-semibold tracking-wider transition-colors duration-200"
                  style={{
                    color: activeSection === item.id ? '#DAA520' : 'rgba(245,232,216,0.7)',
                  }}
                >
                  {item.label}
                </span>
                <div
                  className="h-px w-full transition-all duration-300"
                  style={{
                    background: activeSection === item.id ? '#DAA520' : 'transparent',
                    boxShadow: activeSection === item.id ? '0 0 8px #DAA520' : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-6 h-0.5 transition-all duration-300"
                style={{
                  background: '#DAA520',
                  transform: isNavOpen
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)' : i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'scaleX(0)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300"
        style={{
          background: 'rgba(28,28,28,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: isNavOpen ? 1 : 0,
          pointerEvents: isNavOpen ? 'all' : 'none',
          transform: isNavOpen ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-orbitron text-2xl font-bold tracking-widest py-4 transition-all duration-200 hover:scale-105"
            style={{
              color: activeSection === item.id ? '#DAA520' : 'rgba(245,232,216,0.6)',
              transitionDelay: `${i * 50}ms`,
            }}
          >
            <span style={{ color: '#FF6F61', fontSize: '0.7em' }}>{item.code} // </span>
            {item.label}
          </button>
        ))}
      </div>
    </>
  )
}
