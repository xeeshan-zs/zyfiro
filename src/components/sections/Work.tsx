
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FadeIn } from '../ui/fade-in';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const projects = [
    {
        title: 'ICCS Globalized',
        description: 'The official platform for the International Council of Criminology and Security (ICCS). We engineered this global hub to connect criminologists, legal experts, and security professionals worldwide. As our inaugural paid project built with React, Vite, and Firebase, it facilitates international cooperation, evidence-based policy research, and seamless member collaboration.',
        tags: ['React', 'Vite', 'Firebase', 'Tailwind'],
        link: 'https://iccsglobalized.com'
    }
];

export function Work() {
    return (
        <section id="work" className="py-32 bg-dark/50 relative overflow-hidden">
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

                <div className="flex justify-center gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="w-full max-w-md">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                                <Card variant="skeuomorphic" className="h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:bg-[#0B1121] hover:border-[#f59e0b]/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden">
                                    {/* ICCS Grid Pattern Overlay on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                                    <CardHeader className="relative z-10">
                                        <div className="mb-2">
                                            <CardTitle className="text-2xl font-bold text-white group-hover:font-serif group-hover:text-3xl transition-all duration-300">
                                                <span className="group-hover:hidden">{project.title}</span>
                                                <span className="hidden group-hover:block leading-tight">
                                                    International Council of <br />
                                                    <span className="text-[#f59e0b]">Criminology and Security</span>
                                                </span>
                                            </CardTitle>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4 group-hover:opacity-0 transition-opacity duration-200">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-mono px-2 py-1 rounded-full skeuo-card text-primary">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between relative z-10">
                                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{project.description}</p>
                                        <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <Button
                                                className="skeuo-btn-iccs rounded-full px-6"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" /> Visit Site
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
