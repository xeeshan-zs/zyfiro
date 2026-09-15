'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    elements.forEach((element) => observerRef.current?.observe(element!));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 hidden px-4 pt-4 md:block lg:px-6">
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5',
            scrolled ? 'glass-strong py-2.5' : 'glass py-3'
          )}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Zyfiro Home">
            <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <Image
                src="/assets/logo-icon.png"
                alt="Zyfiro"
                fill
                sizes="40px"
                className="object-contain p-1.5"
                priority
              />
            </span>
            <span className="text-base font-extrabold tracking-tight text-text-primary">Zyfiro</span>
          </Link>

          <nav className="hidden items-center rounded-full bg-white/45 p-1 shadow-[inset_6px_6px_12px_rgba(148,163,184,0.16),inset_-6px_-6px_12px_rgba(255,255,255,0.82)] md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  activeSection === link.href
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full bg-white shadow-[6px_6px_16px_rgba(148,163,184,0.18),-6px_-6px_16px_rgba(255,255,255,0.9)]"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              id="navbar-cta"
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex btn-primary"
            >
              Start Project
            </a>
          </div>
        </div>
      </header>

      <nav
        className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-[1.4rem] border border-white/80 bg-white/86 p-1.5 shadow-[0_18px_45px_rgba(16,24,40,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl md:hidden"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              'relative flex min-h-12 items-center justify-center rounded-2xl px-1 text-[10px] font-extrabold transition-colors xs:text-xs',
              activeSection === link.href
                ? 'text-text-primary'
                : 'text-text-muted hover:text-text-primary'
            )}
          >
            {activeSection === link.href && (
              <motion.span
                layoutId="mobileNavActive"
                className="absolute inset-0 rounded-2xl bg-white shadow-[6px_6px_16px_rgba(148,163,184,0.20),-6px_-6px_16px_rgba(255,255,255,0.92)]"
                transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
              />
            )}
            <span className="relative z-10 truncate">{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
