import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import logo from '../../assets/logo.png';

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

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

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <img src={logo} alt="Zyfiro Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                    <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        ZYFIRO
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105">
                        Start Project
                    </button>
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
                                href={link.href}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold">
                            Start Project
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
