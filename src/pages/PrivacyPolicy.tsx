import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft, ArrowRight, Shield, Database, Settings, Share2,
    Lock, Cookie, UserCheck, Mail, Calendar, Clock
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import styles from './LegalPage.module.css';

const sections = [
    {
        id: 'introduction',
        num: '01',
        icon: <Shield size={18} />,
        iconClass: 'iconViolet',
        title: 'Introduction',
        content: (
            <>
                <p>
                    Welcome to Zyfiro ("we," "our," or "us"). We respect your privacy and are committed to protecting
                    your personal data. This Privacy Policy explains how we collect, use, and safeguard your information
                    when you visit our website or engage our services.
                </p>
                <p>
                    By using our website or services, you agree to the practices described in this policy.
                    If you disagree with any part of it, please discontinue use of our services.
                </p>
                <div className={styles.highlight}>
                    We believe privacy is a fundamental right. We only collect what we absolutely need, and we never sell your data.
                </div>
            </>
        ),
    },
    {
        id: 'data-collection',
        num: '02',
        icon: <Database size={18} />,
        iconClass: 'iconBlue',
        title: 'Data We Collect',
        content: (
            <>
                <p>
                    We may collect the following types of personal data when you interact with our website or project inquiry form:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Identity Data</strong> — your name and any identifiers you provide in our contact forms.</span></li>
                    <li><span><strong>Contact Data</strong> — email address and phone number, used solely to respond to your inquiries.</span></li>
                    <li><span><strong>Project Data</strong> — project details, budget range, and timeline you share through our Project Wizard.</span></li>
                    <li><span><strong>Technical Data</strong> — IP address, browser type and version, time zone, operating system, and basic device info collected automatically via standard web logs.</span></li>
                    <li><span><strong>Usage Data</strong> — pages visited, time spent, referral sources, and click patterns to help us improve the website experience.</span></li>
                </ul>
                <p>
                    We do <strong>not</strong> collect sensitive personal data such as financial account details, government IDs,
                    or health information through this website.
                </p>
            </>
        ),
    },
    {
        id: 'data-use',
        num: '03',
        icon: <Settings size={18} />,
        iconClass: 'iconCyan',
        title: 'How We Use Your Data',
        content: (
            <>
                <p>We use the personal data we collect for the following purposes:</p>
                <ul className={styles.sectionList}>
                    <li><span>To respond to your project inquiries and provide quotes or proposals.</span></li>
                    <li><span>To communicate about the scope, timeline, and progress of your project.</span></li>
                    <li><span>To improve our website content, performance, and user experience.</span></li>
                    <li><span>To comply with applicable legal obligations.</span></li>
                    <li><span>To send important service-related notifications (never unsolicited marketing).</span></li>
                </ul>
                <p>
                    We will never use your data for automated decision-making that significantly affects you,
                    or for any purpose incompatible with what is listed above.
                </p>
            </>
        ),
    },
    {
        id: 'data-sharing',
        num: '04',
        icon: <Share2 size={18} />,
        iconClass: 'iconOrange',
        title: 'Data Sharing & Third Parties',
        content: (
            <>
                <p>
                    We do <strong>not sell</strong> your personal data. We may share limited data with trusted third-party
                    service providers strictly to operate our business:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Email services</strong> — to send and receive project-related communications (e.g., Gmail / Google Workspace).</span></li>
                    <li><span><strong>Analytics providers</strong> — to understand website usage patterns anonymously.</span></li>
                    <li><span><strong>Hosting providers</strong> — to serve the website and store data securely.</span></li>
                </ul>
                <p>
                    All third-party providers are contractually required to protect your data and may only process it on our behalf.
                    We never allow them to use your data for their own purposes.
                </p>
            </>
        ),
    },
    {
        id: 'data-security',
        num: '05',
        icon: <Lock size={18} />,
        iconClass: 'iconEmerald',
        title: 'Data Security',
        content: (
            <>
                <p>
                    We take data security seriously. We have implemented appropriate technical and organizational measures to
                    protect your personal data against accidental loss, unauthorized access, alteration, or disclosure.
                </p>
                <ul className={styles.sectionList}>
                    <li><span>All data is transmitted over HTTPS (TLS encryption).</span></li>
                    <li><span>Access to personal data is strictly limited to authorized personnel who need it for service delivery.</span></li>
                    <li><span>We regularly review our security practices to maintain protection against emerging threats.</span></li>
                </ul>
                <div className={styles.highlight}>
                    While we strive for the highest security standards, no system is 100% impenetrable.
                    If you suspect a security breach, please contact us immediately at <a className={styles.emailLink} href="mailto:zeeshan.sarfraz@atrons.net">zeeshan.sarfraz@atrons.net</a>.
                </div>
            </>
        ),
    },
    {
        id: 'cookies',
        num: '06',
        icon: <Cookie size={18} />,
        iconClass: 'iconAmber',
        title: 'Cookies',
        content: (
            <>
                <p>
                    Our website may use cookies — small text files stored on your device — to improve your browsing experience.
                    We use the following types:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Strictly Necessary</strong> — required for the website to function correctly.</span></li>
                    <li><span><strong>Analytics</strong> — help us understand how visitors interact with our website (anonymized data only).</span></li>
                </ul>
                <p>
                    You can control or disable cookies through your browser settings at any time. Disabling certain cookies may
                    affect the functionality of the website.
                </p>
            </>
        ),
    },
    {
        id: 'your-rights',
        num: '07',
        icon: <UserCheck size={18} />,
        iconClass: 'iconRose',
        title: 'Your Rights',
        content: (
            <>
                <p>
                    Depending on your jurisdiction, you may have the following rights regarding your personal data:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Right to Access</strong> — request a copy of the personal data we hold about you.</span></li>
                    <li><span><strong>Right to Rectification</strong> — request correction of inaccurate or incomplete data.</span></li>
                    <li><span><strong>Right to Erasure</strong> — request deletion of your personal data where it is no longer necessary.</span></li>
                    <li><span><strong>Right to Object</strong> — object to processing based on legitimate interests.</span></li>
                    <li><span><strong>Right to Data Portability</strong> — request a portable copy of your data in a common format.</span></li>
                </ul>
                <p>
                    To exercise any of these rights, contact us at the email below. We will respond within 30 days.
                </p>
            </>
        ),
    },
    {
        id: 'contact',
        num: '08',
        icon: <Mail size={18} />,
        iconClass: 'iconSlate',
        title: 'Contact Us',
        content: (
            <>
                <p>
                    If you have any questions about this Privacy Policy, how we handle your data, or wish to exercise
                    any of your rights, please reach out to us:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Zeeshan Sarfraz</strong> — <a className={styles.emailLink} href="mailto:zeeshan.sarfraz@atrons.net">zeeshan.sarfraz@atrons.net</a></span></li>
                    <li><span><strong>Javeria Javaid</strong> — <a className={styles.emailLink} href="mailto:meetjaveriajavaid@gmail.com">meetjaveriajavaid@gmail.com</a></span></li>
                </ul>
                <p>
                    We are committed to resolving any concerns promptly and transparently.
                </p>
            </>
        ),
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' }
    }),
};

export const PrivacyPolicy = () => {
    return (
        <div className={styles.page}>
            <Helmet>
                <title>Privacy Policy — Zyfiro</title>
                <meta name="description" content="Privacy Policy for Zyfiro. Learn how we collect, use, and protect your personal data." />
            </Helmet>
            <Navbar />

            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <Link to="/" className={styles.backLink}>
                        <ArrowLeft size={14} /> Back to Home
                    </Link>
                    <div className={styles.heroBadge}>
                        <Shield size={11} /> Legal
                    </div>
                    <h1 className={styles.heroTitle}>
                        Privacy <span className={styles.heroAccent}>Policy</span>.
                    </h1>
                    <div className={styles.heroMeta}>
                        <span className={styles.metaChip}><Calendar size={13} /> Last Updated: February 2026</span>
                        <span className={styles.metaSep}>·</span>
                        <span className={styles.metaChip}><Clock size={13} /> 5 min read</span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Main content */}
                <main className={styles.content}>
                    {sections.map((s, i) => (
                        <motion.div
                            key={s.id}
                            id={s.id}
                            className={styles.section}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            <div className={styles.sectionHeader}>
                                <span className={styles.sectionNum}>{s.num}</span>
                                <div className={`${styles.sectionIcon} ${styles[s.iconClass as keyof typeof styles]}`}>
                                    {s.icon}
                                </div>
                                <div className={styles.sectionTitleWrap}>
                                    <h2 className={styles.sectionTitle}>{s.title}</h2>
                                </div>
                            </div>
                            <div className={styles.sectionBody}>{s.content}</div>
                        </motion.div>
                    ))}

                    {/* Bottom note */}
                    <div className={styles.bottomNote}>
                        <span className={styles.bottomNoteText}>
                            This policy may be updated periodically. Continued use of our services constitutes acceptance.
                        </span>
                        <Link to="/terms-of-service" className={styles.bottomNoteLink}>
                            Terms of Service <ArrowRight size={13} />
                        </Link>
                    </div>
                </main>

                {/* TOC sidebar */}
                <aside className={styles.toc}>
                    <div className={styles.tocCard}>
                        <div className={styles.tocHeader}>Contents</div>
                        <ul className={styles.tocList}>
                            {sections.map(s => (
                                <li key={s.id} className={styles.tocItem}>
                                    <a href={`#${s.id}`} className={styles.tocLink}>
                                        <span className={styles.tocNum}>{s.num}</span>
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <hr className={styles.tocDivider} />
                        <div className={styles.tocFooter}>
                            <Link to="/terms-of-service" className={styles.tocOtherLink}>
                                Terms of Service <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </div>
    );
};
