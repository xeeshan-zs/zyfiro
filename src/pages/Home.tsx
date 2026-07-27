import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Work } from '../components/sections/Work';
import { Founders } from '../components/sections/Founders';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Zyfiro',
    image: 'https://zyfiro.vercel.app/favicon.png',
    url: 'https://zyfiro.vercel.app',
    email: 'zyfiro@gmail.com',
    priceRange: '$$',
    description: 'Zyfiro is a premium digital engineering agency delivering custom web apps, desktop software, mobile applications, and AI integrations.',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Development Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Web Design & Development',
                    description: 'Modern, high-converting websites and web applications engineered with React, Next.js, and TypeScript.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Software & Backend Engineering',
                    description: 'Scalable desktop applications, APIs, and cloud infrastructure engineered for maximum uptime and security.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'AI Solutions & Automation',
                    description: 'Custom AI agent integrations, LLM workflows, and data processing automation.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'UI/UX Design Systems',
                    description: 'Stunning glassmorphism design systems, micro-animations, and conversion-centered user experiences.',
                },
            },
        ],
    },
};

export function Home() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
            <Helmet>
                <title>Zyfiro - Web Design, Enterprise Software & AI Solutions</title>
                <meta
                    name="description"
                    content="Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions. We build legacies."
                />
                <meta
                    name="keywords"
                    content="web development, software agency, AI solutions, digital design, Zyfiro, custom software engineering, React TypeScript, AI integration"
                />
                <link rel="canonical" href="https://zyfiro.vercel.app/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zyfiro.vercel.app/" />
                <meta property="og:title" content="Zyfiro - Web Design, Enterprise Software & AI Solutions" />
                <meta
                    property="og:description"
                    content="Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions."
                />
                <meta property="og:image" content="https://zyfiro.vercel.app/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://zyfiro.vercel.app/" />
                <meta name="twitter:title" content="Zyfiro - Web Design, Enterprise Software & AI Solutions" />
                <meta
                    name="twitter:description"
                    content="Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions."
                />
                <meta name="twitter:image" content="https://zyfiro.vercel.app/og-image.jpg" />

                {/* JSON-LD ProfessionalService Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>
            <Navbar />
            <main id="main-content">
                <Hero />
                <Services />
                <Work />
                <Founders />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
