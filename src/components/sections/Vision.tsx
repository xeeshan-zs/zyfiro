'use client';

import { VALUES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

const FOUNDERS = [
  { name: 'Zeeshan Sarfraz', role: 'Co-Founder & Tech Lead', initials: 'ZS' },
  { name: 'Javeria Javaid', role: 'Co-Founder & Operations', initials: 'JJ' },
];

export function Vision() {
  return (
    <section id="vision" className="section-shell overflow-hidden px-5 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <FadeIn>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl">
            A focused studio with a long-term vision.
          </h2>
          <p className="mt-5 text-base font-medium leading-7 text-text-primary sm:mt-6 sm:text-lg sm:leading-8">
            We are Zeeshan Sarfraz and Javeria Javaid, the founders of Zyfiro. Our work is about building useful, dependable software with care.
          </p>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Zyfiro exists to give businesses access to thoughtful design, modern engineering, and honest collaboration. Every product we take on is shaped with the same standard: make it clear, make it reliable, and make it worthy of growth.
          </p>

          <StaggerContainer className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4" staggerDelay={0.1}>
            {FOUNDERS.map((founder) => (
              <StaggerItem key={founder.name}>
                <div className="flex items-center gap-4 rounded-[1.4rem] bg-white p-4 shadow-[0_16px_38px_rgba(16,24,40,0.08)] ring-1 ring-black/[0.04] sm:rounded-3xl sm:p-5 sm:shadow-[0_18px_45px_rgba(16,24,40,0.08)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bg-base text-sm font-bold text-text-primary shadow-[inset_6px_6px_12px_rgba(148,163,184,0.16),inset_-6px_-6px_12px_rgba(255,255,255,0.85)]">
                    {founder.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{founder.name}</p>
                    <p className="mt-1 text-xs font-medium text-text-muted">{founder.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div className="rounded-[1.4rem] p-5 glass-strong sm:rounded-[2rem] sm:p-7">
            <div className="mb-5 border-b border-black/[0.06] pb-5 sm:mb-7 sm:pb-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">The Zyfiro standard</p>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                Built around discipline, transparency, and product taste.
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-5">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-3 rounded-2xl bg-white/62 p-3 sm:gap-4 sm:p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bg-base text-text-primary">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{value.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-text-secondary">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
