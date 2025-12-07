export type MediaType = 'image' | 'video' | 'youtube';

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

const normalizeProjectId = (value: string) => value.trim().toLowerCase();

export const projects: Project[] = [
  {
    id: 'evv',
    title: 'EVV (Electronic Visit Verification)',
    tagline: 'EVV (Electronic Visit Verification) platform for healthcare providers',
    preview: {
      type: 'image',
      src: new URL('../assets/1.png', import.meta.url).href,
      alt: 'EVV dashboard preview',
    },
    mediaGallery: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=3UM9NV9T4qQ',
        alt: 'EVV platform walk-through on YouTube',
        poster: 'https://i.ytimg.com/vi/3UM9NV9T4qQ/hqdefault.jpg',
      },
      {
        type: 'image',
        src: new URL('../assets/evv_img_0.png', import.meta.url).href,
        alt: 'Mobile app visit verification screen',
      },

    ],
    description: [
      'Developed a full-featured Electronic Visit Verification (EVV) platform for healthcare agencies to manage caregiver scheduling, visit tracking, and billing. Built with .NET Core API and Angular web app, the solution ensures HIPAA compliance, role-based security, timezone-accurate scheduling, and automated invoice generation. The system improved caregiver compliance, reduced billing errors, and streamlined agency operations.',
      'The system integrates real-time visit verification, scheduling, and reporting to streamline home healthcare services.',
    ],
    features: [
      'Real-time GPS and biometric verification to ensure visit authenticity',
      'Automated scheduling and dispatching to optimise caregiver routes',
      'Comprehensive reporting tools for compliance and performance tracking',
    ],
    techTags: ['Angular', 'TypeScript', '.NET 8', 'MongoDB', 'AWS', 'Docker'],
    techCategories: [
      { label: 'Frontend', items: ['Angular 20', 'RxJS'] },
      { label: 'Backend', items: ['.NET 8', 'MongoDB'] },
      { label: 'Cloud', items: ['AWS Lambda', 'S3', 'CloudFront', 'Docker', 'AWS SNS', 'AWS SQS'] },
    ],
    links: [
      { label: 'Live Demo', url: 'https://www.youtube.com/watch?v=q7eaaCWpB7U' },
    ],
    role: 'Product Engineer & Technical Lead',
    duration: 'Jan 2024 - Ongoing',
    challenges: [
      'Ensuring data security and compliance with healthcare regulations',
      'Designing a scalable architecture to handle peak loads during emergencies',
      'Implementing real-time monitoring and alerting for critical workflows',
      'Integrating with third-party services while maintaining data integrity',
      'Optimising performance for low-bandwidth environments',
    ],
  },
  {
    id: 'Hand',
    title: 'Hand Tracking SDK for AR/VR',
    tagline: 'Hand tracking solution for immersive experiences in AR/VR',
    preview: {
      type: 'image',
      src: new URL('../assets/2.png', import.meta.url).href,
      alt: 'Hand tracking SDK preview',
    },
    mediaGallery: [
      {
        type: 'image',
        src: new URL('../assets/2.png', import.meta.url).href,
        alt: 'Atlas modular component builder',
      },

    ],
    description: [
      'Hand Tracking SDK provides accurate and responsive hand tracking capabilities for AR/VR applications.',
      'The SDK is designed to be easy to integrate, with a focus on performance and reliability.',
    ],
    features: [
      'Accurate hand tracking with low latency',
      'Robust gesture recognition for intuitive interactions',
      'Seamless integration with popular AR/VR frameworks',
    ],
    techTags: ['Python', 'OpenCV'],
    techCategories: [
      { label: 'Frontend', items: ['React'] },
      { label: 'Backend', items: ['Python'] },
      { label: 'Cloud', items: ['Google Cloud'] },
    ],
    links: [
      { label: 'Live Demo', url: 'https://www.youtube.com/watch?v=q7eaaCWpB7U' },
    ],
    role: 'Lead Developer',
    duration: 'May 2015 - Dec 2015',
  },
  {
    id: 'SurveillanceFootageConsolidator',
    title: 'Surveillance Footage Consolidator',
    tagline: 'Automated processing and analysis of surveillance footage',
    preview: {
      type: 'image',
      src: new URL('../assets/SurveillanceFootageConsolidator_1.png', import.meta.url).href,
      alt: 'Surveillance Footage Consolidator preview',
    },
    mediaGallery: [

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
  projects.find((project) => normalizeProjectId(project.id) === normalizeProjectId(projectId)) ?? null;
