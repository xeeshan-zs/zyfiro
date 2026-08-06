'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Lock } from 'lucide-react';
import { PORTFOLIO } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36 bg-bg-base overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="flex flex-col gap-4">
            <span className="section-tag">● Portfolio</span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary">
              Selected <span className="text-gradient">Work.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
              A glimpse into the digital products we&apos;ve engineered.
            </p>
          </div>
        </FadeIn>

        {/* Filter strip — decorative */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-text-muted text-xs font-semibold uppercase tracking-widest">Filter By:</span>
            <button className="glass px-4 py-1.5 rounded-full text-xs font-medium text-text-secondary border border-white/[0.07] hover:border-white/[0.15] transition-colors cursor-not-allowed opacity-60">
              All Regions
            </button>
            <button className="glass px-4 py-1.5 rounded-full text-xs font-medium text-text-secondary border border-white/[0.07] hover:border-white/[0.15] transition-colors cursor-not-allowed opacity-60">
              All Services
            </button>
          </div>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.15}>
          {PORTFOLIO.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                className="group relative glass rounded-[24px] lg:rounded-[28px] overflow-hidden border border-white/[0.07] hover:border-accent-violet/50 block card-hover transition-colors duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] flex flex-col h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Banner */}
                <div className="relative h-56 lg:h-64 bg-gradient-to-br from-accent-violet/20 via-accent-blue/10 to-transparent flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533]/80 to-[#0a1628]/60 z-0" />
                  
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent z-0" />
                    </>
                  ) : (
                    <>
                      {/* Decorative grid */}
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(124,58,237,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.1) 1px, transparent 1px)',
                          backgroundSize: '30px 30px',
                        }}
                      />
                      <span className="relative z-10 font-display text-6xl font-bold text-white/10 tracking-widest select-none">
                        {project.label}
                      </span>
                    </>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-accent-emerald/15 border border-accent-emerald/30 px-3 py-1 rounded-full z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    <span className="text-accent-emerald text-xs font-semibold">{project.status}</span>
                  </div>

                  {/* Category badge */}
                  {project.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-semibold">{project.category}</span>
                      </div>
                    </div>
                  )}

                  {/* External link icon (if no buttons shown) */}
                  {!project.githubLink && !project.liveLink && (
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-white/[0.06] text-text-muted border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {project.liveLink ? (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="glass inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold text-text-muted cursor-not-allowed border border-white/[0.05]"
                      >
                        Coming Soon
                      </button>
                    )}

                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold border border-white/10 hover:bg-white/5 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      >
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}

          {/* Coming Soon / Stealth Mode Card */}
          <StaggerItem>
            <motion.div
              className="group relative glass rounded-3xl overflow-hidden border border-white/[0.07] h-full card-hover"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Animated banner */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-bg-card to-bg-base flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 to-accent-violet/10" />
                {/* Animated orbit rings */}
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border border-accent-violet/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 rounded-full border border-accent-cyan/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 flex items-center justify-center border border-white/10">
                    <Rocket size={32} className="text-text-secondary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  <Lock size={10} className="text-text-muted" />
                  <span className="text-text-muted text-xs font-semibold">Stealth Mode</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                  Our Own Product
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  We&apos;re building something of our own — a product crafted from the ground up
                  by the Zyfiro team. Launch incoming.
                </p>
                <button
                  disabled
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted cursor-not-allowed opacity-60"
                >
                  Coming Soon ✦
                </button>
              </div>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-3xl" />
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
