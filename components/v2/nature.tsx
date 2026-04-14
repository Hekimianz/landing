'use client';

import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Dense murmuration — 60 birds in 5 subgroups
const genBirds = () => {
  const birds: Array<{ cx: number; cy: number; r: number; color: string; animClass: string; delay: string; dur: string }> = [];
  const animClasses = ['v2-murm-a', 'v2-murm-b', 'v2-murm-c', 'v2-murm-d', 'v2-murm-e'];
  const colors = ['#d4a94e', '#a27e2d', '#3c9c6c', '#d4a94e', '#a27e2d'];

  // Core dense cluster around (300, 200)
  for (let i = 0; i < 22; i++) {
    const angle = (i / 22) * Math.PI * 2;
    const r2 = 30 + Math.random() * 35;
    birds.push({
      cx: 300 + Math.cos(angle) * r2 * 1.6,
      cy: 200 + Math.sin(angle) * r2 * 0.8,
      r: 2 + Math.random() * 2.5,
      color: colors[i % 5],
      animClass: animClasses[i % 5],
      delay: `${(Math.random() * 2.5).toFixed(2)}s`,
      dur: `${(2.4 + Math.random() * 2).toFixed(1)}s`,
    });
  }

  // Leading edge (right side)
  for (let i = 0; i < 14; i++) {
    birds.push({
      cx: 380 + Math.random() * 80,
      cy: 175 + Math.random() * 50,
      r: 1 + Math.random() * 1.8,
      color: colors[(i + 2) % 5],
      animClass: animClasses[(i + 1) % 5],
      delay: `${(Math.random() * 1.5).toFixed(2)}s`,
      dur: `${(2.2 + Math.random() * 1.8).toFixed(1)}s`,
    });
  }

  // Trailing (left)
  for (let i = 0; i < 10; i++) {
    birds.push({
      cx: 150 + Math.random() * 70,
      cy: 185 + Math.random() * 40,
      r: 1 + Math.random() * 1.5,
      color: colors[(i + 3) % 5],
      animClass: animClasses[(i + 2) % 5],
      delay: `${(1 + Math.random() * 2).toFixed(2)}s`,
      dur: `${(2.6 + Math.random() * 1.6).toFixed(1)}s`,
    });
  }

  // Stragglers
  for (let i = 0; i < 14; i++) {
    birds.push({
      cx: 100 + Math.random() * 500,
      cy: 120 + Math.random() * 180,
      r: 1,
      color: colors[i % 5],
      animClass: animClasses[i % 5],
      delay: `${(Math.random() * 3).toFixed(2)}s`,
      dur: `${(3 + Math.random() * 2).toFixed(1)}s`,
    });
  }

  return birds;
};

const BIRDS = genBirds();

export function V2Nature() {
  const { ref: headRef, visible: headVisible } = useInView(0.08);
  const { ref: vizRef, visible: vizVisible } = useInView(0.08);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#001a12' }}
    >
      {/* Top separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(162,126,45,0.5), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left: copy */}
          <div
            ref={headRef}
            className="transition-all duration-700"
            style={{
              opacity: headVisible ? 1 : 0,
              transform: headVisible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <p
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: '#d4a94e' }}
            >
              Nature-Inspired Intelligence
            </p>

            <h2
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl"
              style={{ color: '#ffffff' }}
            >
              A flock of birds.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Inside your data center.
              </span>
            </h2>

            {/* Pull quote */}
            <div
              className="my-7 border-l-2 pl-5"
              style={{ borderColor: 'rgba(212,169,78,0.4)' }}
            >
              <p
                className="text-base italic leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                "Think of a flock of birds reacting to a sudden change in the wind — no central
                control, yet a couple of birds on the outside change direction almost instantly
                and the rest follow."
              </p>
            </div>

            <p className="mb-6 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
              PhysaFlow's{' '}
              <span className="font-bold" style={{ color: '#d4a94e' }}>BioCore AI</span>{' '}
              works the same way inside a US data center — distributed intelligence, zero
              bottleneck, instant adaptation to shifting workloads and thermal conditions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['No Central Control', 'Instant Adaptation', 'Distributed Intelligence', 'BioCore AI', 'Zero Bottleneck'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    border: '1px solid rgba(162,126,45,0.3)',
                    background: 'rgba(162,126,45,0.07)',
                    color: '#d4a94e',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: murmuration visualization */}
          <div
            ref={vizRef}
            className="flex items-center justify-center transition-all duration-700"
            style={{
              opacity: vizVisible ? 1 : 0,
              transform: vizVisible ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '200ms',
            }}
          >
            <div
              className="relative w-full max-w-[520px] overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(162,126,45,0.18)',
                background: 'rgba(0,10,7,0.9)',
                boxShadow: '0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,169,78,0.06)',
                aspectRatio: '5/4',
              }}
            >
              {/* Corner brackets */}
              {[
                { pos: 'top-3 left-3', bt: '1.5px solid', bb: 'none', bl: '1.5px solid', br: 'none' },
                { pos: 'top-3 right-3', bt: '1.5px solid', bb: 'none', bl: 'none', br: '1.5px solid' },
                { pos: 'bottom-3 left-3', bt: 'none', bb: '1.5px solid', bl: '1.5px solid', br: 'none' },
                { pos: 'bottom-3 right-3', bt: 'none', bb: '1.5px solid', bl: 'none', br: '1.5px solid' },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`absolute ${c.pos} h-5 w-5`}
                  style={{
                    borderTop: c.bt !== 'none' ? `${c.bt} rgba(162,126,45,0.35)` : 'none',
                    borderBottom: c.bb !== 'none' ? `${c.bb} rgba(162,126,45,0.35)` : 'none',
                    borderLeft: c.bl !== 'none' ? `${c.bl} rgba(162,126,45,0.35)` : 'none',
                    borderRight: c.br !== 'none' ? `${c.br} rgba(162,126,45,0.35)` : 'none',
                  }}
                />
              ))}

              {/* Label */}
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-[0.18em]"
                style={{ color: 'rgba(212,169,78,0.32)' }}
              >
                BioCore · Murmuration Pattern
              </div>

              <svg viewBox="0 0 600 480" className="h-full w-full">
                <defs>
                  <radialGradient id="v2-flock-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a27e2d" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#a27e2d" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient glow */}
                <ellipse cx="300" cy="200" rx="180" ry="100" fill="url(#v2-flock-glow)" />

                {/* Direction arrow */}
                <path
                  d="M 100 200 L 510 200"
                  stroke="rgba(162,126,45,0.06)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                />

                {/* Birds */}
                {BIRDS.map((b, i) => (
                  <circle
                    key={i}
                    cx={b.cx}
                    cy={b.cy}
                    r={b.r}
                    fill={b.color}
                    opacity={0.7}
                    style={{
                      animation: `${b.animClass} ${b.dur} ease-in-out infinite`,
                      animationDelay: b.delay,
                      transformOrigin: `${b.cx}px ${b.cy}px`,
                    }}
                  />
                ))}

                {/* Bottom label */}
                <text
                  x="300"
                  y="465"
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="monospace"
                  letterSpacing="0.14em"
                  fill="rgba(212,169,78,0.28)"
                >
                  DISTRIBUTED · ADAPTIVE · REAL-TIME
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
