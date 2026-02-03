import React from 'react';
import { motion } from 'framer-motion';

export function Founders() {
    return (
        <section id="vision" className="py-24 bg-dark relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                            Driven by <span className="text-primary">Vision</span>,<br />
                            Powered by <span className="text-secondary">Faith</span>.
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We are <strong>Zeeshan</strong> and <strong>Javeria</strong>, the founders of Zyfiro.
                            Our journey isn't just about building software; it's about building a legacy.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            We started Zyfiro with a singular mission: to provide world-class digital solutions while
                            laying the foundation for the next Big Tech giant. Every line of code we write is a
                            step towards that future, Inshallah.
                        </p>

                        <div className="flex gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 w-full">
                                <h4 className="font-bold text-white mb-1">Zeeshan</h4>
                                <p className="text-sm text-gray-400">Co-Founder & Tech Lead</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10 w-full">
                                <h4 className="font-bold text-white mb-1">Javeria</h4>
                                <p className="text-sm text-gray-400">Co-Founder & Operations</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center p-8 text-center group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">The Zyfiro Standard</h3>
                                <p className="text-gray-400">Excellence is not an act, but a habit.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
