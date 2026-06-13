import { Globe, Smartphone, Cloud, Zap, Layout, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { FadeIn } from '../ui/fade-in';
import styles from './Services.module.css';

const services = [
    {
        icon: <Globe size={22} />,
        color: 'violet',
        title: 'Web Development',
        description: 'High-performance web apps built for scalability, SEO, and lightning-fast load times.',
    },
    {
        icon: <Smartphone size={22} />,
        color: 'blue',
        title: 'Android Apps',
        description: 'Custom, high-performance native Android apps built to your exact specifications.',
    },
    {
        icon: <Layout size={22} />,
        color: 'cyan',
        title: 'Desktop Software',
        description: 'Powerful cross-platform desktop applications built with Flutter for every OS.',
    },
    {
        icon: <Cloud size={22} />,
        color: 'orange',
        title: 'Firebase Backend',
        description: 'Real-time, secure serverless backends powering your apps from day one.',
    },
    {
        icon: <Zap size={22} />,
        color: 'emerald',
        title: 'Rapid MVP',
        description: 'Launch your startup idea in weeks, not months, with our agile delivery process.',
    },

];

export function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeIn>
                        <div className={styles.sectionTag}>
                            <span>●</span> What We Do
                        </div>
                        <h2 className={styles.heading}>Our Expertise</h2>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <p className={styles.subheading}>
                            We don't just write code — we engineer complete digital ecosystems using the latest technologies.
                        </p>
                    </FadeIn>
                </div>

                <div className={styles.carouselWrapper}>
                    <button className={styles.scrollBtn} onClick={() => scroll('left')} aria-label="Scroll left">
                        <ChevronLeft size={20} />
                    </button>
                    
                    <div className={styles.carousel} ref={scrollRef}>
                        {services.map((service, index) => (
                            <div key={index} className={`${styles.card} ${index === 0 ? styles.cardInverted : ''}`}>
                                <span className={styles.cardNumber}>0{index + 1}</span>
                                <div className={`${styles.iconWrap} ${styles[service.color as keyof typeof styles]}`}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <button className={styles.exploreMore}>
                                    Explore service <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button className={styles.scrollBtn} onClick={() => scroll('right')} aria-label="Scroll right">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
