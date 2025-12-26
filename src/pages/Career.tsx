import React from 'react';
import {
  motion,
  useReducedMotion
} from 'motion/react';
import type { Variants } from 'motion/react';
import './Career.css';

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  logo?: string;
  bgGradient?: string;
  keyMetric?: {
    label: string;
    value: string;
  };
  yearStart?: number;
  yearEnd?: number;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const workExperiences: WorkExperience[] = [
  {
    company: 'Kaz Software',
    position: 'Principal Software Engineer',
    duration: 'July 2022 - Current',
    description:
      'Architected and launched a scalable SaaS platform, managing end-to-end delivery across product requirements, team capacity, and Agile sprint cycles.',
    achievements: [
      'Shipped the platform within 2 months, enabling $50K/year in client expansion and reducing AWS infrastructure costs by 40%',
      'Led a globally distributed team of 12 engineers and QA professionals, fostering collaboration and accountability',
      'Standardized coding and documentation practices, improving engineering consistency and onboarding speed by 30%',
      'Partnered with stakeholders to define scope, prioritize backlogs, and align delivery with evolving business goals',
      'Conducted regular code reviews and mentorship sessions to elevate team performance',
      'Enforced best practices for software reliability, security, and scalability across the SDLC',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%23646CFF\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'28\' font-weight=\'bold\' fill=\'white\' font-family=\'system-ui\'%3EKZ%3C/text%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 180, 220, 0.05))',
    keyMetric: { label: 'Team Led', value: '12' },
    yearStart: 2022,
    yearEnd: 2025,
  },
  {
    company: 'CholPori',
    position: 'Technical Lead',
    duration: 'Oct 2020 - June 2022',
    description:
      'Led critical infrastructure development and resolved delivery bottlenecks for a kid-friendly digital education platform.',
    achievements: [
      'Led a 12-member cross-functional team to design and deliver an education platform from ground up',
      'Developed a no-code, drag-and-drop lesson builder with interactive features',
      'Engineered a real-time content-serving system with live student performance insights',
      'Managed full SDLC using .NET Core, Angular, Firebase, and Docker',
      'Implemented a company-wide software engineer evaluation framework',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%2310B981\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Cpath fill=\'white\' d=\'M32 20 L40 28 L32 36 L24 28 Z M28 32 L32 36 L36 32\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))',
    keyMetric: { label: 'Team Led', value: '12' },
    yearStart: 2020,
    yearEnd: 2022,
  },
  {
    company: 'Jeeon Bangladesh Ltd',
    position: 'Senior Software Engineer',
    duration: 'June 2016 - Sept 2020',
    description:
      'Developed innovative healthcare solutions focusing on accessibility and offline capabilities.',
    achievements: [
      'Launched an SMS-based medicine ordering system, increasing DAU by 55% with 10,000+ users',
      'Built and maintained a reliable eHealth payments platform',
      'Led development of high-availability systems with end-to-end responsibility',
      'Established efficient build and testing pipelines using Docker and CI/CD',
      'Enhanced product workflows with real-time features using Socket.IO and RxJS',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%23EF4444\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Cpath fill=\'white\' d=\'M32 20 L42 26 L42 42 L22 42 L22 26 Z M32 28 L28 34 L32 38 L36 34 Z\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(252, 165, 165, 0.05))',
    keyMetric: { label: 'DAU Growth', value: '55%' },
    yearStart: 2016,
    yearEnd: 2020,
  },
  {
    company: 'AGD IT SOLUTION Sdn Bhd',
    position: 'Senior Software Engineer',
    duration: 'April 2015 - May 2016',
    description:
      'Led development of a scalable vehicle tracking system with real-time capabilities.',
    achievements: [
      'Led a team of 6 engineers to build a tracking system using Node.js and Google Maps API',
      'Designed microservices architecture for improved fault tolerance',
      'Reduced deployment time by 50% through automated pipelines',
      'Integrated real-time tracking features using Ionic and Objective-C',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%233B82F6\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Cpath fill=\'white\' d=\'M32 22 C34.2 22 36 23.8 36 26 L36 38 C36 40.2 34.2 42 32 42 C29.8 42 28 40.2 28 38 L28 26 C28 23.8 29.8 22 32 22\' stroke=\'white\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05))',
    keyMetric: { label: 'Deployment Speed', value: '50%' },
    yearStart: 2015,
    yearEnd: 2016,
  },
  {
    company: 'Dream71 Bangladesh Ltd',
    position: 'Senior Software Engineer',
    duration: 'Oct 2014 - April 2015',
    description:
      'Specialized in real-time applications and game development.',
    achievements: [
      'Built a real-time cricket dashboard with minimal latency',
      'Led Unity3D game development with successful user retention',
      'Streamlined asset integration and build automation',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%23F59E0B\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Ccircle cx=\'32\' cy=\'24\' r=\'4\' fill=\'white\'/%3E%3Cpath fill=\'white\' d=\'M24 35 L32 42 L40 35 Z\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(253, 224, 71, 0.05))',
    keyMetric: { label: 'Real-time', value: 'Gaming' },
    yearStart: 2014,
    yearEnd: 2015,
  },
  {
    company: 'Independent Game Developer',
    position: 'Freelance Developer',
    duration: 'April 2013 - Sept 2014',
    description: 'Developed custom 2D games for international clients.',
    achievements: [
      'Created games using Objective-C, C#, Cocos2D, and Box2D',
      'Delivered high-quality solutions across multiple game genres',
      'Managed full development cycles independently',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%2300D9FF\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Crect x=\'22\' y=\'20\' width=\'8\' height=\'24\' fill=\'white\'/%3E%3Crect x=\'34\' y=\'20\' width=\'8\' height=\'24\' fill=\'white\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 180, 220, 0.05))',
    keyMetric: { label: 'Projects', value: '20+' },
    yearStart: 2013,
    yearEnd: 2014,
  },
  {
    company: 'Rise Up Labs',
    position: 'Creative Director',
    duration: 'Nov 2011 - Sept 2012',
    description: 'Led game design and development direction.',
    achievements: [
      'Directed game logic and level design teams',
      'Created engaging game mechanics and environments',
      'Delivered polished games on schedule',
    ],
    logo: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect fill=\'%23EC4899\' width=\'64\' height=\'64\' rx=\'12\'/%3E%3Cpath fill=\'white\' d=\'M32 18 L42 26 L40 40 L24 40 L22 26 Z\'/%3E%3C/svg%3E',
    bgGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.05))',
    keyMetric: { label: 'Leadership', value: '3+ Teams' },
    yearStart: 2011,
    yearEnd: 2012,
  },
];

const Career: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionInitial = shouldReduceMotion ? false : 'hidden';
  const sectionAnimate = shouldReduceMotion ? false : 'show';

  return (
    <motion.div
      className="container career-page"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.header
        className="career-header"
        variants={headerVariants}
        initial={sectionInitial}
        animate={sectionAnimate}
      >
        <motion.h1 className="career-title" variants={headerItemVariants}>
          Career
        </motion.h1>
        <motion.p className="career-subtitle" variants={headerItemVariants}>
          Work experience and leadership highlights across product, platform, and team growth.
        </motion.p>
      </motion.header>

      <motion.section
        className="section work-experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={headerItemVariants}>
          Work Experience
        </motion.h2>
        <motion.div className="work-experience-list" variants={sectionVariants}>
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bento-card"
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : {
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                background: experience.bgGradient ? `${experience.bgGradient}, var(--bg-card)` : 'var(--bg-card)'
              }}
            >
              <div className="bento-card-logo">
                <motion.img
                  src={experience.logo || 'https://placehold.co/64x64'}
                  alt={experience.company + ' logo'}
                  whileHover={shouldReduceMotion ? undefined : {
                    rotate: 5,
                    scale: 1.1
                  }}
                />
              </div>
              <div className="bento-card-content">
                <div className="experience-header">
                  <div className="header-top">
                    <div>
                      <h3>{experience.company}</h3>
                      <span className="position">{experience.position}</span>
                    </div>
                    {experience.keyMetric && (
                      <div className="key-metric-badge">
                        <div className="metric-value">{experience.keyMetric.value}</div>
                        <div className="metric-label">{experience.keyMetric.label}</div>
                      </div>
                    )}
                  </div>
                  <div className="timeline-bar">
                    <span className="year-start">{experience.yearStart}</span>
                    <div className="bar-line"></div>
                    <span className="year-end">{experience.yearEnd}</span>
                  </div>
                </div>
                <p className="experience-description">
                  {experience.description}
                </p>
                <motion.ul variants={sectionVariants}>
                  {experience.achievements.map((achievement, i) => (
                    <motion.li key={i} variants={listItemVariants}>
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Career;
