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
  { label: 'AI Automation', color: 'from-violet-500/20 to-purple-600/10', border: 'border-violet-500/30', delay: 0 },
  { label: 'Web Applications', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', delay: 0.6 },
  { label: 'Mobile Apps', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/30', delay: 1.2 },
  { label: 'Custom Software', color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/30', delay: 1.8 },
  { label: 'UI/UX Design', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/30', delay: 2.4 },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number,number,number,number] } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base"
    >
      {/* Three.js canvas */}
      <ThreeBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-violet/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/20 via-transparent to-bg-base pointer-events-none" />

      {/* Animated grid lines */}
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

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent-violet">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-slow" />
              Premium Software Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight text-text-primary mb-6"
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
            className="text-text-secondary text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
          >
            As a premier digital engineering partner, we architect scalable custom software,
            high-converting web applications, and intelligent AI automations to accelerate
            your growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
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
          <motion.div variants={itemVariants} className="hidden md:flex flex-wrap gap-3">
            {FLOATING_TAGS.map(({ label, color, border, delay }) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 1, duration: 0.4, type: 'spring' }}
                className={`bg-gradient-to-br ${color} border ${border} backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-text-secondary`}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Mockup images — desktop decorative */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 80, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-end"
          >
            <div className="relative w-[320px] h-[220px] glass rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/mockup-1.png"
                alt="Web Application Design mockup"
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-semibold text-text-secondary">
                Web Application
              </div>
            </div>
            <div className="relative w-[240px] h-[160px] glass rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              <Image
                src="/assets/mockup-2.png"
                alt="Mobile Application Design mockup"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-semibold text-text-secondary">
                Mobile Application
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-text-muted text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-violet/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
