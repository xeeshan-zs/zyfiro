'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS, SITE } from '@/lib/constants';
import { FadeIn } from '@/components/ui/FadeIn';

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  Facebook: Facebook,
};

const SOCIALS = [
  { label: 'LinkedIn', href: SITE.social.linkedin, icon: 'LinkedIn' },
  { label: 'GitHub', href: SITE.social.github, icon: 'GitHub' },
  { label: 'Instagram', href: SITE.social.instagram, icon: 'Instagram' },
  { label: 'Facebook', href: SITE.social.facebook, icon: 'Facebook' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-text-primary text-white shadow-[0_28px_70px_rgba(16,24,40,0.18)]">
        <FadeIn className="border-b border-white/10 px-6 py-12 text-center sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Build a cleaner, faster digital product with Zyfiro.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#contact" id="footer-cta-project" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-text-primary transition-transform hover:-translate-y-0.5">
              Start a Project <ArrowRight size={16} className="ml-2" />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" id="footer-cta-whatsapp" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>

        <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-3 py-2" aria-label="Zyfiro">
              <span className="relative h-8 w-8">
                <Image src="/assets/logo-icon.png" alt="Zyfiro" fill sizes="32px" className="object-contain" />
              </span>
              <span className="text-sm font-extrabold text-text-primary">Zyfiro</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Building scalable websites, software, mobile products, and AI workflows from Pakistan for clients worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/62 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/62 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold">Legal</h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/62 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={`mailto:${SITE.email}`} className="mt-6 block text-sm text-white/62 transition-colors hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45 sm:px-10">
          © {year} Zyfiro Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
