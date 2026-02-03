import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Work } from '../components/sections/Work';
import { Founders } from '../components/sections/Founders';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
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
