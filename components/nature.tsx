'use client';

import { AnimatedSection } from '@/components/animated-section';

// Murmuration dots — arranged in a loose flock shape
// Each group uses a different CSS keyframe animation with different delays
const FLOCK: Array<{
  cx: number;
  cy: number;
  r: number;
  color: string;
  anim: string;
  delay: string;
  dur: string;
}> = [
  // Core cluster
  { cx: 190, cy: 145, r: 3.5, color: '#d4a94e', anim: 'murmur-a', delay: '0s', dur: '3.2s' },
  { cx: 205, cy: 140, r: 2.5, color: '#d4a94e', anim: 'murmur-b', delay: '0.15s', dur: '2.8s' },
  { cx: 215, cy: 152, r: 3, color: '#a27e2d', anim: 'murmur-c', delay: '0.3s', dur: '3.5s' },
  { cx: 200, cy: 158, r: 2, color: '#3c9c6c', anim: 'murmur-a', delay: '0.5s', dur: '2.6s' },
  { cx: 185, cy: 155, r: 2.5, color: '#d4a94e', anim: 'murmur-d', delay: '0.1s', dur: '3.8s' },
  { cx: 195, cy: 162, r: 2, color: '#3c9c6c', anim: 'murmur-e', delay: '0.7s', dur: '2.9s' },
  { cx: 210, cy: 165, r: 3, color: '#a27e2d', anim: 'murmur-b', delay: '0.4s', dur: '3.1s' },
  // Outer ring
  { cx: 170, cy: 138, r: 2, color: '#d4a94e', anim: 'murmur-c', delay: '0.2s', dur: '3.4s' },
  { cx: 228, cy: 144, r: 2.5, color: '#3c9c6c', anim: 'murmur-a', delay: '0.6s', dur: '2.7s' },
  { cx: 235, cy: 158, r: 2, color: '#d4a94e', anim: 'murmur-d', delay: '0.9s', dur: '3.6s' },
  { cx: 222, cy: 172, r: 3, color: '#a27e2d', anim: 'murmur-e', delay: '0.3s', dur: '3.0s' },
  { cx: 178, cy: 168, r: 2.5, color: '#3c9c6c', anim: 'murmur-b', delay: '0.8s', dur: '2.5s' },
  { cx: 163, cy: 152, r: 2, color: '#d4a94e', anim: 'murmur-c', delay: '1.1s', dur: '3.3s' },
  { cx: 172, cy: 125, r: 1.5, color: '#3c9c6c', anim: 'murmur-a', delay: '1.4s', dur: '2.8s' },
  { cx: 198, cy: 128, r: 2, color: '#d4a94e', anim: 'murmur-d', delay: '0.5s', dur: '3.7s' },
  { cx: 220, cy: 133, r: 1.5, color: '#a27e2d', anim: 'murmur-e', delay: '1.0s', dur: '2.6s' },
  // Leading edge (direction of "flight")
  { cx: 248, cy: 150, r: 2, color: '#d4a94e', anim: 'murmur-a', delay: '0.05s', dur: '2.4s' },
  { cx: 260, cy: 145, r: 1.5, color: '#3c9c6c', anim: 'murmur-b', delay: '0.3s', dur: '3.2s' },
  { cx: 262, cy: 158, r: 1.5, color: '#d4a94e', anim: 'murmur-c', delay: '0.7s', dur: '2.9s' },
  { cx: 272, cy: 151, r: 1, color: '#a27e2d', anim: 'murmur-e', delay: '0.2s', dur: '3.5s' },
  // Trailing edge
  { cx: 148, cy: 142, r: 2, color: '#3c9c6c', anim: 'murmur-d', delay: '1.2s', dur: '3.0s' },
  { cx: 138, cy: 150, r: 1.5, color: '#d4a94e', anim: 'murmur-a', delay: '1.5s', dur: '2.7s' },
  { cx: 145, cy: 160, r: 1, color: '#a27e2d', anim: 'murmur-b', delay: '1.8s', dur: '3.4s' },
  // Stragglers
  { cx: 195, cy: 118, r: 1.5, color: '#d4a94e', anim: 'murmur-c', delay: '2.0s', dur: '4.0s' },
  { cx: 242, cy: 136, r: 1.5, color: '#3c9c6c', anim: 'murmur-e', delay: '0.6s', dur: '2.8s' },
  { cx: 180, cy: 178, r: 1.5, color: '#d4a94e', anim: 'murmur-d', delay: '1.6s', dur: '3.6s' },
];

export function Nature() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{ background: '#002e1f' }}
    >
      {/* Top separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(162,126,45,0.5), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Text side ── */}
          <AnimatedSection>
            <p
              className="mb-4 text-xs font-bold uppercase tracking-widest"
              style={{ color: '#d4a94e' }}
            >
              Nature-Inspired Intelligence
            </p>
            <h2
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
              style={{ color: '#ffffff' }}
            >
              A flock of birds{' '}
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                inside your data center
              </span>
            </h2>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.52)' }}
            >
              Think of a flock of birds reacting to a sudden change in the wind — no central
              control, yet a couple of birds on the outside change direction or speed almost
              instantly and the rest of the group follows.
            </p>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.52)' }}
            >
              PhysaFlow's{' '}
              <span style={{ color: '#d4a94e', fontWeight: 600 }}>BioCore AI</span>{' '}
              works the same way inside a US data center — distributed intelligence, zero
              bottleneck, instant adaptation.
            </p>

            {/* Feature tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'No Central Control',
                'Instant Adaptation',
                'Distributed Intelligence',
                'BioCore AI',
                'Zero Bottleneck',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-xs font-semibold"
                  style={{
                    border: '1px solid rgba(162,126,45,0.35)',
                    background: 'rgba(162,126,45,0.09)',
                    color: '#d4a94e',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Murmuration visual ── */}
          <AnimatedSection delay={200} className="flex items-center justify-center">
            <div
              className="relative w-full max-w-md overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(162,126,45,0.22)',
                background: 'rgba(0,30,20,0.85)',
                boxShadow:
                  '0 0 0 1px rgba(162,126,45,0.05), 0 20px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,169,78,0.08)',
                aspectRatio: '4/3',
              }}
            >
              {/* Corner brackets */}
              {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map(
                (pos, i) => (
                  <div
                    key={pos}
                    className={`absolute ${pos} h-6 w-6`}
                    style={{
                      borderTop: i < 2 ? '1.5px solid rgba(162,126,45,0.4)' : 'none',
                      borderBottom: i >= 2 ? '1.5px solid rgba(162,126,45,0.4)' : 'none',
                      borderLeft: i % 2 === 0 ? '1.5px solid rgba(162,126,45,0.4)' : 'none',
                      borderRight: i % 2 === 1 ? '1.5px solid rgba(162,126,45,0.4)' : 'none',
                    }}
                  />
                ),
              )}

              {/* Top label */}
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest"
                style={{ color: 'rgba(212,169,78,0.35)' }}
              >
                BioCore · Murmuration Pattern
              </div>

              {/* SVG flock */}
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full"
              >
                {/* Radial background glow */}
                <defs>
                  <radialGradient id="flock-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a27e2d" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#a27e2d" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="150" rx="140" ry="80" fill="url(#flock-glow)" />

                {/* Direction arrow (faint) */}
                <path
                  d="M 130 150 L 285 150"
                  stroke="rgba(162,126,45,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />

                {/* Flock dots */}
                {FLOCK.map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill={dot.color}
                    opacity={0.75}
                    style={{
                      animation: `${dot.anim} ${dot.dur} ease-in-out infinite`,
                      animationDelay: dot.delay,
                      transformOrigin: `${dot.cx}px ${dot.cy}px`,
                    }}
                  />
                ))}

                {/* Bottom label */}
                <text
                  x="200"
                  y="290"
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="0.12em"
                  fill="rgba(212,169,78,0.3)"
                >
                  DISTRIBUTED · ADAPTIVE · REAL-TIME
                </text>
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
