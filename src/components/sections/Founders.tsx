import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Zap, Star, HandshakeIcon } from 'lucide-react';
import styles from './Founders.module.css';

const values = [
    {
        icon: <Zap size={20} />,
        color: 'emerald',
        title: 'Rapid Delivery',
        desc: 'From concept to launch in weeks — without cutting corners.',
    },
    {
        icon: <Star size={20} />,
        color: 'violet',
        title: 'Zero-Compromise Quality',
        desc: 'Enterprise-grade code standards on every project, every time.',
    },
    {
        icon: <HandshakeIcon size={20} />,
        color: 'cyan',
        title: 'Transparent Process',
        desc: 'Clear communication and honest timelines at every step.',
    },
];

export function Founders() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const yPanel = useTransform(scrollYProgress, [0, 1], [0, 40]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    return (
        <section ref={containerRef} id="vision" className={styles.section}>
            <div
                style={{ position: 'absolute', right: 0, top: '25%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(124,92,255,0.04), transparent 70%)', pointerEvents: 'none' }}
            />

            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Left: Text */}
                    <motion.div
                        style={{ y: yText }}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
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
                            Our journey isn't just about building software — it's about building a legacy.
                        </motion.p>

                        <motion.p variants={itemVariants} className={styles.bodyText}>
                            We started Zyfiro with a singular mission: provide world-class digital solutions while
                            laying the foundation for the next Big Tech giant. Every line of code is a step
                            towards that future, Inshallah.
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

                    {/* Right: Values Panel */}
                    <motion.div
                        style={{ y: yPanel }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={styles.valuesPanel}
                    >
                        <div className={styles.valuesPanelHeader}>
                            <span className={styles.valuesPanelTitle}>The Zyfiro Standard</span>
                            <span className={styles.valuesPanelSub}>Excellence is not an act, but a habit.</span>
                        </div>

                        <div className={styles.valuesList}>
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.valueItem}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35 + i * 0.12 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className={`${styles.valueIcon} ${styles[v.color as keyof typeof styles]}`}>
                                        {v.icon}
                                    </div>
                                    <div className={styles.valueText}>
                                        <div className={styles.valueTitle}>{v.title}</div>
                                        <div className={styles.valueDesc}>{v.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className={styles.valuePanelGlow} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
