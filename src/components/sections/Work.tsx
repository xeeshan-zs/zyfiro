'use client';

import Image from 'next/image';
import { ExternalLink, LockKeyhole, Rocket } from 'lucide-react';
import { PORTFOLIO } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function Work() {
  return (
    <section id="work" className="section-shell overflow-hidden px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-10 max-w-3xl sm:mb-14">
          <span className="section-tag">Selected work</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Practical product work, presented with clarity.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:mt-5 sm:text-base sm:leading-8">
            A concise look at platforms and products shaped through strategy, interface design, and modern engineering.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-5 lg:grid-cols-2" staggerDelay={0.1}>
          {PORTFOLIO.map((project) => (
            <StaggerItem key={project.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-[0_16px_38px_rgba(16,24,40,0.08)] ring-1 ring-black/[0.04] card-hover sm:rounded-3xl sm:shadow-[0_20px_55px_rgba(16,24,40,0.08)]">
                <div className="relative h-48 overflow-hidden bg-bg-hover sm:h-72">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-[10px] font-bold text-text-secondary backdrop-blur sm:left-5 sm:top-5 sm:text-xs">
                    {project.category}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/86 px-3 py-1 text-[10px] font-bold text-accent-emerald backdrop-blur sm:right-5 sm:top-5 sm:text-xs">
                    {project.status}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary sm:mt-4 sm:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-bg-base px-3 py-1 text-xs font-semibold text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full px-5 py-2.5 text-center text-sm font-semibold btn-primary"
                      >
                        Live Demo <ExternalLink size={15} className="ml-2" />
                      </a>
                    ) : (
                      <button disabled className="rounded-full px-5 py-2.5 text-sm font-semibold text-text-muted btn-ghost">
                        Coming Soon
                      </button>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full px-5 py-2.5 text-center text-sm font-semibold btn-ghost"
                      >
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}

          <StaggerItem>
            <article className="flex h-full min-h-[20rem] flex-col justify-between rounded-[1.4rem] p-6 neo card-hover sm:min-h-[28rem] sm:rounded-3xl sm:p-8">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-text-primary shadow-[10px_10px_24px_rgba(148,163,184,0.2),-10px_-10px_24px_rgba(255,255,255,0.9)] sm:mb-8 sm:h-14 sm:w-14">
                  <Rocket size={24} />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-text-muted">
                  <LockKeyhole size={13} /> In development
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  Our Own Product
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-text-secondary">
                  A Zyfiro-built product is currently being designed and engineered internally. The same standards we bring to client work are shaping it from the ground up.
                </p>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-text-muted sm:mt-10">
                Launch incoming
              </p>
            </article>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
