'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

    return () => {
      clearInterval(timer);
    };
  }, []);

  const pct = Math.min(100, Math.round(progress));

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#1C1C1C' }}
        >
          {/* ── Ambient crimson glow behind the figure ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute"
            style={{
              width: '520px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, #B80129 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(32px)',
            }}
          />

          {/* ── Progress bar ── */}
          <div
            className="mt-8 h-px w-48"
            style={{ background: 'rgba(245,232,216,0.1)' }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, #DAA520, #FF6F61)' }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}