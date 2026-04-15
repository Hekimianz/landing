'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

const checklist = [
  'No new hardware or infrastructure changes required',
  'Shadow read-only mode — zero operational risk',
  'Nature-inspired AI that adapts in real time',
  'Full M&V reporting and audit trail from day one',
];

export function Cta() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{ background: '#003a27' }}
    >
      {/* Dramatic background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(162,126,45,0.14) 0%, rgba(0,58,39,0.1) 50%, transparent 80%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(162,126,45,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(162,126,45,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,126,45,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px animate-gradient-line" />

      <AnimatedSection className="relative mx-auto max-w-3xl px-6 text-center">
        <p
          className="mb-4 text-xs font-bold uppercase tracking-widest"
          style={{ color: '#d4a94e' }}
        >
          The Outcome
        </p>
        <h2
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          style={{ color: '#ffffff' }}
        >
          More AI capacity.{' '}
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Lower costs.
          </span>{' '}
          <br />
          Sustainable scale.
        </h2>
        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.52)' }}
        >
          The result is simple: more capacity from the infrastructure you already have, lower
          operating costs, and a more sustainable way to scale — without waiting years for new
          facilities.
        </p>

        {/* Checklist */}
        <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: '#d4a94e' }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:gonzalo@physaflow.com"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-10 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #a27e2d 0%, #d4a94e 100%)',
              boxShadow: '0 8px 40px rgba(162,126,45,0.4)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div
              className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
            />
          </a>
          <a
            href="mailto:gonzalo@physaflow.com"
            className="inline-flex items-center gap-2 rounded-xl px-10 py-4 text-base font-semibold transition-all hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Contact Us
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
