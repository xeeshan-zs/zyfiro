import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code, Smartphone, Globe, PenTool } from 'lucide-react';
import mockup1 from '../../assets/mockup-1.png';
import mockup2 from '../../assets/mockup-2.png';

// Floating Card Component
const FloatingCard = ({ icon: Icon, title, delay, className }: any) => (
    <motion.div
        className={`absolute hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 z-30 ${className}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.6, type: "spring" }}
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <div className="bg-[#00AEEF]/10 text-[#00AEEF] p-2 rounded-full">
            <Icon size={18} strokeWidth={2.5} />
        </div>
        <span className="font-medium text-slate-800 text-sm tracking-tight">{title}</span>
    </motion.div>
);

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#FDFCFB]">
            {/* Premium Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Radial Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00AEEF] opacity-[0.06] blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-[#262262] opacity-[0.05] blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                    
                    {/* Left Content (45%) */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start text-left mt-10 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEEF]/5 border border-[#00AEEF]/10 text-[#262262] font-semibold text-sm mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse"></span>
                            Premium Software Agency
                        </motion.div>

                        <motion.h1 
                            className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        >
                            Web Design,<br />
                            Mobile Apps,<br />
                            AI Automation <span className="text-slate-400">&</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#262262] drop-shadow-sm">
                                Custom Software
                            </span>
                        </motion.h1>

                        <motion.p 
                            className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            As a premier digital engineering partner, we architect scalable custom software, high-converting web applications, and intelligent AI automations to accelerate your growth.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        >
                            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0C0B0A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#262262] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                                Start Your Project <ArrowRight size={18} />
                            </a>
                            <a href="#work" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-slate-800 hover:bg-slate-50 transition-colors duration-300 shadow-sm">
                                View Our Work
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visuals (55%) */}
                    <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end mt-4 lg:mt-0 perspective-1000">
                        <motion.div 
                            className="relative w-full max-w-[700px] aspect-square flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            {/* Glow behind devices */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00AEEF]/15 to-[#262262]/15 blur-3xl rounded-full scale-75 z-0" style={{ animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

                            {/* Device Mockups */}
                            <motion.img 
                                src={mockup1} 
                                alt="Web Application Design" 
                                className="absolute w-[80%] lg:w-[75%] left-0 lg:-left-[5%] z-10 shadow-2xl rounded-2xl object-cover transform origin-bottom-right"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            
                            <motion.img 
                                src={mockup2} 
                                alt="Mobile Application Design" 
                                className="absolute w-[45%] lg:w-[40%] right-[5%] bottom-[10%] z-20 shadow-2xl rounded-[2rem] object-cover"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />

                            {/* Floating Cards (Desktop Only) */}
                            <FloatingCard 
                                icon={Bot} 
                                title="AI Automation" 
                                delay={0.8} 
                                className="top-[15%] right-[0%]"
                            />
                            <FloatingCard 
                                icon={Globe} 
                                title="Web Applications" 
                                delay={1.0} 
                                className="bottom-[35%] -left-[10%]"
                            />
                            <FloatingCard 
                                icon={Smartphone} 
                                title="Mobile Apps" 
                                delay={1.2} 
                                className="top-[45%] -right-[5%]"
                            />
                            <FloatingCard 
                                icon={Code} 
                                title="Custom Software" 
                                delay={1.4} 
                                className="bottom-[15%] right-[25%]"
                            />
                            <FloatingCard 
                                icon={PenTool} 
                                title="UI/UX Design" 
                                delay={1.6} 
                                className="top-[25%] left-[5%]"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
