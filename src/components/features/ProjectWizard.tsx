import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Smartphone, Monitor, Palette, ArrowRight, ArrowLeft, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { cn } from '../../lib/utils';

// Types
type Step = 1 | 2 | 3 | 4; // 4 is Success
type ServiceType = 'web' | 'android' | 'desktop' | 'design';

interface WizardData {
    service: ServiceType | null;
    budget: string;
    timeline: string;
    name: string;
    email: string;
    details: string;
}

const services = [
    { id: 'web', label: 'Web Development', icon: Code2, desc: 'High-performance websites & web apps.' },
    { id: 'android', label: 'Android App', icon: Smartphone, desc: 'Custom native Android solutions.' },
    { id: 'desktop', label: 'Desktop App', icon: Monitor, desc: 'Powerful cross-platform software.' },
    { id: 'design', label: 'UI/UX Design', icon: Palette, desc: 'World-class interfaces & experiences.' },
];

const budgets = ['20k - 50k PKR', '50k - 100k PKR', '100k - 300k PKR', '300k+ PKR'];
const timelines = ['< 1 Month', '1-3 Months', '3-6 Months', '6+ Months'];

export function ProjectWizard() {
    const [step, setStep] = useState<Step>(1);
    const [data, setData] = useState<WizardData>({
        service: null,
        budget: '',
        timeline: '',
        name: '',
        email: '',
        details: ''
    });

    const nextStep = () => setStep((p) => Math.min(p + 1, 4) as Step);
    const prevStep = () => setStep((p) => Math.max(p - 1, 1) as Step);

    const updateData = (key: keyof WizardData, value: any) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const isStep1Valid = !!data.service;
    const isStep2Valid = !!data.budget && !!data.timeline;
    const isStep3Valid = !!data.name && !!data.email;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Project Inquiry: ${data.service?.toUpperCase()} - ${data.name}`;
        const body = `
Hi Zyfiro Team,

I'm interested in starting a project with you. Here are the details:

Name: ${data.name}
Service: ${services.find(s => s.id === data.service)?.label}
Budget: ${data.budget}
Timeline: ${data.timeline}

Additional Details:
${data.details}

Best regards,
${data.name}
        `.trim();

        const mailtoLink = `mailto:zeeshan.sarfraz@atrons.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setStep(4);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="w-full glass rounded-3xl p-6 md:p-8 overflow-hidden relative min-h-[500px] flex flex-col">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: '25%' }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            <AnimatePresence mode="wait" custom={1}>
                {step === 1 && (
                    <motion.div
                        key="step1"
                        custom={1}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">What are we building?</h3>
                            <p className="text-gray-400">Select the core service you need.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {services.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => {
                                        updateData('service', s.id);
                                    }}
                                    className={cn(
                                        "p-6 rounded-2xl border text-left transition-all duration-300 group",
                                        data.service === s.id
                                            ? "bg-primary/20 border-primary shadow-[0_0_30px_-10px_var(--primary)]"
                                            : "glass-hover border-white/10 hover:border-white/20"
                                    )}
                                >
                                    <div className={cn(
                                        "p-3 rounded-lg w-fit mb-4 transition-colors",
                                        data.service === s.id ? "bg-primary text-white" : "bg-white/10 text-gray-400 group-hover:text-white"
                                    )}>
                                        <s.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{s.label}</h4>
                                    <p className="text-xs text-gray-400">{s.desc}</p>
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto flex justify-end">
                            <Button
                                onClick={nextStep}
                                disabled={!isStep1Valid}
                                className="bg-white text-dark hover:bg-gray-200"
                            >
                                Next Step <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        custom={1}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Scope & Timeline</h3>
                            <p className="text-gray-400">Help us understand the scale of your vision.</p>
                        </div>

                        <div className="space-y-8 mb-8">
                            {/* Budget */}
                            <div className="space-y-3">
                                <Label className="text-gray-300 flex items-center gap-2"><DollarSign size={16} /> Estimated Budget</Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {budgets.map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => updateData('budget', b)}
                                            className={cn(
                                                "py-3 px-2 rounded-lg text-sm font-medium border transition-all",
                                                data.budget === b
                                                    ? "bg-secondary/20 border-secondary text-white"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                            )}
                                        >
                                            {b}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-3">
                                <Label className="text-gray-300 flex items-center gap-2"><Clock size={16} /> Desired Timeline</Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {timelines.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => updateData('timeline', t)}
                                            className={cn(
                                                "py-3 px-2 rounded-lg text-sm font-medium border transition-all",
                                                data.timeline === t
                                                    ? "bg-purple-500/20 border-purple-500 text-white"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex justify-between">
                            <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back
                            </Button>
                            <Button
                                onClick={nextStep}
                                disabled={!isStep2Valid}
                                className="bg-white text-dark hover:bg-gray-200"
                            >
                                Next Step <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        custom={1}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Final Details</h3>
                            <p className="text-gray-400">Where should we send the proposal?</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        value={data.name}
                                        onChange={(e) => updateData('name', e.target.value)}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        value={data.email}
                                        onChange={(e) => updateData('email', e.target.value)}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="details">Additional Details (Optional)</Label>
                                <Textarea
                                    id="details"
                                    placeholder="Tell us a bit more about your project..."
                                    value={data.details}
                                    onChange={(e) => updateData('details', e.target.value)}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[120px]"
                                />
                            </div>
                        </div>

                        <div className="mt-auto flex justify-between">
                            <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white">
                                <ArrowLeft className="mr-2 w-4 h-4" /> Back
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={!isStep3Valid}
                                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 w-auto px-8"
                            >
                                Send Request <CheckCircle className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col items-center justify-center text-center py-12"
                    >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                        <p className="text-gray-400 max-w-md mb-8">
                            Thanks, {data.name}! We've received your project details. Our team is reviewing them and will send a preliminary proposal to <strong>{data.email}</strong> within 24 hours.
                        </p>
                        <Button onClick={() => setStep(1)} variant="outline" className="border-white/10 text-white hover:bg-white/5">
                            Start New Project
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
