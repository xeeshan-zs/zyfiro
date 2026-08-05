'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Send, Globe, Smartphone, Layout, Star, Clock, MapPin, Mail } from 'lucide-react';
import { WIZARD_SERVICES, WIZARD_BUDGETS, WIZARD_TIMELINES, SITE } from '@/lib/constants';
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
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export function ProjectWizard() {
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
    setStep((s) => s + 1);
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send via FormSubmit (no backend needed, no API keys to expose)
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.formEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Project Request from ${data.name} — ${data.service}`,
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

  const reset = () => {
    setStep(0);
    setSubmitted(false);
    setDirection(1);
    setData({ service: '', budget: '', timeline: '', name: '', email: '', details: '' });
  };

  const steps = [
    { label: 'Service', done: !!data.service },
    { label: 'Scope', done: !!data.budget && !!data.timeline },
    { label: 'Details', done: !!data.name && !!data.email },
  ];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-accent-emerald/20 border border-accent-emerald/40 flex items-center justify-center mx-auto mb-6">
          <Check className="text-accent-emerald w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
          Request Received!
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Thanks, <span className="text-text-primary font-semibold">{data.name}</span>! We&apos;ve
          received your project details. Our team will send a preliminary proposal to{' '}
          <span className="text-accent-violet">{data.email}</span> within 24 hours.
        </p>
        <button
          onClick={reset}
          className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold"
        >
          Start New Project
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress steps */}
      <div className="flex items-center gap-0 mb-8">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-0 flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
                  i < step
                    ? 'bg-accent-emerald text-white'
                    : i === step
                    ? 'bg-accent-violet text-white ring-4 ring-accent-violet/20'
                    : 'bg-white/[0.07] text-text-muted'
                )}
              >
                {i < step ? <Check size={13} /> : i + 1}
              </div>
              <span className="text-xs text-text-muted hidden sm:block">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn('flex-1 h-px mx-2 transition-colors duration-500', i < step ? 'bg-accent-violet/50' : 'bg-white/[0.07]')} />
            )}
          </div>
        ))}
      </div>

      {/* Step panels */}
      <div className="relative overflow-hidden min-h-[320px]">
        <AnimatePresence custom={direction} mode="wait">
          {/* Step 1 — Service */}
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h3 className="text-text-primary text-lg font-semibold mb-1">What are we building?</h3>
              <p className="text-text-muted text-sm mb-6">Select the core service you need.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WIZARD_SERVICES.map((svc) => {
                  const Icon = SERVICE_ICONS[svc.id] ?? Globe;
                  return (
                    <motion.button
                      key={svc.id}
                      onClick={() => setData({ ...data, service: svc.title })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        'flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200',
                        data.service === svc.title
                          ? 'border-accent-violet/60 bg-accent-violet/10'
                          : 'border-white/[0.08] bg-white/[0.03] hover:border-white/[0.16]'
                      )}
                    >
                      <Icon
                        size={18}
                        className={data.service === svc.title ? 'text-accent-violet mt-0.5' : 'text-text-muted mt-0.5'}
                      />
                      <div>
                        <p className={cn('text-sm font-semibold', data.service === svc.title ? 'text-text-primary' : 'text-text-secondary')}>
                          {svc.title}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">{svc.description}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              <button
                onClick={goNext}
                disabled={!data.service}
                className="mt-6 btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={15} />
              </button>
            </motion.div>
          )}

          {/* Step 2 — Scope */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h3 className="text-text-primary text-lg font-semibold mb-1">Scope & Timeline</h3>
              <p className="text-text-muted text-sm mb-6">Help us understand the scale of your vision.</p>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-3">Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {WIZARD_BUDGETS.map((b) => (
                      <button
                        key={b}
                        onClick={() => setData({ ...data, budget: b })}
                        className={cn(
                          'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200',
                          data.budget === b
                            ? 'border-accent-violet/60 bg-accent-violet/10 text-text-primary'
                            : 'border-white/[0.08] text-text-muted hover:border-white/[0.16]'
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-3">Timeline</label>
                  <div className="flex flex-wrap gap-2">
                    {WIZARD_TIMELINES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, timeline: t })}
                        className={cn(
                          'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200',
                          data.timeline === t
                            ? 'border-accent-cyan/60 bg-accent-cyan/10 text-text-primary'
                            : 'border-white/[0.08] text-text-muted hover:border-white/[0.16]'
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={goBack} className="btn-ghost px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                  <ArrowLeft size={15} /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={!data.budget || !data.timeline}
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 — Details */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h3 className="text-text-primary text-lg font-semibold mb-1">Final Details</h3>
              <p className="text-text-muted text-sm mb-6">Where should we send the proposal?</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tony Stark"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-violet/60 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="tony@starkindustries.com"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-violet/60 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-2">Additional Details <span className="text-text-muted/50 normal-case font-normal tracking-normal">(optional)</span></label>
                  <textarea
                    placeholder="Tell us a bit more about your project..."
                    value={data.details}
                    onChange={(e) => setData({ ...data, details: e.target.value })}
                    rows={3}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-violet/60 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <div className="flex gap-3">
                  <button type="button" onClick={goBack} className="btn-ghost px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                    <ArrowLeft size={15} /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !data.name || !data.email}
                    className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Request <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Contact() {
  const TRUST_POINTS = [
    '24-hour response guarantee',
    'Transparent, fixed pricing',
    'Free initial consultation',
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-bg-base overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-violet/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-tag mb-4 block">● Contact</span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-4">
            Let&apos;s Build Your{' '}
            <span className="text-gradient">Dream App.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            We engineer robust digital solutions across Web, Desktop, and Android platforms.
            Partner with us for world-class development at transparent, local-market pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Wizard — left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 border border-white/[0.1]"
          >
            <ProjectWizard />
          </motion.div>

          {/* Contact Info — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Trust points */}
            <div className="glass rounded-2xl p-6 border border-white/[0.07]">
              <h4 className="text-text-primary text-sm font-semibold mb-4">Why choose us?</h4>
              <div className="flex flex-col gap-3">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-emerald/20 border border-accent-emerald/40 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-accent-emerald" />
                    </div>
                    <span className="text-text-secondary text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="glass rounded-2xl p-6 border border-white/[0.07] space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent-violet mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-muted text-xs mb-0.5">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-text-primary text-sm font-medium hover:text-accent-violet transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-muted text-xs mb-0.5">Response Time</p>
                  <p className="text-text-primary text-sm font-medium">Within 24 hours — always</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-emerald mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-muted text-xs mb-0.5">HQ</p>
                  <p className="text-text-primary text-sm font-medium">{SITE.hq}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 hover:border-[#25D366]/60 text-[#25D366] rounded-2xl p-5 font-semibold text-sm transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1 duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
