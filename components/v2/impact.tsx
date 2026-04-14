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

function useCountUp(target: number, started: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

const metrics = [
  {
    prefix: '',
    target: 10,
    suffix: 'B',
    label: 'Daily Queries Handled',
    sub: 'Large data centers process ~10 billion queries per day. PhysaFlow optimizes every single one.',
    color: '#d4a94e',
  },
  {
    prefix: '',
    target: 8,
    suffix: 'K',
    label: 'Households Powered',
    sub: 'Energy savings equivalent to powering 8,000 households annually from a single deployment.',
    color: '#3c9c6c',
  },
  {
    prefix: '',
    target: 30,
    suffix: 'K',
    label: "Households' Water Saved",
    sub: 'Water savings per year equivalent to supplying 30,000 households with clean water.',
    color: '#3b82f6',
  },
  {
    prefix: '+',
    target: 1,
    suffix: 'B',
    label: 'More Queries Per Day',
    sub: 'Unlocking capacity for 1 billion additional AI queries — from the same infrastructure.',
    color: '#d4a94e',
  },
];

function MetricCard({
  prefix, target, suffix, label, sub, color, delay,
}: (typeof metrics)[0] & { delay: number }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  const count = useCountUp(target, started);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-px transition-all duration-500 hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${color}50, rgba(26,107,79,0.2), ${color}20)`,
        transitionDelay: `${delay}ms`,
        animation: `v2-fade-up 0.7s ease-out both`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        className="relative flex h-full flex-col rounded-2xl p-7"
        style={{ background: '#001a12' }}
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color}12 0%, transparent 70%)`,
          }}
        />

        {/* Number */}
        <div
          className="text-5xl font-black leading-none tracking-tight sm:text-6xl"
          style={{ color }}
        >
          {prefix}
          {started ? count : '0'}
          {suffix}
        </div>

        {/* Label */}
        <p
          className="mt-3 text-xs font-bold uppercase tracking-wider"
          style={{ color: '#ffffff' }}
        >
          {label}
        </p>

        {/* Sub */}
        <p
          className="mt-3 text-xs leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          {sub}
        </p>

        {/* Accent bar */}
        <div
          className="mt-5 h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)`, width: '40%' }}
        />
      </div>
    </div>
  );
}

// Scale visualization component
function ScaleViz() {
  const { ref, visible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className="mt-12 overflow-hidden rounded-2xl transition-all duration-700"
      style={{
        border: '1px solid rgba(162,126,45,0.18)',
        background: 'rgba(0,10,7,0.6)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <div className="p-6 sm:p-8">
        <p
          className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(212,169,78,0.6)' }}
        >
          Impact Scale — Per Large Data Center Deployment
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Energy bar */}
          <BarStat
            icon="⚡"
            label="Energy Freed"
            value={8000}
            unit="households"
            max={10000}
            color="#d4a94e"
            delay={0}
          />
          <BarStat
            icon="💧"
            label="Water Conserved"
            value={30000}
            unit="households"
            max={35000}
            color="#3b82f6"
            delay={150}
          />
          <BarStat
            icon="🧠"
            label="AI Capacity Gained"
            value={1000000000}
            unit="extra queries/day"
            max={1000000000}
            color="#3c9c6c"
            delay={300}
          />
        </div>
      </div>
    </div>
  );
}

function BarStat({
  icon, label, value, unit, max, color, delay,
}: {
  icon: string;
  label: string;
  value: number;
  unit: string;
  max: number;
  color: string;
  delay: number;
}) {
  const { ref, visible } = useInView(0.1);
  const pct = (value / max) * 100;

  const display =
    value >= 1_000_000_000 ? `+1B`
    : value >= 1000 ? `${(value / 1000).toFixed(0)}K`
    : value;

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {icon} {label}
        </span>
        <span className="text-sm font-bold" style={{ color }}>
          {display}
        </span>
      </div>
      <div
        className="h-1.5 w-full rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-1500"
          style={{
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            width: visible ? `${pct}%` : '0%',
            transitionDelay: `${delay + 300}ms`,
            transitionDuration: '1.4s',
          }}
        />
      </div>
      <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
        {unit}
      </p>
    </div>
  );
}

export function V2Impact() {
  const { ref: headRef, visible: headVisible } = useInView();

  return (
    <section
      id="v2-impact"
      className="relative overflow-hidden py-28"
      style={{ background: '#002a1c' }}
    >
      {/* Top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,169,78,0.5), transparent)',
        }}
      />

      {/* Central glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(162,126,45,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Mesh grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,79,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,79,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="mb-16 text-center transition-all duration-700"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: '#d4a94e' }}
          >
            Real-World Impact
          </p>
          <h2
            className="text-4xl font-black tracking-tight sm:text-5xl"
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
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.44)' }}
          >
            Numbers from a single large-scale deployment. More capacity, less waste, same hardware.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} delay={i * 100} />
          ))}
        </div>

        <ScaleViz />
      </div>
    </section>
  );
}
