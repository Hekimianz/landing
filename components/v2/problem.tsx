'use client';

import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const problems = [
  {
    num: '01',
    stat: '⅔',
    unit: '',
    label: 'Cooling & Water Crisis',
    description:
      'Two-thirds of US data centers are located far from reliable water sources — yet cooling AI hardware requires massive amounts of it. The infrastructure wasn\'t designed for this era.',
    accent: '#3b82f6',
  },
  {
    num: '02',
    stat: 'Japan',
    unit: '',
    label: 'Exploding Energy Demand',
    description:
      'By 2030, US data centers are expected to consume more electricity than the entire country of Japan. The more powerful the hardware, the higher the burden on the grid.',
    accent: '#d4a94e',
  },
  {
    num: '03',
    stat: '5',
    unit: 'yrs',
    label: "Supply Can't Keep Up",
    description:
      'Even hyperscalers take up to five years to build new facilities due to power and grid constraints. Demand is exploding, but new supply cannot keep pace.',
    accent: '#e74c3c',
  },
];

export function V2Problem() {
  const { ref: headRef, visible: headVisible } = useInView();

  return (
    <section
      id="v2-problem"
      className="relative overflow-hidden py-28"
      style={{ background: '#001f15' }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(162,126,45,0.5), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="mb-20 transition-all duration-700"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: '#d4a94e' }}
          >
            Why It Matters Now
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: '#ffffff' }}
            >
              AI is pushing data centers
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                to their limits.
              </span>
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed sm:text-right"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Three compounding constraints that no one can build their way out of — fast enough.
            </p>
          </div>
        </div>

        {/* Problem panels */}
        <div className="grid grid-cols-1 gap-px md:grid-cols-3"
          style={{ background: 'rgba(26,107,79,0.15)', borderRadius: '20px', overflow: 'hidden' }}
        >
          {problems.map((p, i) => (
            <ProblemPanel key={p.num} {...p} delay={i * 150} />
          ))}
        </div>

        {/* Conclusion callout */}
        <CalloutBanner />
      </div>
    </section>
  );
}

function ProblemPanel({
  num, stat, unit, label, description, accent, delay,
}: (typeof problems)[0] & { delay: number }) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="relative flex flex-col p-8 transition-all duration-700 lg:p-10"
      style={{
        background: '#001a12',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Top-left number */}
      <span
        className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{ color: 'rgba(255,255,255,0.2)' }}
      >
        {num}
      </span>

      {/* Label / Title */}
      <h3
        className="mb-5 text-xl font-bold leading-tight tracking-tight sm:text-2xl"
        style={{ color: accent }}
      >
        {label}
      </h3>

      {/* Stat — supporting data */}
      <div
        className="mb-2 text-[3.2rem] font-black leading-none tracking-tight sm:text-[4rem]"
        style={{ color: '#ffffff' }}
      >
        {stat}
        {unit && (
          <span className="ml-1 text-2xl font-extrabold" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {unit}
          </span>
        )}
      </div>

      {/* Body */}
      <p
        className="mt-auto text-sm leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.42)' }}
      >
        {description}
      </p>

      {/* Accent bottom bar */}
      <div
        className="mt-8 h-0.5 w-12 rounded-full"
        style={{ background: accent, opacity: 0.5 }}
      />
    </div>
  );
}

function CalloutBanner() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="mt-6 overflow-hidden rounded-2xl transition-all duration-700"
      style={{
        border: '1px solid rgba(231,76,60,0.25)',
        background: 'rgba(231,76,60,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="flex flex-col items-center gap-3 px-8 py-6 sm:flex-row sm:justify-between">
        <p
          className="text-sm font-semibold leading-relaxed sm:text-base"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          Demand is exploding, but supply can't keep up —{' '}
          <span style={{ color: '#e74c3c' }}>creating a massive bottleneck.</span>
        </p>
        <p
          className="shrink-0 text-sm font-bold"
          style={{ color: 'rgba(231,76,60,0.8)' }}
        >
          Many AI projects risk becoming dead in the water.
        </p>
      </div>
    </div>
  );
}
