import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import SmoothScroll from './components/layout/SmoothScroll';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Helmet } from 'react-helmet-async';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zyfiro',
    url: 'https://zyfiro.vercel.app',
    logo: 'https://zyfiro.vercel.app/favicon.png',
    email: 'zyfiro@gmail.com',
    description: 'Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions.',
    founders: [
        {
            '@type': 'Person',
            name: 'Zeeshan Sarfraz',
            jobTitle: 'Co-Founder & Tech Lead',
        },
        {
            '@type': 'Person',
            name: 'Javeria Javaid',
            jobTitle: 'Co-Founder & Operations',
        },
    ],
    knowsAbout: [
        'Web Development',
        'Software Engineering',
        'Artificial Intelligence Solutions',
        'UI/UX Design',
        'Mobile Application Engineering',
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zyfiro',
    url: 'https://zyfiro.vercel.app',
    publisher: {
        '@type': 'Organization',
        name: 'Zyfiro',
    },
};

function App() {
    return (
        <Router>
            <Helmet titleTemplate="%s" defaultTitle="Zyfiro - Web Design, Software & AI Solutions">
                <meta
                    name="description"
                    content="Zyfiro delivers world-class digital solutions, helping you build your legacy with cutting-edge web development, software engineering, and AI systems."
                />
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(websiteSchema)}
                </script>
            </Helmet>
            <ScrollToTop />
            <SmoothScroll />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
        </Router>
    );
}

export default App;
