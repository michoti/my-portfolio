'use client';

import React from 'react';

export const HexGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="hex" x="0" y="0" width="30" height="34.6" patternUnits="userSpaceOnUse">
        <polygon
          points="15,2 28,9.3 28,25.3 15,32.6 2,25.3 2,9.3"
          fill="none"
          stroke="rgba(218,165,32,0.15)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#hex)" />
  </svg>
);

export const CircuitLines: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 300"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="rgba(218,165,32,0.2)" strokeWidth="1" fill="none">
      <path d="M10 150 H80 V80 H200 V40" />
      <path d="M200 40 H260 V120 H290" />
      <path d="M10 200 H60 V260 H160 V290" />
      <path d="M160 150 H220 V200 H280 V220" />
      <circle cx="80" cy="150" r="4" fill="rgba(218,165,32,0.4)" stroke="none" />
      <circle cx="200" cy="80" r="4" fill="rgba(218,165,32,0.4)" stroke="none" />
      <circle cx="160" cy="150" r="4" fill="rgba(255,111,97,0.4)" stroke="none" />
      <circle cx="60" cy="200" r="4" fill="rgba(218,165,32,0.4)" stroke="none" />
      <circle cx="220" cy="200" r="4" fill="rgba(255,69,0,0.4)" stroke="none" />
    </g>
  </svg>
);

export const GeometricAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polygon
      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
      fill="none"
      stroke="rgba(218,165,32,0.4)"
      strokeWidth="1"
    />
    <polygon
      points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5"
      fill="none"
      stroke="rgba(255,111,97,0.2)"
      strokeWidth="0.5"
    />
    <circle cx="50" cy="50" r="6" fill="rgba(218,165,32,0.6)" />
  </svg>
);

export const BrushStroke: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#DAA520',
}) => (
  <svg
    viewBox="0 0 200 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path
      d="M2 10 C20 5, 50 13, 80 8 C110 3, 140 12, 170 9 C185 7, 195 10, 198 10"
      stroke={color}
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M5 12 C25 10, 55 14, 85 11 C115 8, 145 13, 175 11 C188 10, 196 12, 199 12"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

export const CornerOrnament: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0 60 L0 10 Q0 0 10 0 L60 0"
      fill="none"
      stroke="rgba(218,165,32,0.5)"
      strokeWidth="1.5"
    />
    <path
      d="M0 55 L0 15 Q0 5 10 5 L55 5"
      fill="none"
      stroke="rgba(218,165,32,0.2)"
      strokeWidth="0.5"
    />
    <circle cx="0" cy="0" r="3" fill="rgba(218,165,32,0.6)" />
  </svg>
);

export const OrbitRing: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,111,97,0.08)" strokeWidth="1" strokeDasharray="4 8" />
    <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(218,165,32,0.12)" strokeWidth="0.5" />
    <circle cx="100" cy="10" r="5" fill="rgba(218,165,32,0.6)" />
    <circle cx="190" cy="100" r="3" fill="rgba(255,111,97,0.6)" />
    <circle cx="30" cy="140" r="4" fill="rgba(255,69,0,0.4)" />
  </svg>
);

export const DiamondGrid: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="diamond" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M10 0 L20 10 L10 20 L0 10 Z"
          fill="none"
          stroke="rgba(218,165,32,0.12)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="160" height="160" fill="url(#diamond)" />
  </svg>
);

export const CodeBrackets: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 80"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <text
      x="10"
      y="55"
      fontFamily="monospace"
      fontSize="60"
      fill="none"
      stroke="rgba(218,165,32,0.2)"
      strokeWidth="1.5"
    >
      {'</>'}
    </text>
  </svg>
);

export const ProgressArc: React.FC<{ className?: string; percent: number; color?: string }> = ({
  className = '',
  percent,
  color = '#DAA520',
}) => {
  const r = 36;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <svg viewBox="0 0 88 88" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(245,232,216,0.06)" strokeWidth="4" />
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 44 44)"
      />
    </svg>
  );
};
