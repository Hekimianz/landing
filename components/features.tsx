'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Zap, Layers, ShieldCheck, Eye } from 'lucide-react';

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
    highlight: true,
  },
  {
    icon: ShieldCheck,
    tag: 'Risk-Free',
    title: 'Shadow Mode',
    description:
      'All recommendations operate in shadow read-only mode by default. PhysaFlow observes and advises without taking any control actions — giving operators full visibility and confidence before enabling automated execution.',
    highlight: true,
  },
  {
    icon: Eye,
    tag: 'Live Data',
    title: 'Real-Time Telemetry',
    description:
      'Live dashboards powered by server-sent events deliver instant visibility into facility performance. Every metric — energy, thermal, workload, and AI confidence — as it happens, not minutes later.',
    highlight: true,
  },
];

export function Features() {
  return (
    <section
      id="technology"
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

      {/* Decorative orb */}
      <div
        className="pointer-events-none absolute bottom-0 right-0"
        style={{
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,126,45,0.09) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#d4a94e' }}
          >
            Technology
          </p>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
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
              operations floor
            </span>
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.48)' }}
          >
            Every feature designed around what data center operators actually need —
            from nature-inspired AI to zero-risk deployment.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 90}>
              <div
                className="group relative h-full overflow-hidden rounded-2xl p-px transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: f.highlight
                    ? 'linear-gradient(135deg, rgba(212,169,78,0.6), rgba(162,126,45,0.2), rgba(26,107,79,0.3))'
                    : 'linear-gradient(135deg, rgba(26,107,79,0.5), rgba(0,58,39,0.2))',
                }}
              >
                <div
                  className="relative h-full rounded-2xl p-8"
                  style={{ background: '#003a27' }}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: f.highlight
                        ? 'radial-gradient(circle at 20% 20%, rgba(212,169,78,0.07) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 20% 20%, rgba(60,156,108,0.05) 0%, transparent 60%)',
                    }}
                  />

                  <div className="relative flex gap-5">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={
                        f.highlight
                          ? {
                              background: 'linear-gradient(135deg, rgba(212,169,78,0.2), rgba(162,126,45,0.1))',
                              border: '1px solid rgba(212,169,78,0.35)',
                            }
                          : {
                              background: 'rgba(60,156,108,0.12)',
                              border: '1px solid rgba(60,156,108,0.25)',
                            }
                      }
                    >
                      <f.icon
                        className="h-6 w-6"
                        style={{ color: f.highlight ? '#d4a94e' : '#3c9c6c' }}
                      />
                    </div>

                    <div>
                      {/* Tag */}
                      <span
                        className="mb-1 block text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: f.highlight ? '#a27e2d' : 'rgba(60,156,108,0.8)' }}
                      >
                        {f.tag}
                      </span>
                      <h3
                        className="mb-2 text-lg font-bold"
                        style={{ color: '#ffffff' }}
                      >
                        {f.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.48)' }}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
