import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { FadeIn } from '../ui/fade-in';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <section id="contact" className="py-32 bg-dark relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <FadeIn direction="right">
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                                Let’s Start a <br />
                                <span className="text-primary">Conversation</span>.
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                                Whether you have a groundbreaking idea or need to scale your existing platform, we are ready to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-secondary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-400">zeeshan.sarfraz@atrons.net</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-purple-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">HQ</h4>
                                        <p className="text-gray-400">Mars</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <FadeIn direction="left" delay={0.2}>
                            <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-300 ml-1">Name</Label>
                                        <Input id="name" placeholder="John Doe" className="bg-dark/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 rounded-2xl h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-300 ml-1">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="bg-dark/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 rounded-2xl h-12" />
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <Label htmlFor="subject" className="text-gray-300 ml-1">Subject</Label>
                                    <Input id="subject" placeholder="Project Inquiry" className="bg-dark/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 rounded-2xl h-12" />
                                </div>

                                <div className="space-y-2 mb-8">
                                    <Label htmlFor="message" className="text-gray-300 ml-1">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] bg-dark/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 rounded-2xl resize-none p-4" />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-lg py-6 rounded-xl transition-all hover:scale-[1.02]">
                                    Send Message <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
