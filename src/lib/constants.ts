import {
  Globe,
  Smartphone,
  Layout,
  Cloud,
  Zap,
  Star,
  Handshake,
} from 'lucide-react';

export const SITE = {
  name: 'Zyfiro',
  tagline: 'Premium Software Agency',
  url: 'https://zyfiro.org',
  email: 'zyfiro@gmail.com',
  whatsapp: 'https://wa.me/923109233844',
  hq: 'Mars 🪐',
  formEmail: 'zeeshan.sarfraz@atrons.net',
  googleVerification: 'jeFQEoDQX94_sVMGvOdz_bN7HEJIg-e6yBQeimy5SJ8',
  social: {
    linkedin: 'https://www.linkedin.com/company/zyfiro',
    github: 'https://github.com/zyfiro-dev',
    instagram: 'https://instagram.com/zyfiro.dev',
    facebook: 'https://www.facebook.com/profile.php?id=61574251996966',
  },
};

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Vision', href: '#vision' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'High-performance web apps built for scalability, SEO, and lightning-fast load times.',
    icon: Globe,
    color: 'violet' as const,
    colorClass: 'text-accent-violet',
    bgClass: 'bg-accent-violet/10',
    borderClass: 'border-accent-violet/20',
    glowClass: 'shadow-[0_0_30px_rgba(124,58,237,0.15)]',
  },
  {
    number: '02',
    title: 'Android Apps',
    description:
      'Custom, high-performance native Android apps built to your exact specifications.',
    icon: Smartphone,
    color: 'blue' as const,
    colorClass: 'text-accent-blue',
    bgClass: 'bg-accent-blue/10',
    borderClass: 'border-accent-blue/20',
    glowClass: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    number: '03',
    title: 'Desktop Software',
    description:
      'Powerful cross-platform desktop applications built with Flutter for every OS.',
    icon: Layout,
    color: 'cyan' as const,
    colorClass: 'text-accent-cyan',
    bgClass: 'bg-accent-cyan/10',
    borderClass: 'border-accent-cyan/20',
    glowClass: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  },
  {
    number: '04',
    title: 'Firebase Backend',
    description:
      'Real-time, secure serverless backends powering your apps from day one.',
    icon: Cloud,
    color: 'orange' as const,
    colorClass: 'text-accent-orange',
    bgClass: 'bg-accent-orange/10',
    borderClass: 'border-accent-orange/20',
    glowClass: 'shadow-[0_0_30px_rgba(249,115,22,0.15)]',
  },
  {
    number: '05',
    title: 'Rapid MVP',
    description:
      'Launch your startup idea in weeks, not months, with our agile delivery process.',
    icon: Zap,
    color: 'emerald' as const,
    colorClass: 'text-accent-emerald',
    bgClass: 'bg-accent-emerald/10',
    borderClass: 'border-accent-emerald/20',
    glowClass: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
];

export const PORTFOLIO = [
  {
    id: 'iccs',
    label: 'ICCS',
    status: 'Live',
    title: 'ICCS Globalized',
    description:
      'The official platform for the International Council of Criminology and Security. We engineered this global hub to connect criminologists, legal experts, and security professionals worldwide — facilitating international cooperation, evidence-based policy research, and seamless member collaboration.',
    tags: ['React', 'Vite', 'Firebase', 'Tailwind'],
    link: 'https://iccsglobalized.com',
  },
];

export const VALUES = [
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'From concept to launch in weeks — without cutting corners.',
    colorClass: 'text-accent-emerald',
    bgClass: 'bg-accent-emerald/10',
  },
  {
    icon: Star,
    title: 'Zero-Compromise Quality',
    description: 'Enterprise-grade code standards on every project, every time.',
    colorClass: 'text-accent-violet',
    bgClass: 'bg-accent-violet/10',
  },
  {
    icon: Handshake,
    title: 'Transparent Process',
    description: 'Clear communication and honest timelines at every step.',
    colorClass: 'text-accent-cyan',
    bgClass: 'bg-accent-cyan/10',
  },
];

export const WIZARD_SERVICES = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'High-performance websites & web apps.',
    icon: Globe,
  },
  {
    id: 'android',
    title: 'Android App',
    description: 'Custom native Android solutions.',
    icon: Smartphone,
  },
  {
    id: 'desktop',
    title: 'Desktop App',
    description: 'Powerful cross-platform software.',
    icon: Layout,
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'World-class interfaces & experiences.',
    icon: Star,
  },
];

export const WIZARD_BUDGETS = [
  '20k - 50k PKR',
  '50k - 100k PKR',
  '100k - 300k PKR',
  '300k+ PKR',
];

export const WIZARD_TIMELINES = [
  '< 1 Month',
  '1-3 Months',
  '3-6 Months',
  '6+ Months',
];

export const FOOTER_COMPANY_LINKS = [
  { label: 'About Us', href: '/#vision' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
];

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];
