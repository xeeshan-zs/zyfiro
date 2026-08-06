'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Tiny glowing particles can be handled by the layout's global particles, but we can add some subtle grid here */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <FadeIn className="mb-16 lg:mb-20 flex flex-col items-center text-center">
          <div className="flex flex-col gap-4 items-center max-w-[700px]">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-violet uppercase">
              OUR EXPERTISE
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              Engineering Intelligent Digital Experiences
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              We help startups, businesses, and organizations transform ideas into powerful digital products through AI, custom software, and modern engineering.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.15}>
          {/* Top Row: 1 large left, 2 medium right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. Custom Software - Large Card */}
            <StaggerItem className="lg:col-span-7 h-[400px] lg:h-[600px]">
              <ServiceCard service={SERVICES[0]} isLarge />
            </StaggerItem>

            {/* Right Column: 2 stacked cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 h-[800px] lg:h-[600px]">
              <StaggerItem className="flex-1">
                <ServiceCard service={SERVICES[1]} />
              </StaggerItem>
              <StaggerItem className="flex-1">
                <ServiceCard service={SERVICES[2]} />
              </StaggerItem>
            </div>
          </div>

          {/* Bottom Row: 2 horizontal cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[800px] lg:h-[400px]">
            <StaggerItem className="h-[400px]">
              <ServiceCard service={SERVICES[3]} />
            </StaggerItem>
            <StaggerItem className="h-[400px]">
              <ServiceCard service={SERVICES[4]} />
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({ service, isLarge = false }: { service: any; isLarge?: boolean }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative w-full h-full rounded-[28px] overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: 'rgba(20, 20, 25, 0.65)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        borderColor: 'rgba(124, 58, 237, 0.3)',
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/75" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Top: Badge & Icon */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">
              {service.badge}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Bottom: Text & CTA */}
        <div className="flex flex-col gap-3">
          <h3 className={`font-display font-bold text-white ${isLarge ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}`}>
            {service.title}
          </h3>
          <p className="text-[#A1A1AA] text-sm lg:text-base line-clamp-3">
            {service.description}
          </p>
          
          {/* Hidden CTA that appears on hover/is part of the flow */}
          <div className="mt-4 flex">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] group-hover:scale-110">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(124,58,237,0.2)] pointer-events-none" />
    </motion.div>
  );
}
