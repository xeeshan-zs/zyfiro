import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Work } from '../components/sections/Work';
import { Founders } from '../components/sections/Founders';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';

import { Helmet } from 'react-helmet-async';

export function Home() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
            <Helmet>
                <title>Zyfiro - Web Design, Software & AI Solutions</title>
                <meta name="description" content="Zyfiro is a premium digital agency specializing in custom web development, software engineering, and AI solutions. We build legacies." />
                <meta name="keywords" content="web development, software agency, AI solutions, digital design, Zyfiro, Pakistan tech" />
            </Helmet>
            <Navbar />
            <Hero />
            <Services />
            <Work />
            <Founders />
            <Contact />
            <Footer />
        </div>
    );
}
