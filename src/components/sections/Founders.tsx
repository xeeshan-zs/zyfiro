import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import styles from './Founders.module.css';

export function Founders() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects (preserved from original)
    const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
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
        <section ref={containerRef} id="vision" className={styles.section}>
            {/* Decorative glows */}
            <motion.div
                style={{ opacity }}
                className="absolute right-0 top-1/4 w-1/2 h-1/2 pointer-events-none"
                style={{ opacity, position: 'absolute', right: 0, top: '25%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(124,92,255,0.05), transparent 70%)', pointerEvents: 'none' }}
            />

            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Left: Text */}
                    <motion.div
                        style={{ y: yText }}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={styles.textContent}
                    >
                        <motion.div variants={itemVariants} className={styles.sectionTag}>
                            <span>●</span> Our Story
                        </motion.div>

                        <motion.h2 variants={itemVariants} className={styles.heading}>
                            Driven by <span className={styles.gradientViolet}>Vision</span>,<br />
                            Powered by <span className={styles.gradientCyan}>Faith</span>.
                        </motion.h2>

                        <motion.p variants={itemVariants} className={styles.leadText}>
                            We are <strong>Zeeshan Sarfraz</strong> and <strong>Javeria Javaid</strong>, the founders of Zyfiro.
                            Our journey isn't just about building software; it's about building a legacy.
                        </motion.p>

                        <motion.p variants={itemVariants} className={styles.bodyText}>
                            We started Zyfiro with a singular mission: to provide world-class digital solutions while
                            laying the foundation for the next Big Tech giant. Every line of code we write is a
                            step towards that future, Inshallah.
                        </motion.p>

                        <motion.div variants={itemVariants} className={styles.founderCards}>
                            <motion.div whileHover={{ y: -4 }} className={styles.founderCard}>
                                <div className={styles.founderAvatar}>Z</div>
                                <div className={styles.founderName}>Zeeshan</div>
                                <div className={styles.founderRole}>Co-Founder & Tech Lead</div>
                            </motion.div>
                            <motion.div whileHover={{ y: -4 }} className={styles.founderCard}>
                                <div className={`${styles.founderAvatar} ${styles.secondary}`}>J</div>
                                <div className={styles.founderName}>Javeria</div>
                                <div className={styles.founderRole}>Co-Founder & Operations</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={styles.visualPanel}
                    >
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className={styles.visualCard}>
                                <div className={styles.visualGradient} />
                                <div className={styles.visualContent}>
                                    <div className={styles.visualIcon}>
                                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.visualTitle}>The Zyfiro Standard</h3>
                                    <p className={styles.visualSubtitle}>Excellence is not an act, but a habit.</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className={styles.visualGlow} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
