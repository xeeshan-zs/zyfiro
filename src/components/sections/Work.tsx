import { FadeIn } from '../ui/fade-in';
import { ExternalLink, Rocket } from 'lucide-react';
import styles from './Work.module.css';

const projects = [
    {
        title: 'ICCS Globalized',
        bannerLabel: 'ICCS',
        description: 'The official platform for the International Council of Criminology and Security. We engineered this global hub to connect criminologists, legal experts, and security professionals worldwide — facilitating international cooperation, evidence-based policy research, and seamless member collaboration.',
        tags: ['React', 'Vite', 'Firebase', 'Tailwind'],
        link: 'https://iccsglobalized.com',
        status: 'live'
    }
];

export function Work() {
    return (
        <section id="work" className={styles.section}>
            <div className={styles.container}>
                <FadeIn>
                    <div className={styles.header}>
                        <div className={styles.sectionTag}>
                            <span>●</span> Portfolio
                        </div>
                        <h2 className={styles.heading}>
                            Selected <span className={styles.headingAccent}>Work</span>.
                        </h2>
                        <p className={styles.subheading}>
                            A glimpse into the digital products we've engineered.
                        </p>
                    </div>
                </FadeIn>

                <div className={styles.grid}>
                    {/* Live project */}
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectCard}
                            >
                                <div className={styles.cardBanner}>
                                    <span className={styles.cardBannerLabel}>{project.bannerLabel}</span>
                                    <span className={styles.liveBadge}>
                                        <span className={styles.liveDot} /> Live
                                    </span>
                                </div>

                                <div className={styles.cardBody}>
                                    <div className={styles.cardTop}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <ExternalLink size={17} className={styles.externalIcon} />
                                    </div>

                                    <div className={styles.tags}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <p className={styles.projectDescription}>{project.description}</p>

                                    <span className={styles.visitBtn}>
                                        Visit Site <ExternalLink size={13} />
                                    </span>
                                </div>
                            </a>
                        </FadeIn>
                    ))}

                    {/* Own Product — Coming Soon */}
                    <FadeIn delay={0.15}>
                        <div className={styles.comingSoonCard}>
                            <div className={styles.comingSoonInner}>
                                <div className={styles.comingSoonIcon}>
                                    <Rocket size={28} />
                                </div>
                                <span className={styles.stealthBadge}>🔒 Stealth Mode</span>
                                <h3 className={styles.comingSoonTitle}>Our Own Product</h3>
                                <p className={styles.comingSoonText}>
                                    We're building something of our own — a product crafted from the ground up by the Zyfiro team. Launch incoming.
                                </p>
                                <span className={styles.comingSoonCta} style={{ cursor: 'default' }}>
                                    Coming Soon ✦
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
