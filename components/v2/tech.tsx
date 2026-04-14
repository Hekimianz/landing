'use client';

import { useRef, useEffect, useState } from 'react';
import { Zap, Layers, ShieldCheck, Eye } from 'lucide-react';

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

const features = [
  {
    icon: Zap,
    tag: 'AI Engine',
    title: 'BioCore AI',
    description:
      'A purpose-built AI engine inspired by biological swarm intelligence. BioCore unifies cooling, power, and thermal signals into a single optimization model that reacts in real time — no central bottleneck, just distributed intelligence.',
    highlight: true,
  },
  {
    icon: Layers,
    tag: 'Orchestration',
    title: 'Multi-Layer',
    description:
      'PhysaFlow bridges every layer of the stack — from server workloads and rack thermals to facility-wide cooling and power distribution. It dynamically shifts resources across all of them to eliminate waste.',
    highlight: false,
  },
  {
    icon: ShieldCheck,
    tag: 'Risk-Free',
    title: 'Shadow Mode',
    description:
      'All recommendations operate in shadow read-only mode by default. PhysaFlow observes and advises without taking any control actions — giving operators full visibility and confidence before enabling automated execution.',
    highlight: false,
  },
  {
    icon: Eye,
    tag: 'Live Data',
    title: 'Real-Time Telemetry',
    description:
      'Live dashboards powered by server-sent events deliver instant visibility into facility performance. Every metric — energy, thermal, workload, and AI confidence — as it happens, not minutes later.',
    highlight: false,
  },
];

// Layer diagram data
const LAYERS = [
  { label: 'Workload Scheduling', sub: 'AI / ML Jobs, Query Distribution', color: '#d4a94e' },
  { label: 'Rack & Server Thermals', sub: 'Temperature Sensors, Fan Control', color: '#a27e2d' },
  { label: 'Cooling Infrastructure', sub: 'CRAC Units, Water Flow, CDUs', color: '#3c9c6c' },
  { label: 'Power Distribution', sub: 'UPS, PDU, Grid Capacity', color: '#1a6b4f' },
];

export function V2Tech() {
  const { ref: headRef, visible: headVisible } = useInView();

  return (
    <section
      id="v2-tech"
      className="relative overflow-hidden py-28"
      style={{ background: '#001a12' }}
    >
      {/* Top separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(162,126,45,0.45), transparent)',
        }}
      />

      {/* Decorative orb */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,126,45,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="mb-16 transition-all duration-700"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: '#d4a94e' }}
          >
            Technology
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl"
              style={{ color: '#ffffff' }}
            >
              Built for the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                operations floor.
              </span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Every feature designed around what data center operators actually need —
              from nature-inspired AI to zero-risk deployment.
            </p>
          </div>
        </div>

        {/* Main content: feature cards + layer diagram */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 100} />
            ))}
          </div>

          {/* Multi-layer diagram */}
          <LayerDiagram />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon, tag, title, description, highlight, delay,
}: (typeof features)[0] & { delay: number }) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="group relative h-full overflow-hidden rounded-2xl p-px transition-all duration-500 hover:-translate-y-1"
      style={{
        background: highlight
          ? 'linear-gradient(135deg, rgba(212,169,78,0.55), rgba(162,126,45,0.2), rgba(26,107,79,0.3))'
          : 'linear-gradient(135deg, rgba(26,107,79,0.4), rgba(0,46,31,0.15))',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, translate 0.3s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="relative h-full rounded-2xl p-7"
        style={{ background: '#001a12' }}
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: highlight
              ? 'radial-gradient(circle at 20% 20%, rgba(212,169,78,0.07) 0%, transparent 60%)'
              : 'radial-gradient(circle at 20% 20%, rgba(60,156,108,0.05) 0%, transparent 60%)',
          }}
        />

        <div className="flex gap-4">
          {/* Icon */}
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
            style={
              highlight
                ? {
                    background: 'linear-gradient(135deg, rgba(212,169,78,0.18), rgba(162,126,45,0.08))',
                    border: '1px solid rgba(212,169,78,0.3)',
                  }
                : {
                    background: 'rgba(60,156,108,0.1)',
                    border: '1px solid rgba(60,156,108,0.2)',
                  }
            }
          >
            <Icon
              className="h-5 w-5"
              style={{ color: highlight ? '#d4a94e' : '#3c9c6c' }}
            />
          </div>

          <div>
            <span
              className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ color: highlight ? '#a27e2d' : 'rgba(60,156,108,0.75)' }}
            >
              {tag}
            </span>
            <h3 className="mb-2 text-base font-bold" style={{ color: '#ffffff' }}>
              {title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.44)' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayerDiagram() {
  const { ref, visible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(30px)',
        transitionDelay: '300ms',
      }}
    >
      <div
        className="h-full rounded-2xl p-6"
        style={{
          border: '1px solid rgba(162,126,45,0.18)',
          background: 'rgba(0,10,7,0.7)',
        }}
      >
        <p
          className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(212,169,78,0.5)' }}
        >
          Multi-Layer Orchestration
        </p>

        {/* BioCore label */}
        <div
          className="mb-4 flex items-center justify-between rounded-xl px-4 py-3"
          style={{
            background: 'linear-gradient(135deg, rgba(212,169,78,0.12), rgba(162,126,45,0.06))',
            border: '1px solid rgba(212,169,78,0.25)',
          }}
        >
          <span className="text-sm font-bold" style={{ color: '#d4a94e' }}>
            BioCore AI
          </span>
          <span
            className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: 'rgba(212,169,78,0.6)' }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#d4a94e' }}
            />
            Active
          </span>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-2">
          <div className="flex flex-col items-center gap-0.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-1 w-0.5 rounded-full"
                style={{
                  background: 'rgba(212,169,78,0.3)',
                  opacity: 1 - i * 0.25,
                  animation: `v2-drip 1.2s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Layers */}
        <div className="flex flex-col gap-2">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.label}
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: `rgba(${
                  layer.color === '#d4a94e' ? '162,126,45' :
                  layer.color === '#a27e2d' ? '120,90,25' :
                  layer.color === '#3c9c6c' ? '26,107,79' : '10,60,40'
                },0.1)`,
                border: `1px solid ${layer.color}25`,
                animation: `v2-fade-up 0.5s ease-out both`,
                animationDelay: `${i * 80 + 400}ms`,
              }}
            >
              {/* Left accent */}
              <div
                className="h-8 w-1 shrink-0 rounded-full"
                style={{ background: layer.color, opacity: 0.7 }}
              />
              <div className="min-w-0">
                <p className="text-xs font-bold" style={{ color: '#ffffff' }}>
                  {layer.label}
                </p>
                <p className="text-[9px] leading-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {layer.sub}
                </p>
              </div>
              {/* Animated activity dot */}
              <div
                className="ml-auto shrink-0 h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: layer.color,
                  animation: `v2-pulse-dot ${1.5 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </div>
          ))}
        </div>

        <p
          className="mt-5 text-[9px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          PhysaFlow bridges all layers simultaneously — no silo, no manual coordination.
        </p>
      </div>
    </div>
  );
}
