'use client';

import Image from 'next/image';

const footerLinks = {
  Navigate: [
    { label: 'The Problem', href: '#problem' },
    { label: 'How It Works', href: '#solution' },
    { label: 'Impact', href: '#impact' },
    { label: 'Technology', href: '#technology' },
  ],
  Product: [
    { label: 'BioCore AI', href: '#technology' },
    { label: 'Shadow Mode', href: '#technology' },
    { label: 'Telemetry', href: '#technology' },
  ],
  Company: [
    { label: 'Harvard Innovation Labs', href: '#' },
    { label: 'Request Demo', href: '/login' },
    { label: 'Contact', href: 'mailto:contact@physaflow.com' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: '#002e1f',
        borderTop: '1px solid rgba(26,107,79,0.3)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-3 group">
              <Image
                src="/logo png.png"
                alt="PhysaFlow"
                width={32}
                height={32}
                className="rounded-sm transition-all group-hover:scale-105"
              />
              <span
                className="text-lg font-bold tracking-tight"
                style={{ color: '#ffffff' }}
              >
                PhysaFlow
              </span>
            </a>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Helping data centers get more capacity out of what they already have —
              more AI, lower costs, sustainable scale.
            </p>
            {/* Harvard badge */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{
                border: '1px solid rgba(162,126,45,0.3)',
                background: 'rgba(162,126,45,0.08)',
                color: '#a27e2d',
              }}
            >
              Harvard Innovation Labs
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="mb-5 text-xs font-bold uppercase tracking-widest"
                style={{ color: '#a27e2d' }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm transition-colors text-white/40 hover:text-[#d4a94e]"
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
          style={{ borderTop: '1px solid rgba(26,107,79,0.25)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            &copy; {new Date().getFullYear()} PhysaFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Harvard Innovation Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
