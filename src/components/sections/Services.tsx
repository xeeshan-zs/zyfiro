import { Globe, Smartphone, Cloud, Zap, Layout, Shield } from 'lucide-react';
import { FadeIn } from '../ui/fade-in';
import styles from '../ui/Card.module.css';

const services = [
    {
        icon: <Globe className={styles.icon} size={24} />,
        title: 'Web Development',
        description: 'High-performance applications tailored for scalability and SEO.',
    },
    {
        icon: <Smartphone className={styles.icon} size={24} />,
        title: 'Android Apps',
        description: 'Custom, high-performance Android applications built to your exact specifications.',
    },
    {
        icon: <Layout className={styles.icon} size={24} />,
        title: 'Desktop Software',
        description: 'Powerful cross-platform desktop applications built with Flutter.',
    },
    {
        icon: <Cloud className={styles.icon} size={24} />,
        title: 'Firebase Backend',
        description: 'Secure, real-time serverless backends to power your applications instantly.',
    },
    {
        icon: <Zap className={styles.icon} size={24} />,
        title: 'Rapid MVP',
        description: 'Launch your startup idea in weeks, not months, with our agile process.',
    },
    {
        icon: <Shield className={styles.icon} size={24} />,
        title: 'Enterprise Security',
        description: 'Bank-grade security standards built into every line of code.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 bg-dark relative" style={{ background: 'var(--bg-primary)', padding: 'var(--space-3xl) 0' }}>
            <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Our Expertise
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                            We don't just write code; we engineer digital ecosystems using the latest technologies.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.cardContent}>
                                    <div>{service.icon}</div>
                                    <h3 className={styles.title}>{service.title}</h3>
                                    <p className={styles.description}>{service.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
