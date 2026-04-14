'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Activity, RefreshCw, Bird } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Activity,
    title: 'Continuous Monitoring',
    body: 'PhysaFlow continuously monitors every layer of your facility — thermal, energy, workload, and cooling signals — building a live digital model of your data center.',
  },
  {
    step: '02',
    icon: RefreshCw,
    title: 'Real-Time Rebalancing',
    body: 'The system dynamically shifts workloads and resources to avoid waste and delays — no new hardware required. Digital and physical sides working in concert.',
  },
  {
    step: '03',
    icon: Bird,
    title: 'Instant Adaptation',
    body: "BioCore AI adapts like a flock of birds reacting to a change in the wind — no central control, yet the entire facility responds almost instantly.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden py-32"
      style={{ background: '#003a27' }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(26,107,79,0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Gold orb top right */}
      <div
        className="pointer-events-none absolute -top-24 right-0"
        style={{
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,126,45,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#d4a94e' }}
          >
            How It Works
          </p>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: '#ffffff' }}
          >
            Simple.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              No new hardware.
            </span>{' '}
            Real results.
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            PhysaFlow continuously monitors the system and rebalances it in real time.
            The way it works is simple.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Connector line — desktop */}
          <div
            className="pointer-events-none absolute top-[3.25rem] left-[22%] right-[22%] hidden h-px md:block"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(162,126,45,0.3), #d4a94e, rgba(162,126,45,0.3), transparent)',
            }}
          />

          {steps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 160}>
              <div className="group relative flex flex-col items-center text-center">

                {/* Step circle */}
                <div
                  className="relative z-10 mb-7 flex h-[6.5rem] w-[6.5rem] flex-col items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-105"
                  style={{
                    borderColor: 'rgba(162,126,45,0.45)',
                    background: 'linear-gradient(135deg, #004d34, #003a27)',
                    boxShadow:
                      '0 0 0 6px rgba(162,126,45,0.06), 0 8px 30px rgba(162,126,45,0.12)',
                  }}
                >
                  <step.icon className="h-8 w-8" style={{ color: '#d4a94e' }} />
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold"
                    style={{
                      background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                      color: '#ffffff',
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ color: '#ffffff' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom callout */}
        <AnimatedSection delay={500} className="mt-16">
          <div
            className="mx-auto max-w-xl rounded-2xl px-8 py-5 text-center"
            style={{
              border: '1px solid rgba(162,126,45,0.25)',
              background: 'rgba(162,126,45,0.06)',
            }}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              No new hardware required.{' '}
              <span style={{ color: '#d4a94e' }}>
                Just smarter use of what you already have.
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
