'use client';

import Image from 'next/image';

const footerLinks = {
  Navigate: [
    { label: 'The Problem', href: '#v2-problem' },
    { label: 'How It Works', href: '#v2-solution' },
    { label: 'Impact', href: '#v2-impact' },
    { label: 'Technology', href: '#v2-tech' },
  ],
  Product: [
    { label: 'BioCore AI', href: '#v2-tech' },
    { label: 'Shadow Mode', href: '#v2-tech' },
    { label: 'Multi-Layer', href: '#v2-tech' },
    { label: 'Telemetry', href: '#v2-tech' },
  ],
  Company: [
    { label: 'Harvard Innovation Labs', href: '#' },
    { label: 'Request Demo', href: '#' },
    { label: 'Contact', href: 'mailto:contact@physaflow.com' },
  ],
};

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function V2Footer() {
  return (
    <footer
      style={{
        background: '#000f0a',
        borderTop: '1px solid rgba(162,126,45,0.18)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-3 group"
            >
              <Image
                src="/logo png.png"
                alt="PhysaFlow"
                width={48}
                height={48}
                className="rounded-sm transition-transform group-hover:scale-105"
              />
              <div>
                <span className="block text-base font-extrabold tracking-tight text-white">
                  PhysaFlow
                </span>
                <span
                  className="block text-[8px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'rgba(212,169,78,0.55)' }}
                >
                  Harvard Innovation Labs
                </span>
              </div>
            </a>

            <p
              className="mt-5 max-w-xs text-xs leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              Helping data centers get more capacity out of what they already have —
              more AI, lower costs, sustainable scale.
            </p>

            {/* Harvard badge */}
            <div
              className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold"
              style={{
                border: '1px solid rgba(162,126,45,0.25)',
                background: 'rgba(162,126,45,0.06)',
                color: 'rgba(162,126,45,0.7)',
              }}
            >
              Harvard Innovation Labs · Demo Day Cohort
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(162,126,45,0.6)' }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      }}
                      className="text-xs transition-colors"
                      style={{ color: 'rgba(255,255,255,0.32)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#d4a94e')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row"
          style={{ borderTop: '1px solid rgba(162,126,45,0.1)' }}
        >
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
            &copy; {new Date().getFullYear()} PhysaFlow. All rights reserved.
          </p>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Built at Harvard Innovation Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
