import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Vision', href: '#vision' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    /* 
       Helper to get correct href:
       If home: "#services"
       If not home: "/#services"
    */
    const getHref = (href: string) => isHome ? href : `/${href}`;

    return (
        <nav
            className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
        >
            <div className={styles.container}>
                <a href="/" className={styles.logoLink}>
                    {/* Logo Image */}
                    <img src={logo} alt="Zyfiro Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>
                        ZYFIRO
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={getHref(link.href)}
                            className={styles.navLink}
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
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={styles.mobileMenuContainer}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={getHref(link.href)}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={getHref("#contact")}
                                className={styles.ctaButton}
                                style={{ width: '100%', textAlign: 'center' }}
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
