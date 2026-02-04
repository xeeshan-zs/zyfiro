import { FadeIn } from '../ui/fade-in';
import { Mail, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { ProjectWizard } from '../features/ProjectWizard';

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Booking */}
                    <div>
                        <FadeIn direction="right">
                            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                                Let's Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Dream App</span>.
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                We engineer robust digital solutions across Web, Desktop, and Android platforms. Partner with us for world-class development, backed by transparent pricing tailored for the local market.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="p-3 bg-white/5 rounded-full text-primary border border-white/10">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Email Us</h4>
                                            <p>zeeshan.sarfraz@atrons.net</p>
                                            <p>meetjaveriajavaid@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="p-3 bg-white/5 rounded-full text-secondary border border-white/10">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">HQ</h4>
                                            <p>Mars 🪐</p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-6 flex flex-wrap gap-4">
                                        <a
                                            href="https://wa.me/923109233844"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
                                        >
                                            <MessageCircle size={20} />
                                            Chat on WhatsApp
                                        </a>

                                        <a
                                            href="https://calendly.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-dark rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                                        >
                                            <Calendar size={20} />
                                            Book Strategy Call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Project Wizard */}
                    <div className="lg:mt-0 mt-8">
                        <FadeIn delay={0.2} direction="left">
                            <ProjectWizard />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
