'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Problem', href: '#v2-problem' },
  { label: 'Solution', href: '#v2-solution' },
  { label: 'Impact', href: '#v2-impact' },
  { label: 'Technology', href: '#v2-tech' },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function V2Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={
        scrolled
          ? {
              background: 'rgba(0,20,13,0.94)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(162,126,45,0.2)',
              boxShadow: '0 2px 40px rgba(0,0,0,0.4)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/v2"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <Image
            src="/logo png.png"
            alt="PhysaFlow"
            width={48}
            height={48}
            className="rounded-sm transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-base font-extrabold tracking-tight"
              style={{ color: '#ffffff' }}
            >
              PhysaFlow
            </span>
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'rgba(212,169,78,0.7)' }}
            >
              Harvard Innovation Labs
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="rounded-lg px-4 py-2 text-sm font-medium transition-all"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#d4a94e';
                e.currentTarget.style.background = 'rgba(162,126,45,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
              boxShadow: '0 0 20px rgba(162,126,45,0.3)',
            }}
          >
            <span className="relative z-10">Request Access</span>
            <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden transition-colors"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="border-t md:hidden px-6 py-5"
          style={{
            background: 'rgba(0,15,10,0.97)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(162,126,45,0.2)',
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  scrollTo(link.href);
                }}
                className="text-sm font-medium py-2"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="mt-2 rounded-lg px-5 py-3 text-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #a27e2d, #d4a94e)' }}
            >
              Request Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
