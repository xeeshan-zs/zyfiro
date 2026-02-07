import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';
import { buttonVariants } from '../ui/button';

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
            className={cn(
                'fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl',
                scrolled ? 'skeuo-floating py-3 px-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 group">
                    {/* Logo Image */}
                    <img src={logo} alt="Zyfiro Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                    <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 drop-shadow-md">
                        ZYFIRO
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={getHref(link.href)}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={getHref("#contact")} className={cn(buttonVariants({ variant: "default" }), "hover:scale-105 transition-transform")}>
                        Start Project
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-lg border-b border-white/10 p-6"
                >
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={getHref(link.href)}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={getHref("#contact")}
                            className={cn(buttonVariants({ variant: "default" }), "w-full")}
                            onClick={() => setIsOpen(false)}
                        >
                            Start Project
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
