'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Clock, Globe, Layout, Mail, MapPin, Send, Smartphone, Star } from 'lucide-react';
import { SITE, WIZARD_BUDGETS, WIZARD_SERVICES, WIZARD_TIMELINES } from '@/lib/constants';
import { cn } from '@/lib/utils';

type WizardData = {
  service: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  details: string;
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  web: Globe,
  android: Smartphone,
  desktop: Layout,
  design: Star,
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 28 : -28, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -28 : 28, opacity: 0 }),
};

function ProjectWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<WizardData>({
    service: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    details: '',
  });

  const goNext = () => {
    setDirection(1);
    setStep((value) => value + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((value) => value - 1);
  };

  const reset = () => {
    setStep(0);
    setSubmitted(false);
    setDirection(1);
    setData({ service: '', budget: '', timeline: '', name: '', email: '', details: '' });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.formEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Project Request from ${data.name} - ${data.service}`,
          name: data.name,
          email: data.email,
          service: data.service,
          budget: data.budget,
          timeline: data.timeline,
          details: data.details || 'No additional details provided.',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email us directly at zyfiro@gmail.com');
      }
    } catch {
      setError('Failed to send. Please email us directly at zyfiro@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { label: 'Service', done: !!data.service },
    { label: 'Scope', done: !!data.budget && !!data.timeline },
    { label: 'Details', done: !!data.name && !!data.email },
  ];

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-accent-emerald">
          <Check size={28} />
        </div>
        <h3 className="text-2xl font-bold text-text-primary">Request received.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-text-secondary">
          Thanks, <span className="font-semibold text-text-primary">{data.name}</span>. We will review the details and respond to <span className="font-semibold text-text-primary">{data.email}</span> within 24 hours.
        </p>
        <button onClick={reset} className="mt-8 rounded-full px-6 py-3 text-sm font-semibold btn-primary">
          Start New Project
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-7 flex items-center sm:mb-9">
        {steps.map((item, index) => (
          <div key={item.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors sm:h-8 sm:w-8',
                  index < step
                    ? 'bg-accent-emerald text-white'
                    : index === step
                      ? 'bg-text-primary text-white'
                      : 'bg-bg-base text-text-muted'
                )}
              >
                {index < step ? <Check size={14} /> : index + 1}
              </span>
              <span className="hidden text-xs font-bold uppercase tracking-[0.12em] text-text-muted sm:inline">
                {item.label}
              </span>
            </div>
            {index < steps.length - 1 && <span className="mx-2 h-px flex-1 bg-black/[0.08] sm:mx-3" />}
          </div>
        ))}
      </div>

      <div className="relative min-h-[310px] overflow-hidden sm:min-h-[330px]">
        <AnimatePresence custom={direction} mode="wait">
          {step === 0 && (
            <motion.div key="service" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-bold text-text-primary sm:text-xl">What should we build?</h3>
              <p className="mt-1 text-sm text-text-secondary">Choose the service closest to your need.</p>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
                {WIZARD_SERVICES.map((service) => {
                  const Icon = SERVICE_ICONS[service.id] ?? Globe;
                  const active = data.service === service.title;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setData({ ...data, service: service.title })}
                      className={cn(
                        'rounded-2xl border p-3 text-left transition-all sm:p-4',
                        active ? 'border-text-primary bg-white shadow-[0_16px_34px_rgba(16,24,40,0.08)]' : 'border-black/[0.06] bg-white/60 hover:bg-white'
                      )}
                    >
                      <Icon size={19} className={active ? 'text-text-primary' : 'text-text-muted'} />
                      <p className="mt-3 text-sm font-bold text-text-primary">{service.title}</p>
                      <p className="mt-1 text-xs leading-5 text-text-muted">{service.description}</p>
                    </button>
                  );
                })}
              </div>
              <button onClick={goNext} disabled={!data.service} className="mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 btn-primary sm:mt-7 sm:w-auto">
                Continue <ArrowRight size={15} className="ml-2" />
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="scope" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-bold text-text-primary sm:text-xl">Scope and timeline</h3>
              <p className="mt-1 text-sm text-text-secondary">A rough range helps us respond with the right proposal.</p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">Budget</p>
                  <div className="flex flex-wrap gap-2">
                    {WIZARD_BUDGETS.map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setData({ ...data, budget })}
                        className={cn('rounded-full border px-4 py-2 text-sm font-semibold transition-colors', data.budget === budget ? 'border-text-primary bg-text-primary text-white' : 'border-black/[0.08] bg-white/60 text-text-secondary hover:bg-white')}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-text-muted">Timeline</p>
                  <div className="flex flex-wrap gap-2">
                    {WIZARD_TIMELINES.map((timeline) => (
                      <button
                        key={timeline}
                        onClick={() => setData({ ...data, timeline })}
                        className={cn('rounded-full border px-4 py-2 text-sm font-semibold transition-colors', data.timeline === timeline ? 'border-text-primary bg-text-primary text-white' : 'border-black/[0.08] bg-white/60 text-text-secondary hover:bg-white')}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:flex">
                <button onClick={goBack} className="rounded-full px-5 py-3 text-sm font-semibold btn-ghost">
                  <ArrowLeft size={15} className="mr-2" /> Back
                </button>
                <button onClick={goNext} disabled={!data.budget || !data.timeline} className="rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 btn-primary">
                  Continue <ArrowRight size={15} className="ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form key="details" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-text-primary sm:text-xl">Final details</h3>
                <p className="mt-1 text-sm text-text-secondary">Tell us where to send the next steps.</p>
              </div>

              <input
                type="text"
                required
                placeholder="Your name"
                value={data.name}
                onChange={(event) => setData({ ...data, name: event.target.value })}
                className="w-full rounded-2xl border border-black/[0.07] bg-white/70 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-text-primary focus:bg-white"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={data.email}
                onChange={(event) => setData({ ...data, email: event.target.value })}
                className="w-full rounded-2xl border border-black/[0.07] bg-white/70 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-text-primary focus:bg-white"
              />
              <textarea
                placeholder="Project details"
                value={data.details}
                onChange={(event) => setData({ ...data, details: event.target.value })}
                rows={4}
                className="w-full resize-none rounded-2xl border border-black/[0.07] bg-white/70 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-text-primary focus:bg-white"
              />

              {error && <p className="text-sm font-medium text-red-600">{error}</p>}

              <div className="grid grid-cols-2 gap-3 sm:flex">
                <button type="button" onClick={goBack} className="rounded-full px-5 py-3 text-sm font-semibold btn-ghost">
                  <ArrowLeft size={15} className="mr-2" /> Back
                </button>
                <button type="submit" disabled={loading || !data.name || !data.email} className="rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 btn-primary">
                  {loading ? 'Sending...' : 'Send Request'} <Send size={15} className="ml-2" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Contact() {
  const TRUST_POINTS = ['24-hour response guarantee', 'Transparent scope and pricing', 'Free initial consultation'];

  return (
    <section id="contact" className="section-shell overflow-hidden px-5 pb-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl sm:mb-12">
          <span className="section-tag">Contact</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:mt-5 sm:text-base sm:leading-8">
            Share a little about your project and we will reply with a clear next step, timeline, and direction.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[1.4rem] p-4 glass-strong sm:rounded-[2rem] sm:p-8">
            <ProjectWizard />
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="space-y-5">
            <div className="rounded-[1.4rem] bg-white p-5 shadow-[0_16px_38px_rgba(16,24,40,0.08)] ring-1 ring-black/[0.04] sm:rounded-[2rem] sm:p-6 sm:shadow-[0_20px_55px_rgba(16,24,40,0.08)]">
              <h3 className="text-sm font-bold text-text-primary">Why teams choose Zyfiro</h3>
              <div className="mt-5 space-y-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-accent-emerald">
                      <Check size={13} />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.4rem] bg-white p-5 shadow-[0_16px_38px_rgba(16,24,40,0.08)] ring-1 ring-black/[0.04] sm:rounded-[2rem] sm:p-6 sm:shadow-[0_20px_55px_rgba(16,24,40,0.08)]">
              <div className="space-y-5">
                <a href={`mailto:${SITE.email}`} className="flex gap-3 text-sm font-semibold text-text-primary">
                  <Mail size={18} className="text-accent-violet" />
                  {SITE.email}
                </a>
                <div className="flex gap-3 text-sm font-semibold text-text-primary">
                  <Clock size={18} className="text-accent-cyan" />
                  Within 24 hours
                </div>
                <div className="flex gap-3 text-sm font-semibold text-text-primary">
                  <MapPin size={18} className="text-accent-emerald" />
                  {SITE.hq}
                </div>
              </div>
            </div>

            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_38px_rgba(37,211,102,0.24)] transition-transform hover:-translate-y-0.5">
              Chat on WhatsApp <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
