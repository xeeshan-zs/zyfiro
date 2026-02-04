import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import SmoothScroll from './components/layout/SmoothScroll';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

import { Helmet } from 'react-helmet-async';

function App() {
    return (
        <Router>
            <Helmet
                titleTemplate="%s | Zyfiro"
                defaultTitle="Zyfiro - Designing the Future"
            >
                <meta name="description" content="Zyfiro delivers world-class digital solutions, helping you build your legacy with cutting-edge web and software development." />
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
