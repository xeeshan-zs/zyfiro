import {
  Globe,
  Smartphone,
  Layout,
  Cloud,
  Zap,
  Star,
  Handshake,
  Code2,
  Sparkles,
  Palette,
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
    title: 'Custom Software Development',
    description: 'Scalable software engineered for startups, enterprises, and growing businesses.',
    icon: Code2,
    badge: 'ENGINEERING',
    image: '/assets/services/custom_software_development.png',
  },
  {
    number: '02',
    title: 'AI Solutions',
    description: 'AI chatbots, automation, intelligent workflows, predictive analytics, and generative AI.',
    icon: Sparkles,
    badge: 'AI SOLUTIONS',
    image: '/assets/services/AI_solutions.png',
  },
  {
    number: '03',
    title: 'Web Applications',
    description: 'Fast, secure, responsive web applications using modern frameworks.',
    icon: Globe,
    badge: 'WEB APPS',
    image: '/assets/services/web_applications.png',
  },
  {
    number: '04',
    title: 'Mobile App Development',
    description: 'Cross-platform Android and iOS apps with premium user experiences.',
    icon: Smartphone,
    badge: 'APP SOLUTIONS',
    image: '/assets/services/mbl_app.png',
  },
  {
    number: '05',
    title: 'UI/UX Design',
    description: 'Human-centered digital experiences designed for clarity, usability, and engagement.',
    icon: Palette,
    badge: 'EXPERIENCE',
    image: '/assets/services/ui-ux.png',
  },
];

export const PORTFOLIO = [
  {
    id: 'nectar',
    label: 'NECTAR',
    category: 'AI-Powered E-Commerce',
    status: 'Coming Soon',
    title: 'Nectar',
    description:
      'Modern grocery delivery platform engineered for speed, scalability, and exceptional user experience.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/xeeshan-zs/z-nectar',
    liveLink: null,
    image: '/assets/mockup-1.png',
  },
  {
    id: 'iccs',
    label: 'ICCS',
    category: 'Global Platform',
    status: 'Live',
    title: 'ICCS Globalized',
    description:
      'The official platform for the International Council of Criminology and Security. We engineered this global hub to connect criminologists, legal experts, and security professionals worldwide — facilitating international cooperation, evidence-based policy research, and seamless member collaboration.',
    tags: ['React', 'Vite', 'Firebase', 'Tailwind'],
    liveLink: 'https://iccsglobalized.com',
    image: '/assets/mockup-2.png',
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
