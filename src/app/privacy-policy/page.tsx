import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Zyfiro collects, uses, and protects your personal data.',
};

const sections = [
  {
    number: '01',
    title: 'Introduction',
    content: [
      'Welcome to Zyfiro ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.',
      'By using our website or services, you agree to the practices described in this policy. If you disagree with any part of it, please discontinue use of our services.',
    ],
    highlight:
      'We believe privacy is a fundamental right. We only collect what we absolutely need, and we never sell your data.',
  },
  {
    number: '02',
    title: 'Data We Collect',
    content: [
      'We may collect the following types of personal data when you interact with our website or project inquiry form:',
    ],
    list: [
      'Identity Data — your name and any identifiers you provide in our contact forms.',
      'Contact Data — email address, used solely to respond to your inquiries.',
      'Project Data — project details, budget range, and timeline you share through our Project Wizard.',
      'Technical Data — IP address, browser type and version, time zone, operating system, and basic device info collected automatically via standard web logs.',
      'Usage Data — pages visited, time spent, referral sources, and click patterns to help us improve the website experience.',
    ],
    footer:
      'We do not collect sensitive personal data such as financial account details, government IDs, or health information through this website.',
  },
  {
    number: '03',
    title: 'How We Use Your Data',
    content: ['We use the personal data we collect for the following purposes:'],
    list: [
      'To respond to your project inquiries and provide quotes or proposals.',
      'To communicate about the scope, timeline, and progress of your project.',
      'To improve our website content, performance, and user experience.',
      'To comply with applicable legal obligations.',
      'To send important service-related notifications (never unsolicited marketing).',
    ],
    footer:
      'We will never use your data for automated decision-making that significantly affects you, or for any purpose incompatible with what is listed above.',
  },
  {
    number: '04',
    title: 'Data Sharing & Third Parties',
    content: [
      'We do not sell your personal data. We may share limited data with trusted third-party service providers strictly to operate our business:',
    ],
    list: [
      'Email services — to send and receive project-related communications (e.g., Gmail / Google Workspace).',
      'Analytics providers — to understand website usage patterns anonymously.',
      'Hosting providers — to serve the website and store data securely.',
    ],
    footer:
      'All third-party providers are contractually required to protect your data and may only process it on our behalf. We never allow them to use your data for their own purposes.',
  },
  {
    number: '05',
    title: 'Data Security',
    content: [
      'We take data security seriously. We have implemented appropriate technical and organizational measures to protect your personal data against accidental loss, unauthorized access, alteration, or disclosure.',
    ],
    list: [
      'All data is transmitted over HTTPS (TLS encryption).',
      'Access to personal data is strictly limited to authorized personnel who need it for service delivery.',
      'We regularly review our security practices to maintain protection against emerging threats.',
    ],
    highlight:
      'While we strive for the highest security standards, no system is 100% impenetrable. If you suspect a security breach, please contact us at zyfiro@gmail.com.',
  },
  {
    number: '06',
    title: 'Cookies',
    content: [
      'Our website may use cookies — small text files stored on your device — to improve your browsing experience. We use the following types:',
    ],
    list: [
      'Strictly Necessary — required for the website to function correctly.',
      'Analytics — help us understand how visitors interact with our website (anonymized data only).',
    ],
    footer:
      'You can control or disable cookies through your browser settings at any time. Disabling certain cookies may affect the functionality of the website.',
  },
  {
    number: '07',
    title: 'Your Rights',
    content: [
      'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
    ],
    list: [
      'Right to Access — request a copy of the personal data we hold about you.',
      'Right to Rectification — request correction of inaccurate or incomplete data.',
      'Right to Erasure — request deletion of your personal data where it is no longer necessary.',
      'Right to Object — object to processing based on legitimate interests.',
      'Right to Data Portability — request a portable copy of your data in a common format.',
    ],
    footer: 'To exercise any of these rights, contact us at the email below. We will respond within 30 days.',
  },
  {
    number: '08',
    title: 'Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, how we handle your data, or wish to exercise any of your rights, please reach out to us at zyfiro@gmail.com. We are committed to resolving any concerns promptly and transparently.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-base pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-primary transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1 duration-200" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5">
            <Shield size={12} className="text-accent-violet" />
            <span className="text-accent-violet text-xs font-semibold">Legal</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Privacy Policy.
          </h1>
          <p className="text-text-muted text-sm">
            Last Updated: February 2026 · 5 min read
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="border-t border-white/[0.06] pt-10">
              <div className="flex gap-4 mb-4">
                <span className="font-mono text-xs text-text-muted/40 font-bold mt-1">{section.number}</span>
                <h2 className="font-display text-xl font-bold text-text-primary">{section.title}</h2>
              </div>
              <div className="pl-9 space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-text-secondary text-sm leading-relaxed">{para}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-2 text-text-secondary text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent-violet mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="text-text-muted text-sm leading-relaxed italic">{section.footer}</p>
                )}
                {section.highlight && (
                  <div className="glass border border-accent-violet/20 rounded-xl p-4">
                    <p className="text-text-secondary text-sm leading-relaxed">{section.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <p className="text-text-muted text-sm mb-4">
            This policy may be updated periodically. Continued use of our services constitutes acceptance.
          </p>
          <Link href="/terms-of-service" className="text-accent-violet text-sm hover:underline">
            Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
