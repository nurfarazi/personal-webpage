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
  priority?: number;
}

const normalizeProjectId = (value: string) => value.trim().toLowerCase();

export const projects: Project[] = [
  {
    id: 'evv',
    priority: 10,
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
    id: 'hand',
    priority: 20,
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
    id: 'surveillance-footage-consolidator',
    priority: 30,
    title: 'Surveillance Footage Consolidator',
    tagline: 'Automated processing and analysis of surveillance footage',
    preview: {
      type: 'image',
      src: new URL('../assets/surveillance_preview.png', import.meta.url).href,
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
  {
    id: 'poplin',
    priority: 40,
    title: 'poplin (wash-dry-fold)',
    tagline: 'Scalable laundry service platform with app-based pickup and workflows',
    preview: {
      type: 'image',
      src: new URL('../assets/poplin_preview.png', import.meta.url).href,
      alt: 'poplin laundry service app preview',
    },
    mediaGallery: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/shorts/da-Xs6h4tBo',
        alt: 'poplin laundry service demo on YouTube',
        poster: 'https://i.ytimg.com/vi/da-Xs6h4tBo/hqdefault.jpg',
      },
    ],
    description: [
      'I contributed as a Backend Engineer to build a scalable laundry service platform with app-based pickup and wash-dry-fold workflows. I engineered REST APIs, optimized order management and pricing logic, and improved delivery tracking.',
      'Focused on performance, security, and reliable transaction processing to support nationwide operations and seamless user experience.',
    ],
    features: [
      'REST API development for order management and pricing',
      'Optimized order management and pricing logic',
      'Improved delivery tracking system',
      'Transaction processing for nationwide operations',
    ],
    techTags: ['Node.js', 'API Development'],
    techCategories: [
      { label: 'Backend', items: ['Node.js', 'REST APIs'] },
    ],
    links: [
      { label: 'Visit Website', url: 'https://poplin.co/' },
      { label: 'Watch Demo', url: 'https://www.youtube.com/shorts/da-Xs6h4tBo' },
    ],
    role: 'Backend Engineer',
    duration: 'Nov 2025',
  },
  {
    id: 'bandscore9',
    priority: 50,
    title: 'Bandscore9',
    tagline: 'IELTS mock tests and skill evaluation platform',
    preview: {
      type: 'image',
      src: new URL('../assets/bandscore9_preview.png', import.meta.url).href,
      alt: 'Bandscore9 IELTS platform preview',
    },
    mediaGallery: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=WMt9LA3bYKo',
        alt: 'Bandscore9 platform demo on YouTube',
        poster: 'https://i.ytimg.com/vi/WMt9LA3bYKo/hqdefault.jpg',
      },
    ],
    description: [
      'As the DevOps Engineer responsible for the Continuous Integration and Continuous Deployment (CI/CD) pipeline, I designed and implemented a robust automation framework that ensures seamless integration and deployment of new features.',
      'The platform provides authentic IELTS mock tests and skill evaluation, catering to candidates to evaluate their IELTS skills and know where they stand.',
    ],
    features: [
      'Robust CI/CD automation framework',
      'Seamless feature integration and deployment',
      'Authentic IELTS mock tests with multiple difficulty levels',
      'Comprehensive skill evaluation and progress tracking',
    ],
    techTags: ['CI/CD', 'Node.js', 'NestJS', 'ExpressJS'],
    techCategories: [
      { label: 'DevOps', items: ['CI/CD', 'Automation'] },
      { label: 'Backend', items: ['Node.js', 'NestJS', 'ExpressJS'] },
    ],
    links: [
      { label: 'Visit Website', url: 'https://www.bandscore9.com/' },
      { label: 'Watch Demo', url: 'https://www.youtube.com/watch?v=WMt9LA3bYKo' },
    ],
    role: 'DevOps Engineer',
    duration: 'Oct 2025',
  },
  {
    id: 'cholpori',
    priority: 60,
    title: 'CholPori (LMS)',
    tagline: 'Interactive learning platform with multimedia lessons and quizzes',
    preview: {
      type: 'image',
      src: new URL('../assets/cholpori_preview.png', import.meta.url).href,
      alt: 'CholPori LMS platform preview',
    },
    mediaGallery: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=px8c9T6c1jA',
        alt: 'CholPori platform demo on YouTube',
        poster: 'https://i.ytimg.com/vi/px8c9T6c1jA/hqdefault.jpg',
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=POZxRHv2Tls',
        alt: 'CholPori impact programs showcase on YouTube',
        poster: 'https://i.ytimg.com/vi/POZxRHv2Tls/hqdefault.jpg',
      },
    ],
    description: [
      'I was the Lead Developer and System Architect for CholPori, an interactive learning platform that lets teachers build multimedia lessons with quizzes and read-aloud books. I designed the system using .NET Core, Angular, Firebase, and Docker, ensuring scalability, speed, and a kid-friendly experience.',
      'The platform now supports thousands of students and teachers through engaging, real-time learning tools that make education more accessible and interactive.',
    ],
    features: [
      'Multimedia lesson builder with quizzes and read-aloud functionality',
      'Kid-friendly user interface design',
      'Real-time learning experience with interactive tools',
      'Scalable architecture supporting thousands of concurrent users',
      'Firebase integration for real-time data synchronization',
    ],
    techTags: ['.NET Core', 'Angular', 'API', 'Firebase', 'Docker'],
    techCategories: [
      { label: 'Frontend', items: ['Angular'] },
      { label: 'Backend', items: ['.NET Core', 'REST APIs'] },
      { label: 'Cloud', items: ['Firebase', 'Docker'] },
    ],
    links: [
      { label: 'Visit Website', url: 'https://cholpori.com/' },
      { label: 'Watch Demo', url: 'https://www.youtube.com/watch?v=px8c9T6c1jA' },
      { label: 'Impact Programs', url: 'https://www.youtube.com/watch?v=POZxRHv2Tls' },
    ],
    role: 'Lead Developer & System Architect',
    duration: 'Oct 2025',
  },
  {
    id: 'automated-data-pipeline',
    priority: 70,
    title: 'Automated Data Pipeline',
    tagline: 'End-to-end Excel to Google Sheets data automation solution',
    preview: {
      type: 'image',
      src: new URL('../assets/automated_data_pipeline_preview.png', import.meta.url).href,
      alt: 'Automated Data Pipeline preview',
    },
    mediaGallery: [],
    description: [
      'I engineered an end-to-end solution to automate a tedious, error-prone Excel to Google Sheets data transfer process. As the sole developer, I built a robust Python script using pandas and the Google Sheets API, then scheduled it for autonomous execution.',
      'My work eliminated 100% of manual effort, removed the risk of human error, and empowered the team with consistently accurate, real-time data. This automation transformed their workflow, saving hours of labor and boosting operational efficiency.',
    ],
    features: [
      'Automated Excel data extraction using pandas',
      'Google Sheets API integration for seamless data transfer',
      'Scheduled autonomous execution',
      '100% elimination of manual data entry effort',
      'Error handling and validation mechanisms',
      'Real-time data accuracy and consistency',
    ],
    techTags: ['Python', 'Automation', 'Scheduling Software'],
    techCategories: [
      { label: 'Backend', items: ['Python', 'pandas'] },
      { label: 'Automation', items: ['Google Sheets API', 'Scheduling'] },
    ],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nurfarazi/Excel2Google_AutoPilot' },
    ],
    role: 'Lead Developer',
    duration: 'Oct 2025',
  },
];

export const getProjectById = (projectId: string) =>
  projects.find((project) => normalizeProjectId(project.id) === normalizeProjectId(projectId)) ?? null;
