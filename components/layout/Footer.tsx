'use client';

import { motion } from 'motion/react';
import { GeometricAccent } from '@/components/ui/SvgArtwork';

export default function Footer() {
  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{
        background: '#161616',
        borderTop: '1px solid rgba(218,165,32,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
          <GeometricAccent className="w-7 h-7 opacity-60" />
          <span className="font-orbitron text-xs font-700 tracking-widest" style={{ color: '#DAA520' }}>
            EMMANUEL MICHOTI
          </span>
        </motion.div>

        {/* Copyright */}
        <div className="font-roboto text-xs text-center" style={{ color: 'rgba(245,232,216,0.25)' }}>
          Designed and engineered with precision in Nairobi, Kenya — {new Date().getFullYear()}
        </div>

        {/* Stack note */}
        <div className="font-rajdhani text-xs tracking-widest uppercase" style={{ color: 'rgba(245,232,216,0.2)' }}>
          Next.js · TypeScript · Framer Motion
        </div>
      </div>
    </footer>
  );
}
