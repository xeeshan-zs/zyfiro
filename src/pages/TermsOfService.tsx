import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft, ArrowRight, FileText, Briefcase, BookOpen,
    UserX, AlertTriangle, Scale, Globe, Mail, Calendar, Clock
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import styles from './LegalPage.module.css';

const sections = [
    {
        id: 'agreement',
        num: '01',
        icon: <FileText size={18} />,
        iconClass: 'iconViolet',
        title: 'Agreement to Terms',
        content: (
            <>
                <p>
                    By accessing or using Zyfiro's website at zyfiro.com, you confirm that you are at least 18 years of age,
                    have read and understood these Terms of Service, and agree to be bound by them.
                </p>
                <p>
                    If you do not agree with any part of these terms, you must discontinue use of our website and services immediately.
                    These terms apply to all visitors, clients, and anyone who accesses or uses our services.
                </p>
                <div className={styles.highlight}>
                    These Terms of Service constitute a legally binding agreement between you and Zyfiro Inc.
                </div>
            </>
        ),
    },
    {
        id: 'services',
        num: '02',
        icon: <Briefcase size={18} />,
        iconClass: 'iconBlue',
        title: 'Our Services',
        content: (
            <>
                <p>
                    Zyfiro provides software development and digital product services including but not limited to:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Web Development</strong> — custom websites and web applications.</span></li>
                    <li><span><strong>Android Application Development</strong> — native Android apps.</span></li>
                    <li><span><strong>Desktop Software</strong> — cross-platform desktop applications using Flutter.</span></li>
                    <li><span><strong>Firebase Backend Services</strong> — real-time serverless backend infrastructure.</span></li>
                    <li><span><strong>Rapid MVP Development</strong> — fast-tracked startup product launches.</span></li>
                    <li><span><strong>UI/UX Design</strong> — interface design and user experience consulting.</span></li>
                </ul>
                <p>
                    We reserve the right to modify, suspend, or discontinue any service offering at any time with reasonable notice.
                </p>
            </>
        ),
    },
    {
        id: 'intellectual-property',
        num: '03',
        icon: <BookOpen size={18} />,
        iconClass: 'iconCyan',
        title: 'Intellectual Property',
        content: (
            <>
                <p>
                    All original content on the Zyfiro website — including text, graphics, logos, and code — is the exclusive property
                    of Zyfiro Inc. and is protected by applicable copyright, trademark, and intellectual property laws.
                </p>
                <p>
                    Regarding client projects:
                </p>
                <ul className={styles.sectionList}>
                    <li><span>Upon full payment, clients receive full ownership of the custom code and deliverables developed specifically for their project.</span></li>
                    <li><span>Zyfiro retains the right to use general methodologies, frameworks, and non-client-specific code patterns in future projects.</span></li>
                    <li><span>Open-source components used in development remain subject to their respective licenses.</span></li>
                    <li><span>Zyfiro may showcase completed projects in its portfolio unless otherwise agreed in writing.</span></li>
                </ul>
            </>
        ),
    },
    {
        id: 'responsibilities',
        num: '04',
        icon: <UserX size={18} />,
        iconClass: 'iconOrange',
        title: 'User Responsibilities',
        content: (
            <>
                <p>
                    When using our website or engaging our services, you agree to:
                </p>
                <ul className={styles.sectionList}>
                    <li><span>Provide accurate, complete, and up-to-date information in all project inquiries and communications.</span></li>
                    <li><span>Not use our website for any unlawful purpose or in violation of any regulations.</span></li>
                    <li><span>Not attempt to gain unauthorized access to any part of our systems or infrastructure.</span></li>
                    <li><span>Not upload or transmit any malicious code, viruses, or disruptive content.</span></li>
                    <li><span>Respect agreed payment terms and project timelines in client agreements.</span></li>
                    <li><span>Maintain confidentiality of any proprietary information shared during the course of a project.</span></li>
                </ul>
            </>
        ),
    },
    {
        id: 'termination',
        num: '05',
        icon: <AlertTriangle size={18} />,
        iconClass: 'iconRose',
        title: 'Termination',
        content: (
            <>
                <p>
                    Either party may terminate a service agreement under the following conditions:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>By Client</strong> — with written notice. Work completed up to the point of termination will be invoiced pro-rata.</span></li>
                    <li><span><strong>By Zyfiro</strong> — if the client breaches these Terms, fails to make payments, or engages in conduct incompatible with a healthy working relationship.</span></li>
                    <li><span><strong>Mutual Agreement</strong> — both parties may mutually agree to end the engagement at any time.</span></li>
                </ul>
                <p>
                    Upon termination, all deliverables completed and paid for will be transferred to the client.
                    Unpaid work remains the property of Zyfiro until full payment is received.
                </p>
            </>
        ),
    },
    {
        id: 'liability',
        num: '06',
        icon: <Scale size={18} />,
        iconClass: 'iconEmerald',
        title: 'Limitation of Liability',
        content: (
            <>
                <p>
                    To the maximum extent permitted by applicable law, Zyfiro Inc. and its founders, employees, and partners
                    shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className={styles.sectionList}>
                    <li><span>Loss of profits, revenue, or business opportunities.</span></li>
                    <li><span>Loss of data or unauthorized access to your systems beyond our control.</span></li>
                    <li><span>Delays caused by third-party services, APIs, or infrastructure outside our control.</span></li>
                    <li><span>Any errors or inaccuracies in content published on our website.</span></li>
                </ul>
                <div className={styles.highlight}>
                    Our total liability for any claim arising under these Terms shall not exceed the total amount paid by
                    you to Zyfiro in the three months preceding the event giving rise to the claim.
                </div>
            </>
        ),
    },
    {
        id: 'governing-law',
        num: '07',
        icon: <Globe size={18} />,
        iconClass: 'iconAmber',
        title: 'Governing Law',
        content: (
            <>
                <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan.
                    Any disputes arising from these terms or the use of our services shall be subject to the exclusive
                    jurisdiction of the competent courts of Pakistan.
                </p>
                <p>
                    We encourage all disputes to first be resolved through direct communication. We are committed to
                    finding fair, transparent resolutions without the need for formal proceedings.
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
                    If you have questions about these Terms of Service, our services, or need to raise any concerns,
                    please contact us directly:
                </p>
                <ul className={styles.sectionList}>
                    <li><span><strong>Zeeshan Sarfraz</strong> — <a className={styles.emailLink} href="mailto:zeeshan.sarfraz@atrons.net">zeeshan.sarfraz@atrons.net</a></span></li>
                    <li><span><strong>Javeria Javaid</strong> — <a className={styles.emailLink} href="mailto:meetjaveriajavaid@gmail.com">meetjaveriajavaid@gmail.com</a></span></li>
                </ul>
                <p>
                    We aim to respond to all inquiries within 24 hours.
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

export const TermsOfService = () => {
    return (
        <div className={styles.page}>
            <Helmet>
                <title>Terms of Service — Zyfiro</title>
                <meta name="description" content="Terms of Service for Zyfiro. Read our service agreement, intellectual property rights, and liability limitations." />
            </Helmet>
            <Navbar />

            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <Link to="/" className={styles.backLink}>
                        <ArrowLeft size={14} /> Back to Home
                    </Link>
                    <div className={styles.heroBadge}>
                        <FileText size={11} /> Legal
                    </div>
                    <h1 className={styles.heroTitle}>
                        Terms of <span className={styles.heroAccent}>Service</span>.
                    </h1>
                    <div className={styles.heroMeta}>
                        <span className={styles.metaChip}><Calendar size={13} /> Last Updated: February 2026</span>
                        <span className={styles.metaSep}>·</span>
                        <span className={styles.metaChip}><Clock size={13} /> 6 min read</span>
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
                            These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
                        </span>
                        <Link to="/privacy-policy" className={styles.bottomNoteLink}>
                            Privacy Policy <ArrowRight size={13} />
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
                            <Link to="/privacy-policy" className={styles.tocOtherLink}>
                                Privacy Policy <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </div>
    );
};
