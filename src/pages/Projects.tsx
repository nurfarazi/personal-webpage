import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './Projects.css';

type MediaType = 'image' | 'video';

interface ProjectMedia {
  type: MediaType;
  src: string;
  alt: string;
  poster?: string;
}

interface TechCategory {
  label: string;
  items: string[];
}

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
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

const projectData: Project[] = [
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  show: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 24 },
};

const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeProject = useMemo(
    () => projectData.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  useEffect(() => {
    if (!activeProject) {
      setMediaIndex(0);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeProject]);

  const handleOpenProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setMediaIndex(0);
  };

  const handleCloseProject = () => {
    setActiveProjectId(null);
  };

  const buildThumbnailClass = (isActive: boolean) => {
    return isActive ? 'thumbnail is-active' : 'thumbnail';
  };

  return (
    <div className='projects-page'>
      <section className='projects-header'>
        <motion.span
          className='projects-kicker'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Featured Work
        </motion.span>
        <motion.h1
          className='projects-title'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Projects crafted with intent and measurable impact.
        </motion.h1>
        <motion.p
          className='projects-subtitle'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Explore a selection of end-to-end deliveries—from real-time analytics platforms to composable commerce systems—each distilled into a quick overview with deeper context on demand.
        </motion.p>
      </section>

      <motion.div
        className='projects-grid'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {projectData.map((project) => (
          <motion.article
            key={project.id}
            className='project-card'
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -8 }}
          >
            <button
              type='button'
              className='project-card-inner'
              onClick={() => handleOpenProject(project.id)}
            >
              <div className='project-preview'>
                {project.preview.type === 'image' ? (
                  <img src={project.preview.src} alt={project.preview.alt} loading='lazy' />
                ) : (
                  <video
                    src={project.preview.src}
                    poster={project.preview.poster}
                    muted
                    loop
                    playsInline
                    autoPlay={!shouldReduceMotion}
                  />
                )}
              </div>
              <div className='project-content'>
                <div className='project-text'>
                  <h2>{project.title}</h2>
                  <p>{project.tagline}</p>
                </div>
                <div className='tech-tags'>
                  {project.techTags.map((tech) => (
                    <span key={tech} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.span
                  className='project-cta'
                  whileHover={shouldReduceMotion ? undefined : { x: 6 }}
                >
                  View details
                </motion.span>
              </div>
            </button>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='project-modal-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProject}
          >
            <motion.div
              className='project-modal'
              variants={modalVariants}
              initial='hidden'
              animate='show'
              exit='exit'
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type='button' className='modal-close' onClick={handleCloseProject} aria-label='Close project details'>
                X
              </button>

              <div className='modal-media'>
                {activeProject.mediaGallery[mediaIndex]?.type === 'image' ? (
                  <img
                    src={activeProject.mediaGallery[mediaIndex].src}
                    alt={activeProject.mediaGallery[mediaIndex].alt}
                  />
                ) : (
                  <video
                    key={activeProject.mediaGallery[mediaIndex].src}
                    src={activeProject.mediaGallery[mediaIndex].src}
                    poster={activeProject.mediaGallery[mediaIndex].poster}
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                )}

                {activeProject.mediaGallery.length > 1 && (
                  <div className='media-thumbnails'>
                    {activeProject.mediaGallery.map((media, index) => (
                      <button
                        key={media.src}
                        type='button'
                        className={buildThumbnailClass(index === mediaIndex)}
                        onClick={() => setMediaIndex(index)}
                      >
                        {media.type === 'image' ? (
                          <img src={media.src} alt={media.alt} loading='lazy' />
                        ) : (
                          <div className='thumbnail-video'>
                            <img src={media.poster ?? activeProject.preview.src} alt={media.alt} loading='lazy' />
                            <span className='thumbnail-badge'>Play</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className='modal-content'>
                <header className='modal-header'>
                  <h2>{activeProject.title}</h2>
                  <p>{activeProject.tagline}</p>
                </header>

                <section className='modal-section'>
                  {activeProject.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>

                <section className='modal-section'>
                  <h3>Highlights</h3>
                  <ul className='feature-list'>
                    {activeProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>

                <section className='modal-section'>
                  <h3>Tech Stack</h3>
                  <div className='tech-categories'>
                    {activeProject.techCategories.map((category) => (
                      <div key={category.label} className='tech-category'>
                        <span className='tech-category-label'>{category.label}</span>
                        <ul>
                          {category.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {activeProject.links.length > 0 && (
                  <section className='modal-section'>
                    <h3>Links</h3>
                    <div className='modal-links'>
                      {activeProject.links.map((link) => (
                        <a key={link.url} href={link.url} target='_blank' rel='noopener noreferrer'>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {(activeProject.role || activeProject.duration || activeProject.challenges) && (
                  <section className='modal-section meta-grid'>
                    {activeProject.role && (
                      <div className='meta-item'>
                        <span className='meta-label'>Role</span>
                        <span>{activeProject.role}</span>
                      </div>
                    )}
                    {activeProject.duration && (
                      <div className='meta-item'>
                        <span className='meta-label'>Duration</span>
                        <span>{activeProject.duration}</span>
                      </div>
                    )}
                    {activeProject.challenges && (
                      <div className='meta-item'>
                        <span className='meta-label'>Challenges</span>
                        <ul>
                          {activeProject.challenges.map((challenge) => (
                            <li key={challenge}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;