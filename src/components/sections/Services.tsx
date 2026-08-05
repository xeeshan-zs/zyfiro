'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-bg-base overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="mb-16 lg:mb-20">
          <div className="flex flex-col gap-4">
            <span className="section-tag">● What We Do</span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              We don&apos;t just write code — we engineer complete digital ecosystems
              using the latest technologies.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.number}>
                <motion.div
                  className={`relative glass rounded-2xl p-7 card-hover border border-white/[0.07] group h-full flex flex-col`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Number */}
                  <span className="absolute top-6 right-7 font-mono text-xs text-text-muted/40 font-bold">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 ${service.bgClass} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`${service.colorClass} w-5 h-5`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-text-primary mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${service.colorClass} group/btn`}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    Explore service
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                    />
                  </motion.button>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.glowClass} pointer-events-none`} />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
