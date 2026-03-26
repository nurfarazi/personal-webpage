import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Target, Lightbulb, Code2, Trophy } from 'lucide-react';
import './Projects.css';
import { projects } from './projectsData';
import { getYouTubePoster } from '../utils/youtube';


interface ProjectAchievement {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  challenge: string;
  solution: string;
  techStack: string;
  outcomes: string[];
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projectAchievements: ProjectAchievement[] = [
  {
    id: 'evv-healthcare',
    title: 'EVV Healthcare Compliance SaaS Platform',
    company: 'Kaz Software',
    period: '2022-Present',
    role: 'Technical Project Manager & Lead Architect',
    challenge: 'Design multi-tenant SaaS platform meeting US healthcare compliance requirements within 8-month timeline',
    solution: 'Architected microservices-based system, led 12-person distributed team using Agile practices',
    techStack: '.NET Core, Angular, PostgreSQL, AWS (Lambda, RDS, EC2), Docker, CI/CD',
    outcomes: [
      'Delivered MVP in 2 months enabling $50K/year client expansion',
      'Reduced AWS costs by 40%',
      'Achieved 99.9% uptime'
    ]
  },
  {
    id: 'edtech-platform',
    title: 'EdTech Digital Learning Platform',
    company: 'CholPori',
    period: '2020-2022',
    role: 'Technical Lead & Project Manager',
    challenge: 'Rescue delayed project and deliver comprehensive kid-friendly education platform',
    solution: 'Restructured team workflows, implemented daily standups, designed real-time content delivery system',
    techStack: '.NET Core, Angular, Firebase, SignalR, Docker',
    outcomes: [
      'Recovered 3-month delay',
      'Built lesson builder reducing content creation time by 70%',
      '500+ educator adoption'
    ]
  },
  {
    id: 'healthcare-payments',
    title: 'Healthcare Payments & Medicine Ordering System',
    company: 'Jeeon Bangladesh',
    period: '2016-2020',
    role: 'Senior Software Engineer & Technical Lead',
    challenge: 'Enable medicine ordering for users without reliable internet connectivity',
    solution: 'Designed SMS-based offline-first ordering system with automated payment integration',
    techStack: 'Node.js, .NET Core, Kotlin, Angular, Firebase, Socket.IO',
    outcomes: [
      'Reached 10,000+ active users within 6 months',
      'Increased DAU by 55%',
      'Established reputation as reliable eHealth provider'
    ]
  }
];

const extractMetric = (text: string): string | null => {
  const patterns = [
    /\d+(?:,\d{3})*(?:\.\d+)?%/,
    /\d+(?:,\d{3})*\+?/,
    /\$[\d,]+K/,
    /\d+\s+(?:months?|years?|days?|weeks?)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  return null;
};

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className='projects-page'>
      <motion.div
        className='projects-grid'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {[...projects]
          .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999))
          .map((project) => (
          <motion.article
            key={project.id}
            className='project-card'
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -10 }}
          >
            <Link to={`/projects/${project.id}`} className='project-card-inner'>
              <div className='project-preview'>
                {project.preview.type === 'image' ? (
                  <img src={project.preview.src} alt={project.preview.alt} loading='lazy' />
                ) : project.preview.type === 'video' ? (
                  <video
                    src={project.preview.src}
                    poster={project.preview.poster}
                    muted
                    loop
                    playsInline
                    autoPlay={!shouldReduceMotion}
                  />
                ) : (
                  <div className='project-preview-youtube'>
                    {(() => {
                      const posterSrc = getYouTubePoster(
                        project.preview.src,
                        project.preview.poster,
                      );
                      return posterSrc ? (
                        <img src={posterSrc} alt={project.preview.alt} loading='lazy' />
                      ) : (
                        <div className='project-preview-youtube-fallback' aria-hidden='true' />
                      );
                    })()}
                    <span className='project-preview-youtube-icon' aria-hidden='true' />
                  </div>
                )}
              </div>
              <h2 className='project-card-title'>{project.title}</h2>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <motion.section
        className='achievements-section'
        variants={sectionVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className='achievements-header' variants={cardVariants}>
          <div className='achievements-header-accent' />
          <h2>Notable Project Achievements</h2>
          <p>Delivering scalable solutions through technical leadership and strategic architecture</p>
        </motion.div>

        <motion.div className='achievements-grid' variants={sectionVariants}>
          {projectAchievements.map((project, index) => (
            <motion.article
              key={project.id}
              className='achievement-card'
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { 
                y: -5,
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)'
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className='achievement-index'>{String(index + 1).padStart(2, '0')}</div>

              <div className='achievement-header'>
                <div className='achievement-title-block'>
                  <h3 className='achievement-title'>{project.title}</h3>
                  <div className='achievement-meta'>
                    <span className='achievement-company'>{project.company}</span>
                    <span className='achievement-separator'>|</span>
                    <span className='achievement-period'>{project.period}</span>
                  </div>
                </div>
                <div className='achievement-role-badge'>{project.role}</div>
              </div>

              <div className='achievement-content'>
                <div className='achievement-item'>
                  <div className='achievement-item-header'>
                    <div className='achievement-icon'>
                      <Target size={18} strokeWidth={2.5} />
                    </div>
                    <span className='achievement-label'>Challenge</span>
                  </div>
                  <p className='achievement-text'>{project.challenge}</p>
                </div>

                <div className='achievement-item'>
                  <div className='achievement-item-header'>
                    <div className='achievement-icon'>
                      <Lightbulb size={18} strokeWidth={2.5} />
                    </div>
                    <span className='achievement-label'>Solution</span>
                  </div>
                  <p className='achievement-text'>{project.solution}</p>
                </div>

                <div className='achievement-item'>
                  <div className='achievement-item-header'>
                    <div className='achievement-icon'>
                      <Code2 size={18} strokeWidth={2.5} />
                    </div>
                    <span className='achievement-label'>Tech Stack</span>
                  </div>
                  <div className='achievement-tech-tags'>
                    {project.techStack.split(', ').map((tech) => (
                      <span key={tech} className='achievement-tech-tag'>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className='achievement-item'>
                  <div className='achievement-item-header'>
                    <div className='achievement-icon'>
                      <Trophy size={18} strokeWidth={2.5} />
                    </div>
                    <span className='achievement-label'>Outcomes</span>
                  </div>
                  <div className='achievement-outcomes-grid'>
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className='outcome-card'>
                        <div className='outcome-content'>
                          <p className='outcome-text'>{outcome}</p>
                          {extractMetric(outcome) && (
                            <div className='outcome-metric'>
                              {extractMetric(outcome)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Projects;
