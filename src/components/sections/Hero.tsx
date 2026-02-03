import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Building the Future of Tech
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                        We Build Digital <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-500">
                            Masterpieces
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Zyfiro is a next-gen tech agency crafting scalable React, Flutter, and Firebase solutions.
                        We turn visionary ideas into World-Class products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            Media Inquiry <Rocket size={20} />
                        </a>
                        <a
                            href="#work"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center gap-2"
                        >
                            View Our Work <Code2 size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
