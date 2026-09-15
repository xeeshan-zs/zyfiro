'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { cn } from '@/lib/utils';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Discovery',
    description: 'We define business goals, user needs, product scope, and the practical route to launch.',
    questions: [
      ['How do we start?', 'We begin with a focused discovery call and turn your goals into a clear scope, timeline, and recommended technical direction.'],
      ['Do I need technical knowledge?', 'No. We translate technical decisions into plain business language and guide each step.'],
    ],
  },
  {
    id: '02',
    title: 'Design',
    description: 'We create clean interfaces, user flows, and a scalable structure before engineering begins.',
    questions: [
      ['Will I approve designs?', 'Yes. Key screens and interaction patterns are reviewed before implementation starts.'],
      ['Can I request revisions?', 'Yes. Feedback is part of the process and is handled through clear review cycles.'],
    ],
  },
  {
    id: '03',
    title: 'Build',
    description: 'We develop the product with modern frameworks, responsive behavior, and quality checks throughout.',
    questions: [
      ['How do I track progress?', 'You receive milestone updates, demos, and direct communication throughout the build.'],
      ['Do you test before launch?', 'Yes. We review function, performance, responsiveness, and core production readiness.'],
    ],
  },
  {
    id: '04',
    title: 'Launch',
    description: 'We deploy, monitor, and support your product so it can keep improving after release.',
    questions: [
      ['Do you provide maintenance?', 'Yes. We can support updates, monitoring, performance improvements, and future features.'],
      ['Can you improve existing software?', 'Yes. We modernize legacy systems and redesign outdated digital experiences.'],
    ],
  },
];

function Question({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="w-full rounded-2xl border border-black/[0.05] bg-white/70 p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors hover:bg-white sm:p-4"
    >
      <span className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-text-primary">{question}</span>
        <ChevronDown size={16} className={cn('shrink-0 text-text-muted transition-transform', open && 'rotate-180')} />
      </span>
      <AnimatePresence initial={false}>
        {open && (
          <motion.span
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="block overflow-hidden"
          >
            <span className="mt-3 block text-sm leading-6 text-text-secondary">{answer}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function Process() {
  return (
    <section id="process" className="section-shell overflow-hidden px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="section-tag mx-auto">Process</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            A calm process for ambitious product work.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:mt-5 sm:text-base sm:leading-8">
            We keep collaboration direct and predictable, with the right amount of structure around every decision.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-5 lg:grid-cols-4" staggerDelay={0.08}>
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.id}>
              <article className="h-full rounded-[1.4rem] p-5 glass-strong sm:rounded-3xl sm:p-6">
                <p className="text-sm font-bold text-accent-violet">{step.id}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-text-primary sm:mt-4 sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary sm:mt-4 sm:leading-7">{step.description}</p>
                <div className="mt-5 space-y-3 sm:mt-7">
                  {step.questions.map(([question, answer]) => (
                    <Question key={question} question={question} answer={answer} />
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
