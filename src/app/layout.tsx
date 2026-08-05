import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';


export const metadata: Metadata = {
  metadataBase: new URL('https://zyfiro.org'),
  title: {
    default: 'Zyfiro — Web Design, Enterprise Software & AI Solutions',
    template: '%s | Zyfiro',
  },
  description:
    'Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions. We build legacies.',
  keywords: [
    'web development',
    'software agency',
    'AI solutions',
    'digital design',
    'Zyfiro',
    'custom software engineering',
    'React TypeScript',
    'AI integration',
    'Android development',
    'Flutter desktop',
  ],
  authors: [{ name: 'Zyfiro', url: 'https://zyfiro.org' }],
  creator: 'Zyfiro',
  publisher: 'Zyfiro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zyfiro.org',
    siteName: 'Zyfiro',
    title: 'Zyfiro — Web Design, Enterprise Software & AI Solutions',
    description:
      'Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zyfiro — Premium Software Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyfiro — Premium Software Agency',
    description:
      'Custom web apps, desktop software, Android apps, and AI solutions from Pakistan for the world.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'jeFQEoDQX94_sVMGvOdz_bN7HEJIg-e6yBQeimy5SJ8',
  },
  alternates: {
    canonical: 'https://zyfiro.org',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://zyfiro.org/#organization',
      name: 'Zyfiro',
      url: 'https://zyfiro.org',
      logo: 'https://zyfiro.org/favicon.png',
      email: 'zyfiro@gmail.com',
      description:
        'Zyfiro is a premier digital engineering agency specializing in custom web applications, desktop software, mobile app development, and AI solutions.',
      founders: [
        { '@type': 'Person', name: 'Zeeshan Sarfraz', jobTitle: 'Co-Founder & Tech Lead' },
        { '@type': 'Person', name: 'Javeria Javaid', jobTitle: 'Co-Founder & Operations' },
      ],
      knowsAbout: [
        'Web Development',
        'Software Engineering',
        'Artificial Intelligence Solutions',
        'UI/UX Design',
        'Mobile Application Engineering',
      ],
      sameAs: [
        'https://www.linkedin.com/company/zyfiro',
        'https://github.com/zyfiro-dev',
        'https://instagram.com/zyfiro.dev',
        'https://www.facebook.com/profile.php?id=61574251996966',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://zyfiro.org/#service',
      name: 'Zyfiro',
      image: 'https://zyfiro.org/favicon.png',
      url: 'https://zyfiro.org',
      email: 'zyfiro@gmail.com',
      priceRange: '$$',
      description:
        'Zyfiro is a premium digital engineering agency delivering custom web apps, desktop software, mobile applications, and AI integrations.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Web Design & Development',
              description:
                'Modern, high-converting websites and web applications engineered with React, Next.js, and TypeScript.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise Software & Backend Engineering',
              description:
                'Scalable desktop applications, APIs, and cloud infrastructure engineered for maximum uptime and security.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Solutions & Automation',
              description:
                'Custom AI agent integrations, LLM workflows, and data processing automation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design Systems',
              description:
                'Stunning glassmorphism design systems, micro-animations, and conversion-centered user experiences.',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />

        </SmoothScroll>
      </body>
    </html>
  );
}
