import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FadeIn } from '../components/ui/fade-in';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                        Terms of <span className="text-secondary">Service</span>.
                    </h1>
                    <p className="text-gray-400 mb-12">Last Updated: February 2026</p>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <h3 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h3>
                        <p className="text-gray-400 mb-8">
                            By accessing our website at Zyfiro.com, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                            If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h3>
                        <p className="text-gray-400 mb-8">
                            The Service and its original content, features and functionality are and will remain the exclusive property of Zyfiro Inc. and its licensors.
                            The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">3. Termination</h3>
                        <p className="text-gray-400 mb-8">
                            We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            Upon termination, your right to use the Service will immediately cease.
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h3>
                        <p className="text-gray-400 mb-8">
                            In no event shall Zyfiro Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                            including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </div>
                </FadeIn>
            </div>
            <Footer />
        </div>
    );
}
