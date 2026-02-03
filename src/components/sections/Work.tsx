import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FadeIn } from '../ui/fade-in';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
    {
        title: 'E-Commerce Ultra',
        description: 'Next.js 14 + Stripe full-stack powerhouse.',
        tags: ['Next.js', 'Stripe', 'Tailwind'],
    },
    {
        title: 'HealthSync App',
        description: 'Flutter-based telemedicine platform for iOS & Android.',
        tags: ['Flutter', 'Firebase', 'WebRTC'],
    },
    {
        title: 'FinTech Dashboard',
        description: 'Real-time financial analytics with D3.js.',
        tags: ['React', 'D3.js', 'Node.js'],
    }
];

export function Work() {
    return (
        <section id="work" className="py-32 bg-dark/50 relativ overflow-hidden">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Selected <span className="text-secondary">Work</span>.
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            A glimpse into the digital products we've engineered.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-gray-400 mb-6">{project.description}</p>
                                    <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/10 hover:text-white">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Button>
                                        <Button size="sm" className="rounded-full bg-secondary hover:bg-secondary/90 text-white border-none">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
