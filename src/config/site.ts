export const siteConfig = {
  name: 'Nur Mohammad Farazi',
  shortName: 'Farazi',
  role: 'AI Developer',
  description:
    'AI developer and freelance full-stack engineer building SaaS products, workflow automation, Claude and Codex integrations, and AI-powered web apps.',
  siteUrl: 'https://personal-webpage.netlify.app',
  email: 'nur369188@gmail.com',
  location: 'Dhaka, Bangladesh',
  social: {
    linkedin: 'https://www.linkedin.com/in/nurfarazi/',
    github: 'https://github.com/nurfarazi',
    medium: 'https://medium.com/@nur369188',
  },
  keywords: [
    'AI developer',
    'AI developer for hire',
    'freelance AI app developer',
    'AI app development',
    'full-stack developer',
    'Claude developer',
    'Codex developer',
    'SaaS developer',
    'workflow automation',
    'web app development',
  ],
} as const;

export const getSiteUrl = () => siteConfig.siteUrl.replace(/\/+$/, '');

export const getAbsoluteUrl = (path = '/') => {
  const baseUrl = getSiteUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedPath === '/') {
    return baseUrl;
  }

  return `${baseUrl}${normalizedPath}`;
};

export const formatPageTitle = (title: string) => `${title} | ${siteConfig.name}`;
