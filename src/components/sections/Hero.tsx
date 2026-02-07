import { motion } from 'framer-motion';
import { Code2, Rocket } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
                <div className="absolute inset-0 paper-texture" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block py-2 px-6 rounded-full skeuo-card text-violet-300 text-sm font-medium mb-6 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                    >
                        Building the Future of Tech
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                        We Build Digital <br />
                        <span className="relative">
                            <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-violet-400 to-cyan-400 opacity-40 animate-pulse-slow"></span>
                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-cyan-300 to-purple-300 bg-300% animate-gradient drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                                Masterpieces
                            </span>
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Zyfiro is a next-gen tech agency crafting scalable Websites, Desktop Apps, and Custom Android Solutions.
                        We engineer premium digital experiences that drive growth, efficiency, and long-term success.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            className="group px-8 py-4 skeuo-btn-primary text-white rounded-full font-bold text-lg flex items-center gap-2"
                        >
                            <span className="flex items-center gap-2">Media Inquiry <Rocket size={20} className="group-hover:rotate-12 transition-transform" /></span>
                        </motion.a>

                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            className="group px-8 py-4 skeuo-btn-default text-white rounded-full font-bold text-lg flex items-center gap-2"
                        >
                            View Our Work <Code2 size={20} className="group-hover:text-secondary transition-colors" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
