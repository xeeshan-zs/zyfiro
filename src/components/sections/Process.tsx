'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const PROCESS_STEPS = [
  {
    id: '01',
    headingParts: [
      { text: 'Discovery &\n', style: 'bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent animate-gradient-shift' },
      { text: 'Strategy', style: 'text-white' },
    ],
    description: 'Every successful digital product starts with understanding your business, users, goals, and vision.',
    accordions: [
      {
        q: 'How do we start a project?',
        a: 'We begin with a collaborative discovery session to understand your business goals, target audience, project vision, and technical requirements before recommending the ideal solution.',
      },
      {
        q: 'Do I need technical knowledge?',
        a: 'Not at all. Our team translates technical concepts into clear business language and guides you through every decision.',
      },
      {
        q: 'How long does planning take?',
        a: 'Typically between 2–7 days depending on the complexity of your project.',
      },
      {
        q: 'What information should I prepare?',
        a: 'Business goals, inspirations, competitors, branding assets, and feature ideas are enough to get started.',
      },
    ],
  },
  {
    id: '02',
    headingParts: [
      { text: 'Design &\n', style: 'bg-gradient-to-r from-[#FB923C] to-[#EC4899] bg-clip-text text-transparent animate-gradient-shift' },
      { text: 'Architecture', style: 'text-white' },
    ],
    description: 'Beautiful interfaces and scalable technical foundations ensure your product is both visually stunning and technically reliable.',
    accordions: [
      {
        q: 'Will I approve designs before development?',
        a: 'Yes. Every interface is designed and reviewed before implementation.',
      },
      {
        q: 'Can I request revisions?',
        a: 'Absolutely. Feedback is an essential part of our design process.',
      },
      {
        q: 'Which technologies do you use?',
        a: 'React, Next.js, Node.js, TypeScript, AI frameworks, PostgreSQL, Python, cloud technologies, and modern development tools.',
      },
      {
        q: 'Will my application be responsive?',
        a: 'Every product is optimized for desktop, tablet, and mobile devices.',
      },
    ],
  },
  {
    id: '03',
    headingParts: [
      { text: 'Development &\n', style: 'bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent animate-gradient-shift' },
      { text: 'Quality Assurance', style: 'text-white' },
    ],
    description: 'Our agile engineering process emphasizes performance, security, scalability, and continuous testing throughout development.',
    accordions: [
      {
        q: 'How do I track progress?',
        a: 'Regular milestone updates, demos, and direct communication keep you informed throughout the project.',
      },
      {
        q: 'Can requirements evolve?',
        a: 'Yes. Our agile workflow accommodates feedback while maintaining project quality.',
      },
      {
        q: 'Do you test before launch?',
        a: 'Every project undergoes comprehensive functional, performance, security, and responsive testing.',
      },
      {
        q: 'Is the software scalable?',
        a: 'Yes. Every architecture is designed for future growth.',
      },
    ],
  },
  {
    id: '04',
    headingParts: [
      { text: 'Launch &\n', style: 'bg-gradient-to-r from-[#FB923C] to-[#EC4899] bg-clip-text text-transparent animate-gradient-shift' },
      { text: 'Growth', style: 'bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent animate-gradient-shift' },
    ],
    description: 'Deployment is only the beginning. We continue supporting your product with maintenance, optimization, and future enhancements.',
    accordions: [
      {
        q: 'Do you provide maintenance?',
        a: 'Yes. We offer continuous maintenance, monitoring, updates, and feature improvements.',
      },
      {
        q: 'Can you improve existing software?',
        a: 'Absolutely. We modernize legacy systems and redesign outdated digital experiences.',
      },
      {
        q: 'Do you offer SEO?',
        a: 'Yes. Technical SEO, performance optimization, and Core Web Vitals improvements are included where applicable.',
      },
      {
        q: 'Can Zyfiro grow with my business?',
        a: 'Our solutions are built to scale from startup MVP to enterprise-grade platforms.',
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="group relative bg-[rgba(20,20,30,0.7)] backdrop-blur-[18px] border border-white/[0.08] rounded-[22px] p-6 cursor-pointer overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:bg-[rgba(30,30,45,0.7)] hover:border-[#7C3AED]/50 hover:shadow-[0_4px_30px_rgba(124,58,237,0.1)]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#3B82F6]/0 group-hover:from-[#7C3AED]/5 group-hover:to-[#3B82F6]/5 pointer-events-none transition-colors duration-500" />
      <div className="flex justify-between items-center gap-4 relative z-10">
        <h4 className="text-base font-semibold text-white/90 leading-snug pr-4">{q}</h4>
        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.6)]">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Plus className="text-white" size={16} strokeWidth={3} />
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative bg-[#09090B] py-32 lg:py-48 overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7C3AED]/15 via-[#09090B] to-[#09090B] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-32 lg:mb-48">
          <FadeIn>
            <span className="inline-block text-[#A1A1AA] text-xs font-bold tracking-widest uppercase mb-6 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              OUR PROCESS
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              How We Transform{' '}
              <span 
                className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent animate-gradient-shift" 
                style={{ backgroundSize: '200% auto' }}
              >
                Ideas
              </span>
              <br />
              Into{' '}
              <span 
                className="bg-gradient-to-r from-[#FB923C] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: '200% auto' }}
              >
                Digital Products
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From strategy to deployment, our transparent and collaborative process ensures every product is thoughtfully designed, expertly engineered, and built to scale.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Area */}
        <div ref={containerRef} className="relative">
          {/* Animated Glowing Vertical Timeline (Desktop) */}
          <div className="absolute left-[24px] md:left-[40px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden lg:block rounded-full">
            <motion.div
              style={{ height: timelineHeight }}
              className="w-full bg-gradient-to-b from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.8)] origin-top rounded-full"
            />
          </div>

          {/* Animated Glowing Vertical Timeline (Tablet/Mobile) - Left aligned */}
          <div className="absolute left-[24px] md:left-[40px] top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 lg:hidden rounded-full">
            <motion.div
              style={{ height: timelineHeight }}
              className="w-full bg-gradient-to-b from-[#7C3AED] via-[#3B82F6] to-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.8)] origin-top rounded-full"
            />
          </div>

          {/* Timeline Steps */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-24 group pl-16 md:pl-24 lg:pl-0">
                  
                  {/* Huge Background Number */}
                  <div className={`absolute top-0 -translate-y-[20%] select-none pointer-events-none z-0 mix-blend-screen opacity-[0.15] blur-[1px] transition-all duration-1000 group-hover:opacity-30 group-hover:blur-[0px] lg:group-hover:translate-x-4
                    left-0 lg:left-auto lg:top-1/2 lg:-translate-y-1/2
                    ${isEven ? 'lg:right-auto lg:left-1/2 lg:-translate-x-[110%]' : 'lg:right-1/2 lg:translate-x-[110%]'}
                  `}>
                    <motion.div
                      initial={{ y: 50 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="text-[120px] md:text-[200px] lg:text-[250px] font-display font-bold leading-none text-transparent"
                      style={{
                        WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                        textShadow: '0 0 60px rgba(124,58,237,0.15)'
                      }}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Content (Left or Right on Desktop, always right of line on Mobile) */}
                  <div className={`relative z-10 w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <FadeIn direction={isEven ? 'right' : 'left'} className="w-full">
                      <div className={`flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                        {/* Mobile/Tablet Number indicator */}
                        <div className="absolute -left-[54px] md:-left-[78px] lg:hidden top-2 w-4 h-4 rounded-full bg-[#09090B] border-2 border-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.5)] z-20" />
                        
                        <h3 className="font-display text-4xl md:text-5xl font-bold leading-[1.15] mb-6 max-w-xl whitespace-pre-line">
                          {step.headingParts.map((part, i) => (
                            <span key={i} className={part.style} style={part.style.includes('gradient') ? { backgroundSize: '200% auto' } : {}}>{part.text}</span>
                          ))}
                        </h3>
                        <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Accordions (Right or Left on Desktop, always right of line on Mobile) */}
                  <div className={`relative z-10 w-full lg:w-1/2 flex flex-col gap-4 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {step.accordions.map((acc, i) => (
                      <FadeIn key={i} delay={0.1 + i * 0.1} direction={isEven ? 'left' : 'right'} className="w-full">
                        <AccordionItem q={acc.q} a={acc.a} />
                      </FadeIn>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
