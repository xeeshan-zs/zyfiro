import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logoFull from '../../assets/logo-full.png';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Vision', href: '#vision', section: 'vision' },
    { name: 'Work', href: '#work', section: 'work' },
    { name: 'Contact', href: '#contact', section: 'contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('');
    const location = useLocation();
    const isHome = location.pathname === '/';

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section with IntersectionObserver
    React.useEffect(() => {
        if (!isHome) return;
        const sectionIds = NAV_LINKS.map(l => l.section);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [isHome]);

    const getHref = (href: string) => isHome ? href : `/${href}`;

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
            <div className={styles.container}>
                <a href="/" className={styles.logoLink}>
                    <img src={logoFull} alt="Zyfiro" className={styles.logoImage} />
                </a>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={getHref(link.href)}
                            className={`${styles.navLink} ${activeSection === link.section ? styles.navLinkActive : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={getHref("#contact")} className={styles.ctaButton}>
                        Start Project
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={styles.mobileMenuContainer}
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={getHref(link.href)}
                                className={`${styles.mobileNavLink} ${activeSection === link.section ? styles.mobileNavLinkActive : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className={styles.mobileCtaButton}>
                            <a
                                href={getHref("#contact")}
                                className={styles.ctaButton}
                                onClick={() => setIsOpen(false)}
                            >
                                Start Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
