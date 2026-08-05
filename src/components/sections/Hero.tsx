'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const ThreeBackground = dynamic(
  () => import('@/components/three/ThreeBackground').then((m) => m.ThreeBackground),
  { ssr: false }
);

const FLOATING_TAGS = [
  { label: 'AI Automation',   color: 'from-violet-500/20 to-purple-600/10',  border: 'border-violet-500/30',  delay: 0   },
  { label: 'Web Applications',color: 'from-blue-500/20 to-blue-600/10',      border: 'border-blue-500/30',    delay: 0.5 },
  { label: 'Mobile Apps',     color: 'from-cyan-500/20 to-cyan-600/10',      border: 'border-cyan-500/30',    delay: 1.0 },
  { label: 'Custom Software', color: 'from-emerald-500/20 to-emerald-600/10',border: 'border-emerald-500/30', delay: 1.5 },
  { label: 'UI/UX Design',    color: 'from-orange-500/20 to-orange-600/10',  border: 'border-orange-500/30',  delay: 2.0 },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

const mockupVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-base"
    >
      {/* ── Three.js canvas (full background) ─────────────────────────── */}
      <ThreeBackground />

      {/* ── Overlays ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-violet/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/30 via-transparent to-bg-base pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* ── Main content grid ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT — text ────────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-text-primary mb-6"
            >
              Web Design,{' '}
              <span className="text-gradient">Mobile Apps,</span>
              <br />
              AI Automation &{' '}
              <br className="hidden sm:block" />
              <span className="text-gradient-warm">Custom Software</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed max-w-xl mb-9"
            >
              As a premier digital engineering partner, we architect scalable custom software,
              high-converting web applications, and intelligent AI automations to accelerate
              your growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                id="hero-cta-primary"
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                id="hero-cta-secondary"
                className="btn-ghost inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold"
              >
                <Play size={16} className="fill-current" />
                View Our Work
              </a>
            </motion.div>

            {/* Floating Tech Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              {FLOATING_TAGS.map(({ label, color, border, delay }) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 1.2, duration: 0.4, type: 'spring' }}
                  className={`bg-gradient-to-br ${color} border ${border} backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-secondary`}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — mockup images (desktop only) ───────────────────── */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex flex-col gap-5 items-end"
          >
            {/* Mockup 1 — larger */}
            <div className="relative w-full max-w-[400px] h-[260px] glass rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/mockup-1.png"
                alt="Web Application Design mockup"
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/70 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-xs font-semibold text-text-secondary tracking-wide">Web Application</span>
              </div>
            </div>

            {/* Mockup 2 — smaller, offset right */}
            <div className="relative w-[75%] h-[180px] glass rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/mockup-2.png"
                alt="Mobile Application Design mockup"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/70 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-xs font-semibold text-text-secondary tracking-wide">Mobile Application</span>
              </div>
            </div>

            {/* Decorative stat badges */}
            <div className="flex gap-3 w-full justify-end">
              <div className="glass border border-white/[0.07] rounded-xl px-4 py-2.5 text-center">
                <p className="text-text-primary font-bold text-lg leading-none">100%</p>
                <p className="text-text-muted text-xs mt-1">Client Satisfaction</p>
              </div>
              <div className="glass border border-white/[0.07] rounded-xl px-4 py-2.5 text-center">
                <p className="text-text-primary font-bold text-lg leading-none">24h</p>
                <p className="text-text-muted text-xs mt-1">Response Time</p>
              </div>
              <div className="glass border border-white/[0.07] rounded-xl px-4 py-2.5 text-center">
                <p className="text-accent-emerald font-bold text-lg leading-none">Live</p>
                <p className="text-text-muted text-xs mt-1">Projects Online</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-text-muted text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent-violet/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
