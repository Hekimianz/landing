'use client';

import { useRef, useEffect, useState } from 'react';
import { Activity, RefreshCw, Cpu } from 'lucide-react';

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

const steps = [
  {
    icon: Activity,
    num: '01',
    title: 'Continuous Monitoring',
    body: 'PhysaFlow continuously monitors every layer of your facility — thermal, energy, workload, and cooling signals — building a live digital model of your data center in real time.',
  },
  {
    icon: RefreshCw,
    num: '02',
    title: 'Real-Time Rebalancing',
    body: 'The system dynamically shifts workloads and resources to avoid waste and delays. No new hardware required. Digital and physical sides of your facility working in concert.',
  },
  {
    icon: Cpu,
    num: '03',
    title: 'Instant Adaptation',
    body: "BioCore AI adapts like a flock of birds reacting to a change in the wind — no central control, yet the entire facility responds almost instantly to demand shifts.",
  },
];

export function V2Solution() {
  const { ref: headRef, visible: headVisible } = useInView();

  return (
    <section
      id="v2-solution"
      className="relative overflow-hidden py-28"
      style={{ background: '#002a1c' }}
    >
      {/* Top separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(60,156,108,0.4), transparent)',
        }}
      />

      {/* Bg orb */}
      <div
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(162,126,45,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* What is PhysaFlow — editorial intro */}
        <div
          ref={headRef}
          className="mb-20 transition-all duration-700"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p
            className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: '#d4a94e' }}
          >
            What PhysaFlow Does
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
            <h2
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl"
              style={{ color: '#ffffff' }}
            >
              The digital and physical sides of your data center —{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                working together.
              </span>
            </h2>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                PhysaFlow makes the digital and physical sides of data centers work together in
                real time. It continuously monitors the system and rebalances it — without
                requiring any new hardware.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                It dynamically shifts workloads and resources to avoid waste and delays — the
                result is more AI capacity, lower costs, and a more sustainable way to scale.
              </p>
            </div>
          </div>
        </div>

        {/* How it works: 3 steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[3.8rem] hidden h-px md:block"
            style={{
              background:
                'linear-gradient(90deg, transparent 5%, rgba(162,126,45,0.25) 20%, rgba(212,169,78,0.5) 50%, rgba(162,126,45,0.25) 80%, transparent 95%)',
            }}
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <StepCard key={step.num} {...step} delay={i * 160} />
            ))}
          </div>
        </div>

        {/* No-hardware callout */}
        <NoHardwareCallout />
      </div>
    </section>
  );
}

function StepCard({
  icon: Icon, num, title, body, delay,
}: (typeof steps)[0] & { delay: number }) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Step circle */}
      <div
        className="relative z-10 mb-8 flex h-[7rem] w-[7rem] flex-col items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #003a27, #002614)',
          border: '1.5px solid rgba(162,126,45,0.4)',
          boxShadow: '0 0 0 8px rgba(162,126,45,0.05), 0 12px 40px rgba(0,0,0,0.4)',
        }}
      >
        <Icon className="h-8 w-8" style={{ color: '#d4a94e' }} />
        {/* Badge */}
        <div
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-extrabold text-white"
          style={{ background: 'linear-gradient(135deg, #a27e2d, #d4a94e)' }}
        >
          {num}
        </div>
      </div>

      <h3 className="mb-3 text-lg font-bold" style={{ color: '#ffffff' }}>
        {title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
        {body}
      </p>
    </div>
  );
}

function NoHardwareCallout() {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="mt-16 mx-auto max-w-2xl rounded-2xl px-8 py-5 text-center transition-all duration-700"
      style={{
        border: '1px solid rgba(162,126,45,0.22)',
        background: 'rgba(162,126,45,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
        No new hardware required.{' '}
        <span style={{ color: '#d4a94e' }}>
          Just smarter use of what you already have.
        </span>
      </p>
    </div>
  );
}
