import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-dark pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-2">
                        <a href="#" className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4 inline-block">
                            ZYFIRO
                        </a>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Building the future with scalable Websites, Desktop Software, and Android Apps.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 skeuomorphic-light rounded-full hover:skeuomorphic transition-all transform hover:scale-110 text-white hover:text-primary">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 skeuomorphic-light rounded-full hover:skeuomorphic transition-all transform hover:scale-110 text-white hover:text-secondary">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 skeuomorphic-light rounded-full hover:skeuomorphic transition-all transform hover:scale-110 text-white hover:text-purple-500">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="/#vision" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="/#work" className="hover:text-primary transition-colors">Our Work</a></li>
                            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Zyfiro Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
