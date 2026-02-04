import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export function Founders() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            id="vision"
            className="py-32 bg-dark relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <motion.div
                style={{ opacity }}
                className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-10%] bottom-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content with Parallax and Stagger */}
                    <motion.div
                        style={{ y: yText }}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-1/2"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Vision</span>,<br />
                            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-300">Faith</span>.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-300 text-xl leading-relaxed mb-8 font-light">
                            We are <strong className="text-white font-medium">Zeeshan Sarfraz</strong> and <strong className="text-white font-medium">Javeria Javaid</strong>, the founders of Zyfiro.
                            Our journey isn't just about building software; it's about building a <span className="text-white/90 border-b border-primary/30 pb-0.5">legacy</span>.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-10 text-lg">
                            We started Zyfiro with a singular mission: to provide world-class digital solutions while
                            laying the foundation for the next Big Tech giant. Every line of code we write is a
                            step towards that future, Inshallah.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 glass rounded-3xl w-full transition-all duration-300 group cursor-default shadow-lg hover:shadow-primary/20"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                                    <span className="text-primary font-bold text-lg">Z</span>
                                </div>
                                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors">Zeeshan</h4>
                                <p className="text-sm text-gray-400">Co-Founder & Tech Lead</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 glass rounded-3xl w-full transition-all duration-300 group cursor-default shadow-lg hover:shadow-secondary/20"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                                    <span className="text-secondary font-bold text-lg">J</span>
                                </div>
                                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-secondary transition-colors">Javeria</h4>
                                <p className="text-sm text-gray-400">Co-Founder & Operations</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Image/Visual with Floating Effect */}
                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Floating Container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 relative group shadow-2xl shadow-primary/5">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                                {/* Content inside the card */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 mb-6 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3 tracking-tight">The Zyfiro Standard</h3>
                                    <p className="text-gray-400 font-light">Excellence is not an act, but a habit.</p>
                                </div>

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)"
                                    }}
                                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </motion.div>

                        {/* Back Glow */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 opacity-40 animate-pulse-slow" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
