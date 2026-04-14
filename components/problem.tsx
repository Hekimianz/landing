'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Droplets, Zap, Clock } from 'lucide-react';

const problems = [
  {
    icon: Droplets,
    accentColor: '#3b82f6',
    title: 'Cooling & Water Crisis',
    bigStat: '⅔',
    statCaption: 'of US data centers far from reliable water sources',
    body: 'AI hardware generates unprecedented heat. Cooling it requires massive amounts of water — yet most data centers are located far from reliable water sources.',
  },
  {
    icon: Zap,
    accentColor: '#d4a94e',
    title: 'Exploding Energy Demand',
    bigStat: 'Japan',
    statCaption: "entire country's electricity — what US data centers will use by 2030",
    body: 'By 2030, US data centers are expected to consume more electricity than the entire country of Japan. The more powerful the hardware, the higher the burden.',
  },
  {
    icon: Clock,
    accentColor: '#e74c3c',
    title: "Supply Can't Keep Up",
    bigStat: '5 yrs',
    statCaption: 'to build a new hyperscale facility — even for the biggest players',
    body: 'Even hyperscalers can take up to five years to build new facilities due to power and grid constraints. Demand is exploding, but supply can\'t keep pace.',
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-32"
      style={{ background: '#002e1f' }}
    >
      {/* Top separator line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(162,126,45,0.6), transparent)',
        }}
      />

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(162,126,45,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(26,107,79,0.35) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <AnimatedSection className="mx-auto max-w-3xl text-center mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: '#d4a94e' }}
          >
            Why It Matters Now
          </p>
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ color: '#ffffff' }}
          >
            AI is pushing data centers{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              to their limits
            </span>
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.52)' }}
          >
            The computers data centers rely on are becoming much more powerful — which means they
            consume more energy and generate more heat. Without solving this, many AI projects
            risk becoming dead in the water.
          </p>
        </AnimatedSection>

        {/* Problem cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 120}>
              {/* Gradient border wrapper */}
              <div
                className="group relative h-full overflow-hidden rounded-2xl p-px transition-all duration-300 hover:-translate-y-1 animate-border-glow"
                style={{
                  background: `linear-gradient(135deg, ${item.accentColor}50, rgba(26,107,79,0.4), ${item.accentColor}20)`,
                }}
              >
                <div
                  className="h-full rounded-2xl p-8 flex flex-col"
                  style={{ background: '#004d34' }}
                >
                  {/* Icon */}
                  <div
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `${item.accentColor}18`,
                      border: `1px solid ${item.accentColor}35`,
                    }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: item.accentColor }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-4 text-lg font-bold"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </h3>

                  {/* Stat */}
                  <div
                    className="mb-1 text-3xl font-extrabold sm:text-4xl"
                    style={{ color: '#ffffff' }}
                  >
                    {item.bigStat}
                  </div>
                  <p
                    className="mb-5 text-[11px] font-semibold uppercase tracking-wide"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                  >
                    {item.statCaption}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.48)' }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottleneck callout */}
        <AnimatedSection delay={400} className="mt-10">
          <div
            className="rounded-2xl px-8 py-6 text-center"
            style={{
              border: '1px solid rgba(231,76,60,0.3)',
              background: 'rgba(231,76,60,0.07)',
            }}
          >
            <p
              className="text-base font-semibold leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              So demand is exploding, but supply can't keep up —{' '}
              <span style={{ color: '#e74c3c' }}>creating a massive bottleneck.</span>{' '}
              Without solving this, many AI projects risk becoming{' '}
              <span style={{ color: '#e74c3c' }}>dead in the water.</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
