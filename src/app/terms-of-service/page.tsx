import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions governing use of Zyfiro services.',
};

const sections = [
  {
    number: '01',
    title: 'Agreement to Terms',
    content: [
      'By accessing or using Zyfiro\'s website at zyfiro.org, you confirm that you are at least 18 years of age, have read and understood these Terms of Service, and agree to be bound by them.',
      'If you do not agree with any part of these terms, you must discontinue use of our website and services immediately. These terms apply to all visitors, clients, and anyone who accesses or uses our services.',
    ],
    highlight: 'These Terms of Service constitute a legally binding agreement between you and Zyfiro Inc.',
  },
  {
    number: '02',
    title: 'Our Services',
    content: ['Zyfiro provides software development and digital product services including but not limited to:'],
    list: [
      'Web Development — custom websites and web applications.',
      'Android Application Development — native Android apps.',
      'Desktop Software — cross-platform desktop applications using Flutter.',
      'Firebase Backend Services — real-time serverless backend infrastructure.',
      'Rapid MVP Development — fast-tracked startup product launches.',
      'UI/UX Design — interface design and user experience consulting.',
    ],
    footer: 'We reserve the right to modify, suspend, or discontinue any service offering at any time with reasonable notice.',
  },
  {
    number: '03',
    title: 'Intellectual Property',
    content: [
      'All original content on the Zyfiro website — including text, graphics, logos, and code — is the exclusive property of Zyfiro Inc. and is protected by applicable copyright, trademark, and intellectual property laws.',
      'Regarding client projects:',
    ],
    list: [
      'Upon full payment, clients receive full ownership of the custom code and deliverables developed specifically for their project.',
      'Zyfiro retains the right to use general methodologies, frameworks, and non-client-specific code patterns in future projects.',
      'Open-source components used in development remain subject to their respective licenses.',
      'Zyfiro may showcase completed projects in its portfolio unless otherwise agreed in writing.',
    ],
  },
  {
    number: '04',
    title: 'User Responsibilities',
    content: ['When using our website or engaging our services, you agree to:'],
    list: [
      'Provide accurate, complete, and up-to-date information in all project inquiries and communications.',
      'Not use our website for any unlawful purpose or in violation of any regulations.',
      'Not attempt to gain unauthorized access to any part of our systems or infrastructure.',
      'Not upload or transmit any malicious code, viruses, or disruptive content.',
      'Respect agreed payment terms and project timelines in client agreements.',
      'Maintain confidentiality of any proprietary information shared during the course of a project.',
    ],
  },
  {
    number: '05',
    title: 'Termination',
    content: ['Either party may terminate a service agreement under the following conditions:'],
    list: [
      'By Client — with written notice. Work completed up to the point of termination will be invoiced pro-rata.',
      'By Zyfiro — if the client breaches these Terms, fails to make payments, or engages in conduct incompatible with a healthy working relationship.',
      'Mutual Agreement — both parties may mutually agree to end the engagement at any time.',
    ],
    footer: 'Upon termination, all deliverables completed and paid for will be transferred to the client. Unpaid work remains the property of Zyfiro until full payment is received.',
  },
  {
    number: '06',
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, Zyfiro Inc. and its founders, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:',
    ],
    list: [
      'Loss of profits, revenue, or business opportunities.',
      'Loss of data or unauthorized access to your systems beyond our control.',
      'Delays caused by third-party services, APIs, or infrastructure outside our control.',
      'Any errors or inaccuracies in content published on our website.',
    ],
    highlight:
      'Our total liability for any claim arising under these Terms shall not exceed the total amount paid by you to Zyfiro in the three months preceding the event giving rise to the claim.',
  },
  {
    number: '07',
    title: 'Governing Law',
    content: [
      'These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the competent courts of Pakistan.',
      'We encourage all disputes to first be resolved through direct communication. We are committed to finding fair, transparent resolutions without the need for formal proceedings.',
    ],
  },
  {
    number: '08',
    title: 'Contact Us',
    content: [
      'If you have questions about these Terms of Service, our services, or need to raise any concerns, please contact us at zyfiro@gmail.com. We aim to respond to all inquiries within 24 hours.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-bg-base pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-primary transition-colors mb-10 group"
        >
          <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
          Back to Home
        </Link>

        {/* Hero */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-5">
            <span className="text-accent-cyan text-xs font-semibold">●</span>
            <span className="text-accent-cyan text-xs font-semibold">Legal</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Terms of Service.
          </h1>
          <p className="text-text-muted text-sm">
            Last Updated: February 2026 · 6 min read
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="border-t border-black/[0.08] pt-10">
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
                        <span className="w-1 h-1 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="text-text-muted text-sm leading-relaxed italic">{section.footer}</p>
                )}
                {section.highlight && (
                  <div className="glass border border-accent-cyan/20 rounded-xl p-4">
                    <p className="text-text-secondary text-sm leading-relaxed">{section.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 pt-10 border-t border-black/[0.08]">
          <p className="text-text-muted text-sm mb-4">
            These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
          </p>
          <Link href="/privacy-policy" className="text-accent-cyan text-sm hover:underline">
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
