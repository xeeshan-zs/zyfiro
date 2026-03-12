import { FadeIn } from '../ui/fade-in';
import { Mail, MapPin, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { ProjectWizard } from '../features/ProjectWizard';
import styles from './Contact.module.css';

const trustPoints = [
    { icon: <CheckCircle size={14} />, text: '24-hour response guarantee' },
    { icon: <CheckCircle size={14} />, text: 'Transparent, fixed pricing' },
    { icon: <CheckCircle size={14} />, text: 'Free initial consultation' },
];

export function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.accentBgTop} />
            <div className={styles.accentBgBottom} />

            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Left: Info */}
                    <FadeIn direction="right">
                        <div className={styles.infoColumn}>
                            <div className={styles.sectionTag}><span>●</span> Contact</div>

                            <h2 className={styles.heading}>
                                Let's Build Your{' '}
                                <span className={styles.headingAccent}>Dream App</span>.
                            </h2>

                            <p className={styles.description}>
                                We engineer robust digital solutions across Web, Desktop, and Android platforms.
                                Partner with us for world-class development at transparent, local-market pricing.
                            </p>

                            {/* Trust points */}
                            <ul className={styles.trustList}>
                                {trustPoints.map((p, i) => (
                                    <li key={i} className={styles.trustItem}>
                                        <span className={styles.trustIcon}>{p.icon}</span>
                                        {p.text}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.contactItems}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Email Us</div>
                                        <div className={styles.contactValue}>
                                            zeeshan.sarfraz@atrons.net<br />
                                            meetjaveriajavaid@gmail.com
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={`${styles.contactIcon} ${styles.secondary}`}>
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Response Time</div>
                                        <div className={styles.contactValue}>Within 24 hours — always</div>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={`${styles.contactIcon} ${styles.tertiary}`}>
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>HQ</div>
                                        <div className={styles.contactValue}>Mars 🪐 (Pakistan, Earth)</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.ctaGroup}>
                                <a
                                    href="https://wa.me/923109233844"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappBtn}
                                >
                                    <MessageCircle size={18} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: ProjectWizard */}
                    <FadeIn delay={0.2} direction="left">
                        <div className={styles.formColumn}>
                            <div className={styles.wizardWrapper}>
                                <ProjectWizard />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
