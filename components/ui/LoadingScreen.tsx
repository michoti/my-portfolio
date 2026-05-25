'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrbitRing } from '@/components/ui/SvgArtwork';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
          style={{ background: '#1C1C1C' }}
        >
          {/* Spinning orbit */}
          <div className="relative w-32 h-32 mb-10">
            <div className="absolute inset-0 spin-slow">
              <OrbitRing className="w-full h-full" />
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center font-orbitron text-xs font-700 tracking-widest"
              style={{ color: '#DAA520' }}
            >
              {Math.min(100, Math.round(progress))}%
            </div>
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-orbitron font-800 tracking-widest text-center"
            style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: '#F5E8D8' }}
          >
            EMMANUEL
            <br />
            <span style={{ color: '#FF6F61', fontSize: '0.6em' }}>MICHOTI</span>
          </motion.div>

          {/* Progress bar */}
          <div
            className="mt-10 h-px w-48"
            style={{ background: 'rgba(245,232,216,0.1)' }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, #DAA520, #FF6F61)' }}
              animate={{ width: `${Math.min(100, progress)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <div
            className="mt-4 font-rajdhani text-xs tracking-[0.4em] uppercase"
            style={{ color: 'rgba(245,232,216,0.3)' }}
          >
            Initializing Portfolio
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
