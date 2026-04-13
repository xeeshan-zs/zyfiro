import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, MessageCircle, ArrowRight, Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            {/* CTA Banner */}
            <div className={styles.ctaBanner}>
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaContent}>
                        <div className={styles.ctaBadge}>● Available for New Projects</div>
                        <h2 className={styles.ctaHeading}>
                            Ready to build your <br className={styles.ctaBr} />
                            <span className={styles.ctaAccent}>next digital product?</span>
                        </h2>
                        <p className={styles.ctaSubtext}>
                            Let's turn your idea into a high-performance reality. Fast, secure, and built to last.
                        </p>
                        <div className={styles.ctaActions}>
                            <a href="#contact" className={styles.ctaBtn}>
                                Start a Project <ArrowRight size={16} />
                            </a>
                            <a
                                href="https://wa.me/923109233844"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaBtnSecondary}
                            >
                                <MessageCircle size={16} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer body */}
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <a href="/" className={styles.brandName}>ZYFIRO</a>
                        <p className={styles.brandTagline}>
                            Building scalable Websites, Desktop Software, and Android Apps — from Pakistan, for the world.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/company/zyfiro" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={15} />
                            </a>
                            <a href="https://github.com/zyfiro-dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                                <Github size={15} />
                            </a>
                            <a href="https://instagram.com/zyfiro.dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={15} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61574251996966" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                <Facebook size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Company links */}
                    <div className={styles.navColumn}>
                        <div className={styles.navHeading}>Company</div>
                        <ul className={styles.navList}>
                            <li><a href="/#vision" className={styles.navLink}>About Us</a></li>
                            <li><a href="/#services" className={styles.navLink}>Services</a></li>
                            <li><a href="/#work" className={styles.navLink}>Our Work</a></li>
                            <li><a href="/#contact" className={styles.navLink}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div className={styles.navColumn}>
                        <div className={styles.navHeading}>Legal</div>
                        <ul className={styles.navList}>
                            <li><Link to="/privacy-policy" className={styles.navLink}>Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className={styles.navLink}>Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Zyfiro Inc. All rights reserved.
                    </p>
                    <p className={styles.madeWith}>
                        Built with <span>♥</span> in Pakistan
                    </p>
                </div>
            </div>
        </footer>
    );
}
