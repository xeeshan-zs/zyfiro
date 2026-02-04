import { Globe, Smartphone, Cloud, Zap, Layout, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { FadeIn } from '../ui/fade-in';

const services = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: 'Web Development',
        description: 'High-performance applications tailored for scalability and SEO.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-secondary" />,
        title: 'Android Apps',
        description: 'Custom, high-performance Android applications built to your exact specifications.',
    },
    {
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        title: 'Desktop Software',
        description: 'Powerful cross-platform desktop applications built with Flutter.',
    },
    {
        icon: <Cloud className="w-8 h-8 text-purple-500" />,
        title: 'Firebase Backend',
        description: 'Secure, real-time serverless backends to power your applications instantly.',
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: 'Rapid MVP',
        description: 'Launch your startup idea in weeks, not months, with our agile process.',
    },
    {
        icon: <Shield className="w-8 h-8 text-green-400" />,
        title: 'Enterprise Security',
        description: 'Bank-grade security standards built into every line of code.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 bg-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Our Expertise
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We don't just write code; we engineer digital ecosystems using the latest technologies.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                                <CardHeader>
                                    <div className="mb-4 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
