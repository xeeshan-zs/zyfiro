import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
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
                    <motion.div
                        className={styles.pill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        Building the Future of Tech
                    </motion.div>

                    <h1 className={styles.heading}>
                        We build <br />
                        <span className={styles.gradientText}>high-performance</span> <br />
                        digital products.
                    </h1>

                    <p className={styles.description}>
                        Zyfiro is a next-gen tech agency crafting scalable Software, AI Solutions, and Premium Websites.
                        We engineer digital experiences that drive growth.
                    </p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <a href="#contact" className={styles.primaryBtn}>
                            Start Project <ArrowRight size={20} />
                        </a>
                        <a href="#work" className={styles.secondaryBtn}>
                            View Work <Code2 size={20} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Visual - Glowing Cube */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                >
                    <div className={styles.cubeContainer}>
                        <div className={styles.core} />
                        <div className={styles.cube}>
                            <div className={`${styles.face} ${styles.faceFront}`} />
                            <div className={`${styles.face} ${styles.faceBack}`} />
                            <div className={`${styles.face} ${styles.faceRight}`} />
                            <div className={`${styles.face} ${styles.faceLeft}`} />
                            <div className={`${styles.face} ${styles.faceTop}`} />
                            <div className={`${styles.face} ${styles.faceBottom}`} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
