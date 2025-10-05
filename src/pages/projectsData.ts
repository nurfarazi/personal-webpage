export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  src: string;
  alt: string;
  poster?: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  preview: ProjectMedia;
  techTags: string[];
  description: string[];
  features: string[];
  techCategories: TechCategory[];
  mediaGallery: ProjectMedia[];
  links: ProjectLink[];
  role?: string;
  duration?: string;
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 'pulseforge',
    title: 'PulseForge Analytics',
    tagline: 'Real-time health analytics platform for enterprise clinics',
    preview: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1580894906472-2f9f8b910f20?auto=format&fit=crop&w=1200&q=80',
      alt: 'PulseForge analytics dashboard preview',
    },
    mediaGallery: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        alt: 'PulseForge data visualisations',
      },
      {
        type: 'video',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
        alt: 'PulseForge workflow demo',
        poster: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    description: [
      'PulseForge brings together wearable data, patient records, and predictive models so care teams can respond to health events faster.',
      'Led the full-stack build while pairing with clinicians to iterate on dashboards that translate complex signals into actionable insights.',
    ],
    features: [
      'Live data stream processing with configurable watchlists',
      'Scenario modelling that projects health trends using custom ML models',
      'Collaborative review spaces with audit-friendly notes and approvals',
    ],
    techTags: ['React', 'TypeScript', 'Socket.IO', 'Azure Functions'],
    techCategories: [
      { label: 'Frontend', items: ['React 18', 'React Query', 'Framer Motion', 'Victory Charts'] },
      { label: 'Backend', items: ['.NET 8 Web API', 'Azure Functions', 'Redis Streams'] },
      { label: 'Cloud', items: ['Azure Event Hubs', 'Azure Monitor', 'Azure Blob Storage'] },
    ],
    links: [
      { label: 'Live Demo', url: 'https://example.com/pulseforge' },
      { label: 'GitHub', url: 'https://github.com/example/pulseforge' },
    ],
    role: 'Product Engineer & Technical Lead',
    duration: 'Jan 2024 - Aug 2024',
    challenges: [
      'Synthesising varying data refresh cadences without overwhelming clinicians',
      'Meeting HIPAA controls while keeping collaboration fluid',
    ],
  },
  {
    id: 'atlas',
    title: 'Atlas Commerce',
    tagline: 'Composable e-commerce storefront with headless CMS',
    preview: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Atlas commerce storefront preview',
    },
    mediaGallery: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        alt: 'Atlas modular component builder',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Atlas campaign dashboard',
      },
    ],
    description: [
      'Atlas is a composable storefront enabling marketing teams to launch campaigns in hours rather than weeks.',
      'The platform emphasises a modular design system, dynamic routing, and a CMS-driven workflow that keeps engineering and content in sync.',
    ],
    features: [
      'Block-based page builder with live preview and versioning',
      'Dynamic personalisation flows powered by segment-driven rules',
      'Server-side rendering with incremental revalidation for fast global delivery',
    ],
    techTags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    techCategories: [
      { label: 'Frontend', items: ['Next.js 14', 'React Server Components', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'Apollo Federation', 'Prisma'] },
      { label: 'Cloud', items: ['Vercel', 'AWS RDS', 'CloudFront'] },
    ],
    links: [
      { label: 'Case Study', url: 'https://example.com/atlas-case-study' },
      { label: 'GitHub', url: 'https://github.com/example/atlas-commerce' },
    ],
    role: 'Lead Frontend Engineer',
    duration: 'May 2023 - Dec 2023',
  },
  {
    id: 'tidelabs',
    title: 'TideLabs Research Portal',
    tagline: 'Knowledge base and experiment automation for data teams',
    preview: {
      type: 'video',
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
      alt: 'TideLabs walkthrough',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    },
    mediaGallery: [
      {
        type: 'video',
        src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
        alt: 'Automated experiment timeline',
        poster: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Research documentation hub',
      },
    ],
    description: [
      'TideLabs centralises experimental findings, datasets, and team rituals so data scientists can iterate quickly without losing context.',
      'Automations bring relevant documentation into the workflow and trigger environment provisioning on demand.',
    ],
    features: [
      'Notebook synchronisation with automatic changelog generation',
      'Automated environment setup with one-click teardown',
      'Cross-team retrospectives and insights surfaced by AI summaries',
    ],
    techTags: ['React', 'NestJS', 'PostgreSQL', 'Kubernetes'],
    techCategories: [
      { label: 'Frontend', items: ['React 18', 'Zustand', 'Framer Motion'] },
      { label: 'Backend', items: ['NestJS', 'GraphQL', 'Hasura'] },
      { label: 'Cloud', items: ['GKE', 'ArgoCD', 'BigQuery'] },
    ],
    links: [
      { label: 'Live Portal', url: 'https://example.com/tidelabs' },
    ],
    role: 'Founding Engineer',
    duration: 'Jul 2022 - Present',
    challenges: [
      'Abstracting complex data governance policies into lightweight controls',
      'Maintaining fast onboarding despite infrastructure complexity',
    ],
  },
];

export const getProjectById = (projectId: string) =>
  projects.find((project) => project.id === projectId) ?? null;
