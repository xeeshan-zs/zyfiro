import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, MapPin } from 'lucide-react';
import heroVideo from '../../assets/hero_section.mp4';
import styles from './Hero.module.css';

const stats = [
    { number: '15+', label: 'Projects Shipped' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Response Time' },
];

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Page-level background decoratives */}
            <div className={styles.background}>
                <div className={styles.glow} />
                <div className={styles.glowSecondary} />
                <div className={styles.gridPattern} />
            </div>

            <div className={styles.container}>

                {/* ============================================
                    HERO CONTENT — Split Layout Wrapper
                    ============================================ */}
                <div className={styles.heroContent}>
                    {/* ============================================
                        COPY BLOCK — Authoritative corporate headline
                        ============================================ */}
                    <motion.div
                        className={styles.copyBlock}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                    >

                        <motion.h1
                            className={styles.heading}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            Small team.{' '}<br />
                            <span className={styles.gradientText}>Serious work.</span>
                        </motion.h1>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                        >
                            We build apps and websites that hold up — for people who care about quality.
                            Web, Android, Desktop. Made to last.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <a href="#contact" className={styles.primaryBtn}>
                                Start Your Project <ArrowRight size={18} />
                            </a>
                            <a href="#work" className={styles.secondaryBtn}>
                                See Our Work
                            </a>
                        </motion.div>

                        <motion.div
                            className={styles.trustChips}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <span className={styles.trustChip}><CheckCircle size={13} /> ICCS Globalized — live since 2024</span>
                            <span className={styles.trustChip}><Zap size={13} /> Reply within 24 hours</span>
                            <span className={styles.trustChip}><MapPin size={13} /> Based in Pakistan</span>
                        </motion.div>
                    </motion.div>

                    {/* ============================================
                        VIDEO SHOWCASE FRAME
                        Framed enterprise component — right side
                        ============================================ */}
                    <motion.div
                        className={styles.videoFrame}
                        initial={{ opacity: 0, y: 32, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.45, duration: 0.85, ease: 'easeOut' }}
                    >
                        <video
                            className={styles.heroVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    </motion.div>
                </div>

                {/* ============================================
                    STATS STRIP
                    Interlocking horizontal band — first block black
                    ============================================ */}
                <div className={styles.statsStrip}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.statBlock} ${i === 0 ? styles.statBlockDark : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                        >
                            <span className={styles.statNumber}>{s.number}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
