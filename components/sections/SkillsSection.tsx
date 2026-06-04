'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SKILLS, UNSPLASH_IMAGES } from '@/lib/data';
import { BrushStroke, ProgressArc, HexGrid } from '@/components/ui/SvgArtwork';

const skillProficiency: Record<string, number> = {
  HTML5: 95, CSS3: 92, JavaScript: 90, TypeScript: 78, PHP: 85, SQL: 80, NoSQL: 72,
  React: 88, 'Next.js': 82, Laravel: 87, 'Tailwind CSS': 91,
  Git: 93, Docker: 78, AWS: 65, RabbitMQ: 70, Pusher: 72, Jira: 85, 'GitHub Actions': 76,
};

const arcColors: Record<string, string> = {
  languages: '#FF6F61',
  frameworks: '#DAA520',
  tools: '#FF4500',
};

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = [
    { key: 'languages', label: 'Languages', items: SKILLS.languages },
    { key: 'frameworks', label: 'Frameworks', items: SKILLS.frameworks },
    { key: 'tools', label: 'Tools & DevOps', items: SKILLS.tools },
  ] as const;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <HexGrid className="w-full h-full" />
      </div>

      {/* Skills image ambient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `url(${UNSPLASH_IMAGES.skills})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background number */}
      <div
        className="absolute top-20 left-4 font-orbitron font-900 select-none pointer-events-none hidden xl:block"
        style={{
          fontSize: '20vw',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(218,165,32,0.04)',
          lineHeight: 1,
        }}
      >
        04
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
            <div className="h-px flex-1 max-w-24" style={{ background: '#FF4500' }} />
            <span className="font-rajdhani text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(245,232,216,0.4)' }}>
              Technical Proficiency
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron font-800 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F5E8D8', letterSpacing: '-0.02em' }}
          >
            Skills &{' '}
            <span style={{ color: '#FF4500' }}>Arsenal</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-40 mt-3 origin-left"
          >
            <BrushStroke className="w-full" color="#FF4500" />
          </motion.div>
        </div>

        {/* Skills bento grid — asymmetric Picasso layout */}
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.15 }}
              className="bento-card p-8"
              style={{
                borderColor: `rgba(${
                  catIndex === 0 ? '255,111,97' : catIndex === 1 ? '218,165,32' : '255,69,0'
                },0.1)`,
                marginLeft: catIndex === 1 ? 'clamp(0px, 4vw, 60px)' : '0',
                marginRight: catIndex === 2 ? 'clamp(0px, 4vw, 60px)' : '0',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="font-orbitron font-700 text-xs tracking-[0.4em] uppercase"
                  style={{ color: arcColors[category.key] }}
                >
                  {category.label}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: `rgba(${catIndex === 0 ? '255,111,97' : catIndex === 1 ? '218,165,32' : '255,69,0'},0.15)` }}
                />
              </div>

              {/* Skills with arc indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.items.map((skill, j) => {
                  const pct = skillProficiency[skill] ?? 75;
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: catIndex * 0.15 + j * 0.06 + 0.3 }}
                      className="flex flex-col items-center gap-3 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="relative w-16 h-16">
                        <ProgressArc
                          className="w-full h-full"
                          percent={pct}
                          color={arcColors[category.key]}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center font-orbitron text-xs font-700"
                          style={{ color: arcColors[category.key] }}
                        >
                          {pct}
                        </div>
                      </div>
                      <span
                        className="font-rajdhani font-600 text-xs tracking-wider uppercase text-center"
                        style={{ color: 'rgba(245,232,216,0.7)' }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
