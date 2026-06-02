'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { UNSPLASH_IMAGES } from '@/lib/data';
import { BrushStroke, DiamondGrid, CornerOrnament } from '@/components/ui/SvgArtwork';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-20">
        <DiamondGrid className="w-full h-full" style={{ objectFit: 'cover' }} />
      </div>

      {/* Vertical rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(218,165,32,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 max-w-24" style={{ background: '#FF6F61' }} />
          <span
            className="font-rajdhani text-xs tracking-[0.4em] uppercase"
            style={{ color: 'rgba(245,232,216,0.4)' }}
          >
            About Me
          </span>
        </motion.div>

        {/* Asymmetric grid — Picasso-inspired */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 items-start">
          
          {/* Left column: offset image block */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-5 relative mb-16 lg:mb-0"
            style={{ marginTop: 'clamp(0px, 4vw, 60px)' }}
          >
            {/* Corner ornament */}
            <CornerOrnament className="absolute -top-4 -left-4 w-10 h-10 z-20 opacity-70" />

            {/* Main image */}
            <div
              className="relative overflow-hidden bento-card"
              style={{ aspectRatio: '4/5', maxWidth: '400px' }}
            >
              <motion.img
                src={UNSPLASH_IMAGES.about}
                alt="Software development workspace"
                className="w-full h-full object-cover"
                style={{ y: imageY }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, transparent 40%, rgba(28,28,28,0.6) 100%)',
                }}
              />
              {/* Image overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="font-orbitron text-xs tracking-widest uppercase"
                  style={{ color: '#DAA520' }}
                >
                  BSc. Computer Science
                </div>
                <div
                  className="font-roboto text-sm mt-1"
                  style={{ color: 'rgba(245,232,216,0.6)' }}
                >
                  Africa Nazarene University, 2022
                </div>
              </div>
            </div>

            {/* Floating accent block — broken grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -right-6 top-1/3 w-32 h-32 bento-card flex items-center justify-center"
              style={{ border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(36,36,36,0.95)' }}
            >
              <div className="text-center">
                <div
                  className="font-orbitron text-2xl font-800"
                  style={{ color: '#DAA520' }}
                >
                  4+
                </div>
                <div
                  className="font-rajdhani text-xs tracking-widest uppercase mt-1"
                  style={{ color: 'rgba(245,232,216,0.4)' }}
                >
                  Years
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — text content, offset */}
          <div
            className="lg:col-span-7 lg:pl-20"
            style={{ paddingTop: 'clamp(0px, 2vw, 40px)' }}
          >
            <motion.h2
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-orbitron font-800 leading-tight mb-3"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#F5E8D8',
                letterSpacing: '-0.02em',
              }}
            >
              Crafting Digital{' '}
              <span className="brush-underline" style={{ color: '#FF6F61' }}>
                Experiences
              </span>
            </motion.h2>

            {/* Brush stroke accent under heading */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="w-48 mb-8"
            >
              <BrushStroke className="w-full" color="#DAA520" />
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-roboto text-base leading-[1.9] mb-6"
              style={{ color: 'rgba(245,232,216,0.7)' }}
            >
              I am an innovative, solution-oriented{' '}
              <span style={{ color: '#F5E8D8', fontStyle: 'italic' }}>Fullstack Developer</span>{' '}
              with a passion for building{' '}
              <span className="brush-underline" style={{ color: '#DAA520' }}>
                robust
              </span>{' '}
              and performant web applications. My craft spans the full spectrum — from architecting 
              resilient Laravel APIs to sculpting pixel-perfect React interfaces.
            </motion.p>

            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-roboto text-base leading-[1.9] mb-10"
              style={{ color: 'rgba(245,232,216,0.55)' }}
            >
              Anchored in Nairobi with a global perspective, I thrive in collaborative engineering 
              teams where precision meets velocity. Every line of code is deliberate, every interface 
              decision intentional.
            </motion.p>

            {/* Value pillars — bento-style asymmetric */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Architecture', desc: 'Scalable, maintainable system design' },
                { label: 'Performance', desc: 'Optimized for speed & reliability' },
                { label: 'Collaboration', desc: 'Cross-functional team leadership' },
                { label: 'Delivery', desc: 'On-time, production-ready output' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={6 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="bento-card p-5 group hover:border-gold-400 transition-all duration-300"
                  style={{
                    borderColor: 'rgba(245,232,216,0.06)',
                    marginTop: i % 2 === 1 ? '16px' : '0',
                  }}
                  whileHover={{ y: -4, borderColor: 'rgba(218,165,32,0.3)' }}
                >
                  <div
                    className="font-rajdhani font-600 text-sm tracking-wider uppercase mb-2"
                    style={{ color: '#DAA520' }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="font-roboto text-xs leading-relaxed"
                    style={{ color: 'rgba(245,232,216,0.5)' }}
                  >
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ambient image */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-5"
        style={{
          backgroundImage: `url(${UNSPLASH_IMAGES.ambient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}
