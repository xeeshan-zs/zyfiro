'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Linkedin, Facebook } from 'lucide-react';
import { SITE, FOOTER_COMPANY_LINKS, FOOTER_LEGAL_LINKS } from '@/lib/constants';
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
    <footer className="relative bg-bg-base border-t border-white/[0.06] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-accent-violet/40 to-transparent" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-slow" />
              <span className="text-xs font-semibold text-text-muted tracking-widest uppercase">Still thinking it over?</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
              Let&apos;s talk.{' '}
              <span className="text-gradient">No pitch, no pressure.</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-xl mx-auto">
              We reply within 24 hours. Tell us what you&apos;re building and we&apos;ll give you an honest take.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold"
                id="footer-cta-project"
              >
                Start a Project <ArrowRight size={16} />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold"
                id="footer-cta-whatsapp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="Zyfiro">
              <div className="relative w-36 h-10">
                <Image
                  src="/assets/logo-full.png"
                  alt="Zyfiro"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Building scalable Websites, Desktop Software, and Android Apps — from Pakistan, for the world.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.1] border border-white/[0.06] hover:border-white/[0.16] transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-text-primary text-sm font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={`mailto:${SITE.email}`}
                className="text-text-muted text-sm hover:text-accent-violet transition-colors duration-200"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
          <p className="text-text-muted text-xs">
            © {year} Zyfiro Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
