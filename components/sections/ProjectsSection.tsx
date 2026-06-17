'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PROJECTS } from '@/lib/data';
import { BrushStroke, CodeBrackets } from '@/components/ui/SvgArtwork';
import Link from 'next/link';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(218,165,32,0.2), transparent)' }}
      />

      {/* Background number — typographic decoration */}
      <div
        className="absolute top-20 right-4 font-orbitron font-900 select-none pointer-events-none hidden xl:block"
        style={{
          fontSize: '20vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(218,165,32,0.04)',
          lineHeight: 1,
        }}
      >
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px flex-1 max-w-24" style={{ background: '#FF6F61' }} />
              <span className="font-rajdhani text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(245,232,216,0.4)' }}>
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-orbitron font-800 leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F5E8D8', letterSpacing: '-0.02em' }}
            >
              Projects That{' '}
              <span style={{ color: '#FF6F61' }}>Matter</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-40 mt-3 origin-left"
            >
              <BrushStroke className="w-full" color="#FF6F61" />
            </motion.div>
          </div>

          {/* Right — decorative SVG */}
          <div className="lg:col-span-5 lg:flex lg:justify-end lg:items-end hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <CodeBrackets className="w-32 h-20 opacity-30" />
            </motion.div>
          </div>
        </div>

        {/* Picasso-inspired broken grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {PROJECTS.map((project, i) => {
            const colSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-12'];
            const colSpanClass = colSpans[i] ?? 'lg:col-span-12';
            const offsetTop = i === 1 ? 60 : 0;

            return (
              <motion.article
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={`bento-card group relative overflow-hidden ${colSpanClass}`}
                style={{ marginTop: offsetTop }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: i === 2 ? '280px' : '320px' }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(28,28,28,0.1) 0%, rgba(28,28,28,0.85) 100%)',
                    }}
                  />

                  {/* Year badge */}
                  <div
                    className="absolute top-5 right-5 font-orbitron text-xs tracking-widest"
                    style={{ color: '#DAA520' }}
                  >
                    {project.year}
                  </div>

                  {/* Category */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="font-rajdhani text-xs tracking-widest uppercase px-3 py-1 border"
                      style={{
                        borderColor: 'rgba(255,111,97,0.4)',
                        color: '#FF6F61',
                        background: 'rgba(28,28,28,0.7)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay content */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(255,111,97,0.08)' }}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-6 py-3 font-rajdhani text-sm tracking-widest uppercase"
                      style={{ borderColor: '#FF6F61', color: '#FF6F61' }}
                    >
                      View Project
                    </Link>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-orbitron font-700 leading-tight"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: '#F5E8D8' }}
                    >
                      {project.title}
                    </h3>
                    <div
                      className="font-rajdhani text-xs tracking-widest uppercase shrink-0"
                      style={{ color: 'rgba(245,232,216,0.35)' }}
                    >
                      {project.role}
                    </div>
                  </div>

                  <p
                    className="font-roboto text-sm leading-relaxed mb-6"
                    style={{ color: 'rgba(245,232,216,0.55)' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-rajdhani text-xs tracking-wider uppercase px-3 py-1"
                        style={{
                          background: 'rgba(245,232,216,0.05)',
                          border: '1px solid rgba(245,232,216,0.1)',
                          color: 'rgba(245,232,216,0.5)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gold accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px"
                  style={{ background: 'linear-gradient(90deg, #DAA520, #FF6F61)', originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(218,165,32,0.1), transparent)' }}
      />
    </section>
  );
}
