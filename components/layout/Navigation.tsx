'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '@/lib/data';
import { GeometricAccent } from '@/components/ui/SvgArtwork';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(28,28,28,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(218,165,32,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 relative">
              <GeometricAccent className="w-8 h-8 transition-opacity duration-300 group-hover:opacity-80" />
            </div>
            <span
              className="font-orbitron text-sm font-bold tracking-widest"
              style={{ color: '#DAA520' }}
            >
              EM
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-rajdhani text-sm font-500 tracking-widest uppercase relative group"
                    style={{ color: isActive ? '#DAA520' : 'rgba(245,232,216,0.6)', transition: 'color 0.3s' }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{
                        width: isActive ? '100%' : '0%',
                        background: 'linear-gradient(90deg, #DAA520, #FF6F61)',
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-rajdhani text-xs font-600 tracking-widest uppercase px-5 py-2.5 border transition-all duration-300"
              style={{
                borderColor: 'rgba(218,165,32,0.5)',
                color: '#DAA520',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(218,165,32,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px w-6"
                style={{ background: '#DAA520' }}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 8 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'rgba(28,28,28,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <ul className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-orbitron text-2xl font-700 tracking-wider"
                    style={{ color: '#F5E8D8' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="font-rajdhani text-sm tracking-widest uppercase px-6 py-3 border"
                  style={{ borderColor: '#DAA520', color: '#DAA520' }}
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
