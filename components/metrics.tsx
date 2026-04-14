'use client';

import { useRef, useEffect, useState } from 'react';
import { AnimatedSection } from '@/components/animated-section';

function useCountUp(target: number, started: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

function CounterCard({
  rawValue,
  numericTarget,
  prefix,
  suffix,
  label,
  sublabel,
  delay,
}: {
  rawValue: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  const count = useCountUp(numericTarget, started, 1800);

  // Format the displayed count
  const display = numericTarget >= 1000
    ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 0)}K`
    : numericTarget >= 1_000_000_000
    ? `${(count / 1_000_000_000).toFixed(0)}B`
    : count;

  return (
    <AnimatedSection delay={delay}>
      <div
        ref={ref}
        className="group relative overflow-hidden rounded-2xl p-px transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, rgba(162,126,45,0.5), rgba(26,107,79,0.3), rgba(212,169,78,0.2))',
        }}
      >
        <div
          className="relative h-full overflow-hidden rounded-2xl p-8 text-center"
          style={{ background: '#003a27' }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(162,126,45,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Value */}
          <div
            className="relative text-5xl font-extrabold tracking-tight sm:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {prefix}
            {started ? (numericTarget >= 1000 ? `${Math.round(count / 1000)}K` : count) : '0'}
            {suffix}
          </div>

          {/* Label */}
          <p
            className="mt-3 text-sm font-bold uppercase tracking-wider"
            style={{ color: '#ffffff' }}
          >
            {label}
          </p>
          <p
            className="mt-2 text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {sublabel}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

const metrics = [
  {
    rawValue: '10B',
    numericTarget: 10,
    suffix: 'B',
    label: 'Daily Queries Handled',
    sublabel: 'Large data centers process around 10 billion queries per day — PhysaFlow optimizes every one.',
  },
  {
    rawValue: '8K',
    numericTarget: 8,
    suffix: 'K',
    label: 'Households Powered',
    sublabel: 'Energy savings equivalent to powering 8,000 households annually.',
  },
  {
    rawValue: '30K',
    numericTarget: 30,
    suffix: 'K',
    label: "Households' Water Saved",
    sublabel: 'Water savings equivalent to supplying 30,000 households per year.',
  },
  {
    rawValue: '+1B',
    numericTarget: 1,
    prefix: '+',
    suffix: 'B',
    label: 'More Queries Per Day',
    sublabel: 'Unlocking capacity for 1 billion additional queries from existing infrastructure.',
  },
];

export function Metrics() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden py-32"
      style={{ background: '#003a27' }}
    >
      {/* Animated gradient accent line top */}
      <div className="absolute inset-x-0 top-0 h-px animate-gradient-line" />

      {/* Background mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,79,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,79,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Central radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(162,126,45,0.1) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#d4a94e' }}
          >
            Real-World Impact
          </p>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: '#ffffff' }}
          >
            What PhysaFlow delivers{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              at scale
            </span>
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.48)' }}
          >
            Numbers from a single large-scale deployment. More capacity, less waste, same hardware.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <CounterCard key={m.label} {...m} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px animate-gradient-line" />
    </section>
  );
}
