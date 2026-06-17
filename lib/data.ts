export const UNSPLASH_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
  project1: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  project2: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  project3: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  skills: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  contact: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
  ambient: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'AAR Travel Insurance Platform',
    category: 'FinTech / Insurance',
    description:
      'A robust travel insurance platform built for AAR Insurance Kenya, enabling seamless domestic policy issuance, claims management, and real-time customer support.',
    tech: ['Laravel', 'React', 'MySQL', 'Docker', 'AWS'],
    image: UNSPLASH_IMAGES.project1,
    year: '2024',
    role: 'Lead Fullstack Developer',
    link: "https://github.com/michoti",
  },
  {
    id: 2,
    title: 'eCommerce Suite',
    category: 'Commerce Platform',
    description:
      'A headless eCommerce architecture with GraphQL API, real-time inventory, RabbitMQ message brokering, and a React storefront optimized for high-conversion UX.',
    tech: ['React', 'Laravel', 'GraphQL', 'RabbitMQ', 'Pusher'],
    image: UNSPLASH_IMAGES.project2,
    year: '2023',
    role: 'Fullstack Engineer',
    link: "https://soko-yetu.vercel.app/",
  },
  {
    id: 3,
    title: 'Business Intelligence Dashboard',
    category: 'Data Visualization',
    description:
      'An executive-grade analytics dashboard with real-time data streams, interactive charts, role-based access control, and CI/CD automated deployments.',
    tech: ['Next.js', 'TypeScript', 'Pusher', 'GitHub Actions', 'Tailwind'],
    image: UNSPLASH_IMAGES.project3,
    year: '2023',
    role: 'Frontend Architect',
    link: "https://github.com/michoti",
  },
];

export const EXPERIENCE = [
  {
    company: 'Startappzke Ltd',
    location: 'Nairobi, Kenya',
    role: 'Fullstack Developer',
    period: 'May 2024 — April 2025',
    highlights: [
      'Engineered a travel insurance platform for AAR using Laravel with a microservices architecture',
      'Maintained zero-downtime deployments via Docker containerization and GitHub CI/CD',
      'Collaborated across a 4-person engineering team using Jira, Slack, and Microsoft Teams',
    ],
  },
  {
    company: 'Upwork',
    location: 'Remote',
    role: 'Freelance Fullstack Engineer',
    period: 'Dec 2022 — May 2024',
    highlights: [
      'Delivered 12+ web applications across eCommerce and SaaS domains using Laravel and React',
      'Implemented GraphQL APIs and RabbitMQ message brokers for distributed system architecture',
      'Managed client relations, technical scoping, and Agile sprint execution independently',
    ],
  },
  {
    company: 'Clifford Technologies',
    location: 'Nairobi, Kenya',
    role: 'Fullstack Developer',
    period: 'June 2022 — Nov 2022',
    highlights: [
      'Applied Agile/Scrum methodology to high-volume web service development',
      'Enhanced UI/UX design systems and led mobile-first implementation for external clients',
      'Built maintainable, documented codebases with React and Laravel across multiple projects',
    ],
  },
  {
    company: 'Grafame Tech',
    location: 'Nairobi, Kenya',
    role: 'Junior Web Developer',
    period: 'May 2021 — Sept 2021',
    highlights: [
      'Developed and enhanced core features on the company website with bug fix ownership',
      'Maintained thorough documentation across the full product lifecycle',
    ],
  },
];

export const SKILLS = {
  languages: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'NoSQL'],
  frameworks: ['React', 'Next.js', 'Laravel', 'Tailwind CSS'],
  tools: ['Git', 'Docker', 'AWS', 'RabbitMQ', 'Pusher', 'Jira', 'GitHub Actions'],
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
