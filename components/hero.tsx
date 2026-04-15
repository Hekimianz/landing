'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '8K', label: 'Households powered by energy savings' },
  { value: '30K', label: "Households' water saved annually" },
  { value: '+1B', label: 'Additional queries per day' },
];

// Decorative floating particles
const PARTICLES = [
  { top: '22%', left: '12%', size: 3, delay: '0s', dur: '7s' },
  { top: '18%', right: '18%', size: 4, delay: '1.2s', dur: '9s' },
  { top: '55%', left: '6%', size: 2, delay: '0.5s', dur: '8s' },
  { top: '70%', right: '10%', size: 3, delay: '2s', dur: '11s' },
  { top: '38%', right: '30%', size: 2, delay: '1.8s', dur: '7s' },
  { top: '82%', left: '30%', size: 4, delay: '0.9s', dur: '10s' },
  { top: '12%', left: '45%', size: 2, delay: '3s', dur: '8s' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#003a27' }}
    >
      {/* ── Animated grid background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,79,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,79,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Top radial gold glow ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: '75vh',
          background:
            'radial-gradient(ellipse 100% 65% at 50% -5%, rgba(162,126,45,0.22) 0%, transparent 65%)',
        }}
      />

      {/* ── Bottom gradient fade ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(0,46,31,0.5))',
        }}
      />

      {/* ── Floating orb — top right ── */}
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          top: '8%',
          right: '5%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(212,169,78,0.22) 0%, rgba(162,126,45,0.07) 50%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      {/* ── Floating orb — bottom left ── */}
      <div
        className="pointer-events-none absolute animate-float-slow"
        style={{
          bottom: '10%',
          left: '-10%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(60,156,108,0.18) 0%, rgba(0,58,39,0.07) 50%, transparent 70%)',
          filter: 'blur(70px)',
          animationDelay: '3s',
        }}
      />

      {/* ── Floating micro-particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full animate-float"
          style={{
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? '#d4a94e' : '#3c9c6c',
            opacity: 0.45,
            filter: 'blur(0.5px)',
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 pt-40 pb-16 text-center sm:px-6 sm:py-36 lg:pt-52">
        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider sm:gap-2.5 sm:px-5 sm:text-xs sm:tracking-widest"
          style={{
            border: '1px solid rgba(212,169,78,0.4)',
            background: 'rgba(162,126,45,0.12)',
            color: '#d4a94e',
          }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full animate-pulse"
            style={{ backgroundColor: '#d4a94e' }}
          />
          PhysaFlow · Your Infrastructure, Amplified
        </div>

        {/* Headline */}
        <h1
          className="max-w-5xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.75rem]"
          style={{ color: '#ffffff' }}
        >
          More Capacity <br />
          <span className="animate-shimmer">From What You</span>
          <br />
          <span style={{ color: '#ffffff' }}>Already Have</span>
        </h1>

        {/* Divider line */}
        <div
          className="my-8 h-px w-24"
          style={{
            background:
              'linear-gradient(90deg, transparent, #a27e2d, transparent)',
          }}
        />

        {/* Subtitle */}
        <p
          className="max-w-2xl text-lg leading-relaxed sm:text-xl"
          style={{ color: 'rgba(255,255,255,0.58)' }}
        >
          PhysaFlow is a SaaS that helps data centers get more capacity out of
          what they already have — making the digital and physical sides of your
          facility work together in real time.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #a27e2d 0%, #d4a94e 100%)',
              boxShadow: '0 8px 32px rgba(162,126,45,0.35)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 sm:w-auto"
            style={{
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(8px)',
            }}
          >
            Learn More
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 w-full max-w-2xl overflow-hidden rounded-2xl"
          style={{
            border: '1px solid rgba(26,107,79,0.5)',
            background: 'rgba(0,30,20,0.55)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="grid grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-3 py-4 text-center sm:px-6 sm:py-5"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(26,107,79,0.4)' : 'none',
                }}
              >
                <span
                  className="text-2xl font-extrabold sm:text-3xl md:text-4xl"
                  style={{
                    background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-1 text-[9px] leading-tight sm:text-[10px] md:text-xs"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="mt-12 flex flex-col items-center gap-1"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
