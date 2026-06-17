'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EXPERIENCE } from '@/lib/data';
import { BrushStroke, GeometricAccent } from '@/components/ui/SvgArtwork';

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: '#1F1F1F' }}
    >
      {/* Background number */}
      <div
        className="absolute top-20 right-4 font-orbitron font-900 select-none pointer-events-none hidden xl:block"
        style={{
          fontSize: '20vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(218,165,32,0.04)',
          lineHeight: 1,
        }}
      >
        03
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
            <div className="h-px flex-1 max-w-24" style={{ background: '#DAA520' }} />
            <span className="font-rajdhani text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(245,232,216,0.4)' }}>
              Career
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron font-800 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F5E8D8', letterSpacing: '-0.02em' }}
          >
            Career{' '}
            <span className="brush-underline" style={{ color: '#DAA520' }}>
              Progression
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-40 mt-3 origin-left"
          >
            <BrushStroke className="w-full" color="#DAA520" />
          </motion.div>
        </div>

        {/* Timeline — broken grid offset */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 lg:left-[calc(33.333%-1px)] top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, rgba(218,165,32,0.4), rgba(218,165,32,0.05))' }}
          />

          <div className="space-y-8 lg:space-y-0">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative"
                style={{ marginBottom: i < EXPERIENCE.length - 1 ? 'clamp(32px, 4vw, 56px)' : 0 }}
              >
                {/* Left: company + period */}
                <div
                  className="lg:col-span-4 lg:pr-12 pb-6 lg:pb-0 lg:text-right"
                  style={{ paddingTop: 'clamp(0px, 1vw, 8px)' }}
                >
                  <motion.div
                    whileHover={{ x: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="font-orbitron font-700 text-base leading-tight mb-1"
                      style={{ color: '#F5E8D8' }}
                    >
                      {exp.company}
                    </div>
                    <div
                      className="font-rajdhani text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#DAA520' }}
                    >
                      {exp.role}
                    </div>
                    <div
                      className="font-roboto text-xs"
                      style={{ color: 'rgba(245,232,216,0.35)' }}
                    >
                      {exp.location}
                    </div>
                    <div
                      className="font-rajdhani text-xs tracking-wider mt-1"
                      style={{ color: 'rgba(245,232,216,0.3)' }}
                    >
                      {exp.period}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex lg:col-span-1 justify-center pt-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                    className="relative z-10"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: i === 0 ? '#FF6F61' : '#DAA520',
                        boxShadow: `0 0 12px ${i === 0 ? 'rgba(255,111,97,0.5)' : 'rgba(218,165,32,0.5)'}`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right: highlights */}
                <div
                  className="lg:col-span-7 lg:pl-12"
                  style={{ marginTop: i % 2 === 1 ? 'clamp(0px, 2vw, 24px)' : '0' }}
                >
                  <div
                    className="bento-card p-7"
                    style={{ borderColor: i === 0 ? 'rgba(255,111,97,0.12)' : 'rgba(218,165,32,0.08)' }}
                  >
                    {/* Card header accent */}
                    <div
                      className="h-px mb-6 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${i === 0 ? '#FF6F61' : '#DAA520'}, transparent)`,
                      }}
                    />

                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: i * 0.15 + j * 0.08 + 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                            style={{ background: i === 0 ? '#FF6F61' : '#DAA520' }}
                          />
                          <span
                            className="font-roboto text-sm leading-relaxed"
                            style={{ color: 'rgba(245,232,216,0.65)' }}
                          >
                            {h}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bento-card p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          style={{ borderColor: 'rgba(218,165,32,0.15)' }}
        >
          <div className="lg:col-span-2 flex justify-start lg:justify-center">
            <GeometricAccent className="w-16 h-16 opacity-60" />
          </div>
          <div className="lg:col-span-10">
            <div className="font-rajdhani text-xs tracking-[0.4em] uppercase mb-2" style={{ color: '#DAA520' }}>
              Education
            </div>
            <div className="font-orbitron font-700 text-xl" style={{ color: '#F5E8D8' }}>
              BSc. Computer Science
            </div>
            <div className="font-roboto text-sm mt-1" style={{ color: 'rgba(245,232,216,0.5)' }}>
              Africa Nazarene University
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
