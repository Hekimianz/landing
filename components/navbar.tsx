'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How It Works', href: '#solution' },
  { label: 'Impact', href: '#impact' },
  { label: 'Technology', href: '#technology' },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={
        scrolled
          ? {
              background: 'rgba(0,30,20,0.92)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(26,107,79,0.35)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
          <Image
            src="/logo png.png"
            alt="PhysaFlow"
            width={48}
            height={48}
            className="rounded-sm transition-all group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-white">PhysaFlow</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4a94e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #a27e2d, #d4a94e)',
              boxShadow: '0 4px 20px rgba(162,126,45,0.35)',
            }}
          >
            <span className="relative z-10">Request a Demo</span>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'linear-gradient(135deg, #d4a94e, #a27e2d)' }}
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t md:hidden px-6 py-5"
          style={{
            background: 'rgba(0,30,20,0.97)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(26,107,79,0.3)',
          }}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.href); }}
                className="text-sm font-medium transition-colors"
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
              Request a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
