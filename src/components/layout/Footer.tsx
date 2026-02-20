import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <a href="/" className={styles.brandName}>ZYFIRO</a>
                        <p className={styles.brandTagline}>
                            Building the future with scalable Websites, Desktop Software, and Android Apps.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                <Github size={16} />
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
