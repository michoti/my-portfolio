'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { UNSPLASH_IMAGES } from '@/lib/data';
import { BrushStroke, CornerOrnament, CircuitLines } from '@/components/ui/SvgArtwork';

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const contactLinks = [
    { label: 'Email', value: 'emichoti2660@gmail.com', href: 'mailto:emichoti2660@gmail.com' },
    { label: 'Phone', value: '+254 705 223 948', href: 'tel:+254705223948' },
    { label: 'LinkedIn', value: 'Emmanuel Mogendi', href: 'https://linkedin.com/in/emmanuelmogendi-486729353/' },
    { label: 'GitHub', value: 'github.com/michoti', href: 'https://github.com/michoti' },
    { label: 'Portfolio', value: 'emmanuel-michoti.netlify.app', href: 'https://www.emmanuel-michoti.netlify.app' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: '#1F1F1F' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-6"
        style={{
          backgroundImage: `url(${UNSPLASH_IMAGES.contact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Circuit overlay */}
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-15">
        <CircuitLines className="w-full h-full" />
      </div>

      <CornerOrnament className="absolute top-8 right-8 w-12 h-12 opacity-40" style={{ transform: 'rotate(90deg)' }} />
      <CornerOrnament className="absolute bottom-8 left-8 w-12 h-12 opacity-40" style={{ transform: 'rotate(270deg)' }} />

      {/* Background number */}
      <div
        className="absolute top-20 right-4 font-orbitron font-900 select-none pointer-events-none hidden xl:block"
        style={{
          fontSize: '20vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(218,165,32,0.03)',
          lineHeight: 1,
        }}
      >
        05
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-orbitron text-xs tracking-[0.5em] uppercase" style={{ color: '#FF6F61' }}>
              05
            </span>
            <div className="h-px w-16" style={{ background: 'rgba(255,111,97,0.3)' }} />
            <span className="font-rajdhani text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(245,232,216,0.4)' }}>
              Let&apos;s Talk
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron font-800 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: '#F5E8D8', letterSpacing: '-0.02em' }}
          >
            Start a
            <br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(245,232,216,0.3)' }}>
              Conversation
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-56 mt-3 origin-left"
          >
            <BrushStroke className="w-full" color="#FF6F61" />
          </motion.div>
        </div>

        {/* Asymmetric grid — contact info + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left — contact links */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-roboto text-base leading-relaxed mb-12"
              style={{ color: 'rgba(245,232,216,0.6)' }}
            >
              Open to fullstack engineering roles, freelance contracts, and technical consultations.
              Whether you have a complex system to architect or a product to bring to life — let&apos;s build.
            </motion.p>

            <ul className="space-y-5">
              {contactLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-9 py-4 transition-all duration-300"
                    style={{
                      borderBottom: '1px solid rgba(245,232,216,0.06)',
                    }}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className="font-rajdhani text-xs tracking-[0.35em] uppercase w-20 shrink-0 transition-colors duration-300"
                      style={{ color: hoveredLink === link.label ? '#DAA520' : 'rgba(245,232,216,0.3)' }}
                    >
                      {link.label}
                    </span>
                    <motion.span
                      className="font-roboto text-sm"
                      style={{ color: hoveredLink === link.label ? '#F5E8D8' : 'rgba(245,232,216,0.65)' }}
                      animate={{ x: hoveredLink === link.label ? 6 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.value}
                    </motion.span>
                    <motion.div
                      className="ml-auto"
                      animate={{ x: hoveredLink === link.label ? 4 : 0, opacity: hoveredLink === link.label ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#DAA520" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — CTA card, offset */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-7 bento-card p-10 lg:p-14 relative"
            style={{
              marginTop: 'clamp(0px, 4vw, 60px)',
              borderColor: 'rgba(218,165,32,0.12)',
            }}
          >
            <CornerOrnament className="absolute top-4 left-4 w-8 h-8 opacity-40" />
            <CornerOrnament className="absolute bottom-4 right-4 w-8 h-8 opacity-40" style={{ transform: 'rotate(180deg)' }} />

            <div
              className="font-rajdhani text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: '#DAA520' }}
            >
              Available for Hire
            </div>

            <h3
              className="font-orbitron font-700 leading-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#F5E8D8' }}
            >
              Ready to build something{' '}
              <span className="brush-underline" style={{ color: '#FF6F61' }}>
                exceptional
              </span>
              ?
            </h3>

            <p
              className="font-roboto text-sm leading-relaxed mb-10"
              style={{ color: 'rgba(245,232,216,0.55)' }}
            >
              From architecture to deployment — I deliver clean, performant, and scalable
              engineering solutions. Let&apos;s connect and discuss how we can create impact together.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:emichoti2660@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="font-rajdhani font-600 text-sm tracking-widest uppercase px-8 py-4 relative overflow-hidden"
                style={{ background: '#FF6F61', color: '#1C1C1C' }}
              >
                Send Email
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="font-rajdhani font-600 text-sm tracking-widest uppercase px-8 py-4 border"
                style={{ borderColor: 'rgba(218,165,32,0.4)', color: '#DAA520' }}
              >
                Download Resume
              </motion.a>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3 mt-10">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: '#4ade80' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-rajdhani text-xs tracking-widest uppercase" style={{ color: 'rgba(245,232,216,0.4)' }}>
                Open to opportunities — Nairobi, Kenya
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
