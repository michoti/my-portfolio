'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { UNSPLASH_IMAGES } from '@/lib/data';
import {
  HexGrid,
  CircuitLines,
  OrbitRing,
  CornerOrnament,
  BrushStroke,
} from '@/components/ui/SvgArtwork';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const titleWords = ['Emmanuel', 'Michoti'];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${UNSPLASH_IMAGES.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(218,165,32,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,111,97,0.04) 0%, transparent 50%)',
        }}
      />

      {/* SVG Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <HexGrid className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-0 w-80 h-80 opacity-20">
        <CircuitLines className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 opacity-40 spin-slow">
        <OrbitRing className="w-full h-full" />
      </div>

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-24 left-6 w-12 h-12 opacity-60" />
      <CornerOrnament
        className="absolute bottom-8 right-6 w-12 h-12 opacity-60"
        style={{ transform: 'rotate(180deg)' }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #DAA520, transparent)' }} />
          <span
            className="font-rajdhani text-xs tracking-[0.4em] uppercase"
            style={{ color: '#DAA520' }}
          >
            Software Engineer
          </span>
        </motion.div>

        {/* Asymmetric title — Picasso-inspired broken grid */}
        <div className="relative">
          {titleWords.map((word, i) => (
            <div
              key={word}
              className="overflow-hidden"
              style={{ marginLeft: i === 1 ? 'clamp(60px, 12vw, 180px)' : '0' }}
            >
              <motion.h1
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-orbitron font-900 leading-none"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                  color: i === 0 ? '#F5E8D8' : 'transparent',
                  WebkitTextStroke: i === 1 ? '1px rgba(245,232,216,0.4)' : 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          {/* Large decorative name — offset/broken */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute -right-8 top-6 hidden xl:block"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            <span
              className="font-rajdhani text-xs tracking-[0.5em] uppercase"
              style={{ color: 'rgba(218,165,32,0.3)' }}
            >
              Available for hire
            </span>
          </motion.div>
        </div>

        {/* Brush stroke accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-64 mt-2 mb-10 origin-left"
        >
          <BrushStroke className="w-full" color="#FF6F61" />
        </motion.div>

        {/* Bio / descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-roboto text-base lg:text-lg max-w-xl leading-relaxed mb-12"
          style={{ color: 'rgba(245,232,216,0.65)' }}
        >
          Building resilient, scalable web systems with meticulous attention to code quality,
          performance, and user experience. Based in{' '}
          <span style={{ color: '#DAA520' }}>Nairobi, Kenya</span>.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, x: 4 }}
            whileTap={{ scale: 0.96 }}
            className="font-rajdhani font-600 text-sm tracking-widest uppercase px-8 py-4 relative overflow-hidden group"
            style={{ background: '#FF6F61', color: '#1C1C1C' }}
          >
            <span className="relative z-10">View Work</span>
            <motion.div
              className="absolute inset-0"
              style={{ background: '#FF4500' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="font-rajdhani font-600 text-sm tracking-widest uppercase px-8 py-4 border"
            style={{ borderColor: 'rgba(245,232,216,0.3)', color: '#F5E8D8' }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap gap-12 mt-20 pt-8"
          style={{ borderTop: '1px solid rgba(245,232,216,0.06)' }}
        >
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Shipped' },
            { value: '3', label: 'Companies' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="font-orbitron text-3xl font-800 leading-none"
                style={{ color: '#DAA520' }}
              >
                {stat.value}
              </div>
              <div
                className="font-rajdhani text-xs tracking-widest uppercase mt-1"
                style={{ color: 'rgba(245,232,216,0.4)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: 0.4 }}
      >
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, transparent, #DAA520)' }}
        />
        <span
          className="font-rajdhani text-xs tracking-widest uppercase"
          style={{ color: '#DAA520' }}
        >
          Scroll
        </span>
      </motion.div> */}

      {/* Kinetic marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ borderTop: '1px solid rgba(218,165,32,0.08)' }}
      >
        <div className="marquee-inner py-3" style={{ gap: '3rem' }}>
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="font-orbitron text-xs tracking-widest uppercase mx-6"
                style={{ color: 'rgba(218,165,32,0.2)' }}
              >
                {i % 3 === 0 ? 'Fullstack Development' : i % 3 === 1 ? 'Laravel + React' : 'Next.js + TypeScript'}
                <span className="mx-6" style={{ color: 'rgba(255,111,97,0.3)' }}>*</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
