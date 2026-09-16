'use client';

import type { ElementType } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

function ServiceVisual({ index, icon: Icon }: { index: number; icon: ElementType }) {
  const variants = [
    <div key="software" className="grid h-full grid-cols-3 gap-2 p-4 sm:gap-3 sm:p-5">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <span key={item} className="rounded-2xl bg-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
      ))}
      <span className="absolute bottom-4 left-4 right-4 h-10 rounded-2xl bg-text-primary/90 sm:bottom-5 sm:left-5 sm:right-5 sm:h-12" />
    </div>,
    <div key="ai" className="relative h-full p-4 sm:p-5">
      {[18, 34, 50, 66, 82].map((left, item) => (
        <span
          key={left}
          className="absolute h-4 w-4 rounded-full bg-white shadow-[0_12px_30px_rgba(16,24,40,0.16)]"
          style={{ left: `${left}%`, top: `${item % 2 === 0 ? 34 : 58}%` }}
        />
      ))}
      <span className="absolute left-[22%] right-[18%] top-1/2 h-px bg-text-primary/20" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.25rem] bg-text-primary text-white shadow-[0_22px_45px_rgba(16,24,40,0.22)] sm:h-20 sm:w-20 sm:rounded-[1.4rem]">
        <Icon size={24} />
      </span>
    </div>,
    <div key="web" className="h-full p-4 sm:p-5">
      <div className="h-full rounded-[1.4rem] bg-white p-4 shadow-[0_18px_40px_rgba(16,24,40,0.1)]">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="grid grid-cols-[0.75fr_1fr] gap-3">
          <span className="h-20 rounded-2xl bg-text-primary/90 sm:h-24" />
          <span className="h-20 rounded-2xl bg-bg-base sm:h-24" />
          <span className="col-span-2 h-9 rounded-xl bg-bg-base" />
        </div>
      </div>
    </div>,
    <div key="mobile" className="relative h-full p-4 sm:p-5">
      <span className="absolute left-7 top-7 h-28 w-16 rotate-[-8deg] rounded-[1.25rem] bg-white shadow-[0_18px_45px_rgba(16,24,40,0.12)] sm:left-8 sm:top-8 sm:h-32 sm:w-20 sm:rounded-[1.4rem]" />
      <span className="absolute right-8 top-4 h-36 w-20 rotate-[7deg] rounded-[1.45rem] bg-text-primary shadow-[0_24px_50px_rgba(16,24,40,0.22)] sm:right-10 sm:top-5 sm:h-40 sm:w-24 sm:rounded-[1.6rem]" />
      <span className="absolute bottom-7 left-1/2 h-10 w-32 -translate-x-1/2 rounded-2xl bg-white/80 sm:bottom-8 sm:h-12 sm:w-36" />
    </div>,
    <div key="design" className="grid h-full grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-5">
      <span className="rounded-[1.4rem] bg-[#101828]" />
      <span className="rounded-[1.4rem] bg-[#6d5dfc]" />
      <span className="rounded-[1.4rem] bg-[#0891b2]" />
      <span className="rounded-[1.4rem] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
    </div>,
  ];

  return (
    <div className="relative mb-5 h-36 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#eef2f7,#ffffff)] sm:mb-8 sm:h-48">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,93,252,0.20),transparent_13rem),radial-gradient(circle_at_90%_20%,rgba(8,145,178,0.18),transparent_12rem)]" />
      <div className="absolute inset-0">{variants[index] ?? variants[0]}</div>
      <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/86 text-text-primary shadow-[0_14px_34px_rgba(16,24,40,0.12)] backdrop-blur sm:left-4 sm:top-4 sm:h-11 sm:w-11">
        <Icon size={18} />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-shell overflow-hidden px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl">
              End-to-end digital product capability.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8 lg:justify-self-end">
            From first concept to launch and iteration, we design and engineer software that gives businesses a sharper operating edge.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 0;

            return (
              <StaggerItem key={service.title} className={featured ? 'md:col-span-2' : ''}>
                <article className="group relative h-full overflow-hidden rounded-[1.4rem] bg-white p-4 shadow-[0_16px_38px_rgba(16,24,40,0.08)] ring-1 ring-black/[0.04] card-hover sm:rounded-3xl sm:p-6 sm:shadow-[0_20px_55px_rgba(16,24,40,0.08)]">
                  <ServiceVisual index={index} icon={Icon} />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                        {service.badge}
                      </p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-text-primary sm:mt-3 sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-base text-text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-10 sm:w-10">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-text-secondary sm:mt-4 sm:leading-7">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
