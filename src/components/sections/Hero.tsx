import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, MapPin } from 'lucide-react';
import logo from '../../assets/logo.svg';
import styles from './Hero.module.css';

const codeLines = [
    { tokens: [{ type: 'keyword', text: 'const' }, { type: 'var', text: ' project' }, { type: 'op', text: ' = {' }] },
    { tokens: [{ type: 'indent', text: '  ' }, { type: 'key', text: 'stack' }, { type: 'op', text: ': ' }, { type: 'str', text: "'React + Firebase'" }, { type: 'op', text: ',' }] },
    { tokens: [{ type: 'indent', text: '  ' }, { type: 'key', text: 'quality' }, { type: 'op', text: ': ' }, { type: 'str', text: "'enterprise-grade'" }, { type: 'op', text: ',' }] },
    { tokens: [{ type: 'indent', text: '  ' }, { type: 'key', text: 'delivery' }, { type: 'op', text: ': ' }, { type: 'str', text: "'always on-time'" }, { type: 'op', text: ',' }] },
    { tokens: [{ type: 'indent', text: '  ' }, { type: 'key', text: 'clients' }, { type: 'op', text: ': ' }, { type: 'num', text: "'happy ∞'" }, { type: 'op', text: ',' }] },
    { tokens: [{ type: 'op', text: '}' }] },
];

const stats = [
    { number: '15+', label: 'Projects Shipped' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Response Time' },
];

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
                <div className={styles.glowSecondary} />
                <div className={styles.gridPattern} />
            </div>

            <div className={styles.container}>
                {/* Left Content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Logo brand mark */}
                    <motion.div
                        className={styles.heroBrandRow}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.5 }}
                    >
                        <img src={logo} alt="Zyfiro" className={styles.heroBrandLogo} />
                    </motion.div>

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

                {/* Right Visual — Code Dashboard Panel */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                >
                    {/* Floating badges */}
                    <motion.div
                        className={`${styles.floatingBadge} ${styles.badge1}`}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className={styles.badgeDot} style={{ background: '#22c55e' }} />
                        Live — iccsglobalized.com
                    </motion.div>

                    <motion.div
                        className={`${styles.floatingBadge} ${styles.badge2}`}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <span className={styles.badgeDot} style={{ background: '#7c5cff' }} />
                        React · Firebase · Flutter
                    </motion.div>

                    {/* Dashboard panel */}
                    <div className={styles.dashboardPanel}>
                        {/* Window chrome */}
                        <div className={styles.windowChrome}>
                            <div className={styles.chromeDots}>
                                <span className={styles.dotRed} />
                                <span className={styles.dotYellow} />
                                <span className={styles.dotGreen} />
                            </div>
                            <span className={styles.chromeTitle}>zyfiro.build.ts</span>
                        </div>

                        {/* Code block */}
                        <div className={styles.codeBody}>
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.codeLine}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                                >
                                    <span className={styles.lineNum}>{i + 1}</span>
                                    {line.tokens.map((token, j) => (
                                        <span key={j} className={styles[`code_${token.type}`]}>{token.text}</span>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats bar */}
                        <div className={styles.statsBar}>
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.statItem}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + i * 0.1 }}
                                >
                                    <span className={styles.statNumber}>{s.number}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
