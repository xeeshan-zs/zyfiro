'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Database, Sparkles } from 'lucide-react';

const STATS = [
  ['24h', 'average response'],
  ['5+', 'service disciplines'],
  ['Global', 'delivery mindset'],
];

const WORKFLOW = [
  { label: 'Design', icon: Sparkles, tone: 'bg-violet-50 text-accent-violet' },
  { label: 'Build', icon: Code2, tone: 'bg-sky-50 text-accent-blue' },
  { label: 'Scale', icon: Database, tone: 'bg-emerald-50 text-accent-emerald' },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pb-24 pt-6 sm:px-6 md:pt-40 lg:pt-44">
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/78 px-3 py-2 shadow-[0_18px_40px_rgba(16,24,40,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl md:hidden">
            <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <Image src="/assets/logo-icon.png" alt="Zyfiro" fill sizes="40px" className="object-contain p-1.5" priority />
            </span>
            <span className="text-base font-extrabold tracking-tight text-text-primary">Zyfiro</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-text-primary xs:text-5xl sm:text-6xl lg:text-7xl">
            Professional software, designed with restraint and built for scale.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:mt-7 sm:text-lg sm:leading-8">
            Zyfiro creates refined web platforms, mobile applications, AI workflows, and custom business software for teams that need clarity, speed, and dependable execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <a
              href="#contact"
              id="hero-cta-primary"
              className="rounded-full px-6 py-3 text-sm font-semibold btn-primary"
            >
              Start Your Project <ArrowRight size={17} className="ml-2" />
            </a>
            <a
              href="#work"
              id="hero-cta-secondary"
              className="rounded-full px-6 py-3 text-sm font-semibold btn-ghost"
            >
              View Work
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
            {STATS.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white/75 bg-white/62 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-4 sm:py-4">
                <p className="text-base font-bold text-text-primary sm:text-lg">{value}</p>
                <p className="mt-1 text-[10px] font-semibold leading-4 text-text-muted sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-2 sm:mt-0"
        >
          <div className="relative overflow-hidden rounded-[1.6rem] p-2 glass-strong sm:rounded-[2rem] sm:p-3">
            <div className="relative min-h-[31rem] overflow-hidden rounded-[1.3rem] bg-[#f8fafc] p-3 sm:aspect-[4/3] sm:min-h-0 sm:rounded-[1.5rem] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,93,252,0.16),transparent_18rem),radial-gradient(circle_at_90%_20%,rgba(8,145,178,0.14),transparent_16rem)]" />
              <div className="relative flex h-full flex-col rounded-[1.15rem] border border-white bg-white/72 p-4 shadow-[0_24px_70px_rgba(16,24,40,0.12)] backdrop-blur-xl sm:rounded-[1.25rem] sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Zyfiro OS</p>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-text-primary sm:text-2xl">Product command center</h3>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                </div>

                <div className="mt-5 grid flex-1 gap-3 sm:mt-7 sm:grid-cols-[0.9fr_1.1fr] sm:gap-4">
                  <div className="space-y-3">
                    {WORKFLOW.map(({ label, icon: Icon, tone }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_12px_26px_rgba(16,24,40,0.06)]">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-text-primary">{label}</p>
                          <p className="text-xs text-text-muted">Validated workflow</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-text-primary p-4 text-white shadow-[0_18px_40px_rgba(16,24,40,0.18)]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Delivery health</p>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-bold text-white">Live</span>
                    </div>
                    <div className="mt-5 flex h-24 items-end gap-2 sm:mt-6 sm:h-32">
                      {[42, 64, 52, 78, 70, 92].map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-lg bg-white"
                          style={{ height: `${height}%`, opacity: 0.35 + index * 0.08 }}
                        />
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-xl font-extrabold">98%</p>
                        <p className="text-xs text-white/55">UX clarity</p>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-xl font-extrabold">A+</p>
                        <p className="text-xs text-white/55">Build quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-4 -mt-8 rounded-2xl border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,24,40,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-md sm:absolute sm:-bottom-8 sm:left-auto sm:right-8 sm:mx-0 sm:mt-0 sm:w-80 sm:p-5">
            {['Clean UI architecture', 'Responsive implementation', 'AI-ready workflows'].map((item) => (
              <div key={item} className="flex items-center gap-3 py-1.5 text-sm font-bold text-text-primary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-accent-emerald">
                  <CheckCircle2 size={16} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
