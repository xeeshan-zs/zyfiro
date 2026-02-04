import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FadeIn } from '../components/ui/fade-in';

import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy for Zyfiro. Learn how we collect, use, and protect your personal data." />
            </Helmet>
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        Privacy <span className="text-primary">Policy</span>.
                    </h1>
                    <p className="text-gray-400 mb-12">Last Updated: February 2026</p>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <h3 className="text-2xl font-bold text-white mb-4">1. Introduction</h3>
                        <p className="text-gray-400 mb-8">
                            Welcome to Zyfiro ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from)
                            and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h3>
                        <p className="text-gray-400 mb-8">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            <br /><br />
                            - <strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.<br />
                            - <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.<br />
                            - <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h3>
                        <p className="text-gray-400 mb-8">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            <br /><br />
                            - Where we need to perform the contract we are about to enter into or have entered into with you.<br />
                            - Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.<br />
                            - Where we need to comply with a legal or regulatory obligation.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">4. Data Security</h3>
                        <p className="text-gray-400 mb-8">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </div>
                </FadeIn>
            </div>
            <Footer />
        </div>
    );
}
