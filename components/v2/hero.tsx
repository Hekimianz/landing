'use client';

import { ArrowRight } from 'lucide-react';

// Server topology node positions (viewBox 560x400)
const NODES = [
  { id: 'n1', x: 80,  y: 80,  label: 'RACK-01', status: 'hot' },
  { id: 'n2', x: 280, y: 60,  label: 'RACK-02', status: 'normal' },
  { id: 'n3', x: 480, y: 80,  label: 'RACK-03', status: 'hot' },
  { id: 'n4', x: 60,  y: 200, label: 'RACK-04', status: 'normal' },
  { id: 'n5', x: 280, y: 200, label: 'CORE',    status: 'active' },
  { id: 'n6', x: 500, y: 200, label: 'RACK-06', status: 'normal' },
  { id: 'n7', x: 80,  y: 320, label: 'RACK-07', status: 'normal' },
  { id: 'n8', x: 280, y: 340, label: 'RACK-08', status: 'hot' },
  { id: 'n9', x: 480, y: 320, label: 'RACK-09', status: 'normal' },
];

const EDGES = [
  { id: 'e1',  x1: 80,  y1: 80,  x2: 280, y2: 60,  type: 'gold' },
  { id: 'e2',  x1: 280, y1: 60,  x2: 480, y2: 80,  type: 'dim' },
  { id: 'e3',  x1: 80,  y1: 80,  x2: 60,  y2: 200, type: 'dim' },
  { id: 'e4',  x1: 80,  y1: 80,  x2: 280, y2: 200, type: 'gold' },
  { id: 'e5',  x1: 280, y1: 60,  x2: 280, y2: 200, type: 'gold' },
  { id: 'e6',  x1: 480, y1: 80,  x2: 280, y2: 200, type: 'dim' },
  { id: 'e7',  x1: 480, y1: 80,  x2: 500, y2: 200, type: 'gold' },
  { id: 'e8',  x1: 60,  y1: 200, x2: 280, y2: 200, type: 'dim' },
  { id: 'e9',  x1: 280, y1: 200, x2: 500, y2: 200, type: 'gold' },
  { id: 'e10', x1: 60,  y1: 200, x2: 80,  y2: 320, type: 'dim' },
  { id: 'e11', x1: 280, y1: 200, x2: 80,  y2: 320, type: 'gold' },
  { id: 'e12', x1: 280, y1: 200, x2: 280, y2: 340, type: 'gold' },
  { id: 'e13', x1: 280, y1: 200, x2: 480, y2: 320, type: 'gold' },
  { id: 'e14', x1: 500, y1: 200, x2: 480, y2: 320, type: 'dim' },
  { id: 'e15', x1: 80,  y1: 320, x2: 280, y2: 340, type: 'dim' },
  { id: 'e16', x1: 280, y1: 340, x2: 480, y2: 320, type: 'dim' },
];

// Particles that flow along certain edges
const FLOWS = [
  { edge: 'e1',  dur: '2.4s', delay: '0s' },
  { edge: 'e4',  dur: '2.8s', delay: '0.6s' },
  { edge: 'e5',  dur: '2.2s', delay: '1.1s' },
  { edge: 'e7',  dur: '3.0s', delay: '0.3s' },
  { edge: 'e9',  dur: '2.6s', delay: '0.9s' },
  { edge: 'e11', dur: '2.9s', delay: '0.5s' },
  { edge: 'e12', dur: '2.3s', delay: '1.4s' },
  { edge: 'e13', dur: '2.7s', delay: '0.2s' },
];

function edgeById(id: string) {
  return EDGES.find((e) => e.id === id)!;
}

const STATS = [
  { value: '10B', label: 'Daily Queries' },
  { value: '8K',  label: 'Households Powered' },
  { value: '+1B', label: 'More AI Capacity' },
];

export function V2Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#001f15' }}
    >
      {/* Deep background radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 60% 40%, rgba(0,58,39,0.6) 0%, rgba(0,15,10,0) 70%)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,79,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,79,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold glow from top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: '60vh',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(162,126,45,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{
                border: '1px solid rgba(212,169,78,0.35)',
                background: 'rgba(162,126,45,0.1)',
                color: '#d4a94e',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#d4a94e' }}
              />
              Harvard Innovation Labs · Demo Day
            </div>

            {/* Headline */}
            <h1
              className="text-[3.2rem] font-black leading-[1.0] tracking-tight sm:text-[4rem] lg:text-[4.8rem] xl:text-[5.5rem]"
              style={{ color: '#ffffff' }}
            >
              More AI
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #a27e2d 0%, #d4a94e 45%, #f0cc78 70%, #d4a94e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200%',
                  animation: 'v2-shimmer 4s linear infinite',
                }}
              >
                Capacity.
              </span>
              <br />
              Same Hardware.
            </h1>

            {/* Divider */}
            <div
              className="my-7 h-px w-20"
              style={{
                background: 'linear-gradient(90deg, #a27e2d, rgba(162,126,45,0))',
              }}
            />

            {/* Subtitle */}
            <p
              className="max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              PhysaFlow is a SaaS that helps data centers get more capacity out of what they
              already have — making the digital and physical sides of your facility work together
              in real time.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #a27e2d 0%, #d4a94e 100%)',
                  boxShadow: '0 8px 32px rgba(162,126,45,0.4), 0 0 0 1px rgba(212,169,78,0.2)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#v2-solution"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#v2-solution')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-2xl font-extrabold sm:text-3xl"
                    style={{
                      background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: 'rgba(255,255,255,0.32)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Server Topology SVG ── */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-[600px] overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(162,126,45,0.18)',
                background: 'rgba(0,12,8,0.8)',
                boxShadow:
                  '0 0 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(162,126,45,0.08), inset 0 1px 0 rgba(212,169,78,0.06)',
                backdropFilter: 'blur(4px)',
                aspectRatio: '14/10',
              }}
            >
              {/* Top bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: '1px solid rgba(162,126,45,0.1)' }}
              >
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#e74c3c' }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#d4a94e' }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#3c9c6c' }} />
                <span
                  className="ml-3 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(212,169,78,0.4)' }}
                >
                  PhysaFlow · Live Topology
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: '#3c9c6c' }}
                  />
                  <span
                    className="text-[8px] font-semibold uppercase tracking-widest"
                    style={{ color: 'rgba(60,156,108,0.7)' }}
                  >
                    Optimizing
                  </span>
                </div>
              </div>

              {/* SVG topology */}
              <svg
                viewBox="0 0 560 400"
                className="h-full w-full"
                style={{ padding: '8px' }}
              >
                <defs>
                  <filter id="hero-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="node-glow">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d4a94e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4a94e" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Core glow */}
                <circle cx="280" cy="200" r="60" fill="url(#core-grad)" />

                {/* Edges */}
                {EDGES.map((edge) => (
                  <line
                    key={edge.id}
                    id={edge.id}
                    x1={edge.x1} y1={edge.y1}
                    x2={edge.x2} y2={edge.y2}
                    stroke={edge.type === 'gold' ? 'rgba(212,169,78,0.55)' : 'rgba(26,107,79,0.25)'}
                    strokeWidth={edge.type === 'gold' ? 1.5 : 1}
                    strokeDasharray={edge.type === 'gold' ? 'none' : '4 3'}
                  />
                ))}

                {/* Flow particles (SMIL animateMotion along edges) */}
                {FLOWS.map((flow) => {
                  const edge = edgeById(flow.edge);
                  if (!edge) return null;
                  return (
                    <circle key={flow.edge} r="3" fill="#d4a94e" opacity="0.9">
                      <animateMotion
                        dur={flow.dur}
                        repeatCount="indefinite"
                        begin={flow.delay}
                        calcMode="linear"
                      >
                        <mpath href={`#${flow.edge}`} />
                      </animateMotion>
                    </circle>
                  );
                })}

                {/* Extra return-direction flows */}
                {[
                  { edge: 'e9',  dur: '3.1s', delay: '1.6s' },
                  { edge: 'e5',  dur: '2.7s', delay: '2.0s' },
                ].map((flow) => {
                  const edge = edgeById(flow.edge);
                  if (!edge) return null;
                  // Reverse direction by swapping start/end
                  return (
                    <circle key={`rev-${flow.edge}`} r="2" fill="#3c9c6c" opacity="0.7">
                      <animateMotion
                        dur={flow.dur}
                        repeatCount="indefinite"
                        begin={flow.delay}
                        calcMode="linear"
                        keyPoints="1;0"
                        keyTimes="0;1"
                      >
                        <mpath href={`#${flow.edge}`} />
                      </animateMotion>
                    </circle>
                  );
                })}

                {/* Nodes */}
                {NODES.map((node) => {
                  const isCore = node.status === 'active';
                  const isHot = node.status === 'hot';
                  const color = isCore ? '#d4a94e' : isHot ? '#e27b3a' : '#3c9c6c';
                  const size = isCore ? 22 : 16;

                  return (
                    <g key={node.id}>
                      {/* Outer ring pulse */}
                      <circle
                        cx={node.x} cy={node.y}
                        r={size + 8}
                        fill="none"
                        stroke={color}
                        strokeWidth="0.5"
                        opacity="0.3"
                        style={{
                          animation: `v2-pulse-ring ${isCore ? '2s' : '3.5s'} ease-out infinite`,
                          transformOrigin: `${node.x}px ${node.y}px`,
                        }}
                      />

                      {/* Node rect */}
                      <rect
                        x={node.x - size / 2}
                        y={node.y - size / 2}
                        width={size}
                        height={size}
                        rx="4"
                        fill={isCore ? 'rgba(162,126,45,0.25)' : isHot ? 'rgba(226,123,58,0.18)' : 'rgba(26,107,79,0.25)'}
                        stroke={color}
                        strokeWidth={isCore ? 1.5 : 1}
                        style={{
                          animation: isCore ? 'v2-node-core 2s ease-in-out infinite' : undefined,
                        }}
                      />

                      {/* Inner dot */}
                      <circle
                        cx={node.x} cy={node.y}
                        r={isCore ? 4 : 2.5}
                        fill={color}
                        opacity={0.9}
                      />

                      {/* Label */}
                      <text
                        x={node.x}
                        y={node.y + size + 12}
                        textAnchor="middle"
                        fontSize="7"
                        fontFamily="monospace"
                        letterSpacing="0.06em"
                        fill={color}
                        opacity="0.65"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}

                {/* Legend bottom */}
                <g>
                  <circle cx="30" cy="385" r="3" fill="#d4a94e" opacity="0.8" />
                  <text x="38" y="388" fontSize="7" fontFamily="monospace" fill="rgba(212,169,78,0.5)" letterSpacing="0.05em">OPTIMIZED PATH</text>
                  <circle cx="180" cy="385" r="3" fill="#e27b3a" opacity="0.8" />
                  <text x="188" y="388" fontSize="7" fontFamily="monospace" fill="rgba(226,123,58,0.5)" letterSpacing="0.05em">HIGH THERMAL</text>
                  <circle cx="320" cy="385" r="3" fill="#3c9c6c" opacity="0.8" />
                  <text x="328" y="388" fontSize="7" fontFamily="monospace" fill="rgba(60,156,108,0.5)" letterSpacing="0.05em">BALANCED</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #001f15)' }}
      />
    </section>
  );
}
