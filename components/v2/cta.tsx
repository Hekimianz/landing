'use client';

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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

const checklist = [
  'No new hardware or infrastructure changes required',
  'Shadow read-only mode — zero operational risk to start',
  'Nature-inspired BioCore AI that adapts in real time',
  'Full M&V reporting and audit trail from day one',
];

// Animated particles for the CTA background
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  top: `${5 + Math.random() * 90}%`,
  left: `${Math.random() * 100}%`,
  size: 1 + Math.random() * 3,
  dur: `${6 + Math.random() * 8}s`,
  delay: `${Math.random() * 5}s`,
  color: i % 3 === 0 ? '#d4a94e' : i % 3 === 1 ? '#3c9c6c' : '#a27e2d',
}));

export function V2Cta() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      className="relative overflow-hidden py-32"
      style={{ background: '#001f15' }}
    >
      {/* Gold radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(162,126,45,0.13) 0%, rgba(0,20,13,0) 65%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(162,126,45,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(162,126,45,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.35,
            filter: 'blur(0.5px)',
            animation: `float-y ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,169,78,0.6), transparent)',
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-3xl px-6 text-center transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <p
          className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color: '#d4a94e' }}
        >
          The Outcome
        </p>

        <h2
          className="text-4xl font-black tracking-tight sm:text-5xl lg:text-[3.5rem]"
          style={{ color: '#ffffff', lineHeight: 1.08 }}
        >
          More AI capacity.
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a27e2d, #d4a94e, #f0cc78)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Lower costs.
          </span>
          <br />
          Sustainable scale.
        </h2>

        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          The result is simple: more capacity from the infrastructure you already have, lower
          operating costs, and a more sustainable way to scale — without waiting years for new
          facilities.
        </p>

        {/* Checklist */}
        <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left">
          {checklist.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-3 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${i * 100 + 300}ms`,
              }}
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: '#d4a94e' }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.58)' }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #a27e2d 0%, #d4a94e 100%)',
              boxShadow: '0 8px 40px rgba(162,126,45,0.45), 0 0 0 1px rgba(212,169,78,0.2)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-xl px-10 py-4 text-base font-semibold transition-all hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(255,255,255,0.13)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(8px)',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
