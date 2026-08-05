'use client';

import { motion } from 'framer-motion';
import { VALUES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

const FOUNDERS = [
  {
    name: 'Zeeshan Sarfraz',
    role: 'Co-Founder & Tech Lead',
    initials: 'ZS',
    gradient: 'from-accent-violet to-accent-blue',
  },
  {
    name: 'Javeria Javaid',
    role: 'Co-Founder & Operations',
    initials: 'JJ',
    gradient: 'from-accent-cyan to-accent-emerald',
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-28 lg:py-36 bg-bg-base overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[500px] bg-accent-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <div>
            <FadeIn>
              <span className="section-tag mb-6 block">● Our Story</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-8">
                Driven by Vision,
                <br />
                <span className="text-gradient">Powered by Faith.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-text-primary font-medium leading-relaxed mb-4">
                We are Zeeshan Sarfraz and Javeria Javaid, the founders of Zyfiro.
                Our journey isn&apos;t just about building software — it&apos;s about building a legacy.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-text-secondary leading-relaxed mb-10">
                We started Zyfiro with a singular mission: provide world-class digital
                solutions while laying the foundation for the next Big Tech giant. Every line
                of code is a step towards that future, Inshallah.
              </p>
            </FadeIn>

            {/* Founder Cards */}
            <StaggerContainer className="flex flex-wrap gap-4" staggerDelay={0.12} delayChildren={0.35}>
              {FOUNDERS.map((founder) => (
                <StaggerItem key={founder.name}>
                  <motion.div
                    className="glass rounded-2xl p-5 border border-white/[0.08] flex items-center gap-4 min-w-[220px] card-hover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-sm font-bold">{founder.initials}</span>
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-semibold">{founder.name}</p>
                      <p className="text-text-muted text-xs mt-0.5">{founder.role}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right — Values Panel */}
          <FadeIn direction="left" delay={0.2}>
            <div className="glass-strong rounded-3xl p-8 lg:p-10 border border-white/[0.1]">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                  The Zyfiro Standard
                </h3>
                <p className="text-text-secondary text-sm italic">
                  &ldquo;Excellence is not an act, but a habit.&rdquo;
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {VALUES.map((value, i) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      className="flex gap-4 group"
                    >
                      <div className={`w-10 h-10 ${value.bgClass} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`${value.colorClass} w-4.5 h-4.5`} size={18} />
                      </div>
                      <div>
                        <h4 className="text-text-primary text-sm font-semibold mb-1">{value.title}</h4>
                        <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative corner */}
              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <p className="text-text-muted text-xs leading-relaxed">
                  From Pakistan, building for the world. Every project we take on is
                  a reflection of our commitment to digital excellence.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
