import { FadeIn } from '../ui/fade-in';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { ProjectWizard } from '../features/ProjectWizard';
import styles from './Contact.module.css';

export function Contact() {
    return (
        <section id="contact" className={styles.section}>
            {/* Background accents */}
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
                                We engineer robust digital solutions across Web, Desktop, and Android platforms. Partner with us for world-class development, backed by transparent pricing tailored for the local market.
                            </p>

                            <div className={styles.contactItems}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIcon}>
                                        <Mail size={20} />
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
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>HQ</div>
                                        <div className={styles.contactValue}>Mars 🪐</div>
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
                                    <MessageCircle size={20} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: ProjectWizard (preserved) */}
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
