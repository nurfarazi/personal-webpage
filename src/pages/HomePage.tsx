import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate
} from "motion/react";
import type { Variants } from "motion/react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "../App.css";
import ToolsSection from "../components/ToolsSection";



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

// Publication interface removed (was used by a publications array that's no longer in use)

// Motion variants for staggered animations

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
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

const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for glow effect
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowXSpring = useSpring(glowX, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });
  const glowYSpring = useSpring(glowY, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });
  const glowBackground = useMotionTemplate`
    radial-gradient(300px circle at ${glowXSpring}% ${glowYSpring}%, rgba(0, 217, 255, 0.15), transparent 70%)
  `;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    
    try {
      const bounds = sectionRef.current.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      
      glowX.set(Math.min(100, Math.max(0, x)));
      glowY.set(Math.min(100, Math.max(0, y)));
    } catch (e) {
      // Silently handle any pointer tracking errors
    }
  };

  const handlePointerLeave = () => {
    if (shouldReduceMotion) return;
    try {
      glowX.set(50);
      glowY.set(50);
    } catch (e) {
      // Silently handle any pointer tracking errors
    }
  };



  // publications removed to satisfy eslint no-unused-vars (was previously an unused array of Publication)

  const workExperiences: WorkExperience[] = [
    {
      company: "Kaz Software",
      position: "Principal Software Engineer",
      duration: "July 2022 - Current",
      description:
        "Architected and launched a scalable SaaS platform, managing end-to-end delivery across product requirements, team capacity, and Agile sprint cycles.",
      achievements: [
        "Shipped the platform within 2 months, enabling $50K/year in client expansion and reducing AWS infrastructure costs by 40%",
        "Led a globally distributed team of 12 engineers and QA professionals, fostering collaboration and accountability",
        "Standardized coding and documentation practices, improving engineering consistency and onboarding speed by 30%",
        "Partnered with stakeholders to define scope, prioritize backlogs, and align delivery with evolving business goals",
        "Conducted regular code reviews and mentorship sessions to elevate team performance",
        "Enforced best practices for software reliability, security, and scalability across the SDLC",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%23646CFF' width='64' height='64' rx='12'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='28' font-weight='bold' fill='white' font-family='system-ui'%3EKZ%3C/text%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 180, 220, 0.05))",
      keyMetric: { label: "Team Led", value: "12" },
      yearStart: 2022,
      yearEnd: 2025,
    },
    {
      company: "CholPori",
      position: "Technical Lead",
      duration: "Oct 2020 - June 2022",
      description:
        "Led critical infrastructure development and resolved delivery bottlenecks for a kid-friendly digital education platform.",
      achievements: [
        "Led a 12-member cross-functional team to design and deliver an education platform from ground up",
        "Developed a no-code, drag-and-drop lesson builder with interactive features",
        "Engineered a real-time content-serving system with live student performance insights",
        "Managed full SDLC using .NET Core, Angular, Firebase, and Docker",
        "Implemented a company-wide software engineer evaluation framework",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%2310B981' width='64' height='64' rx='12'/%3E%3Cpath fill='white' d='M32 20 L40 28 L32 36 L24 28 Z M28 32 L32 36 L36 32'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))",
      keyMetric: { label: "Team Led", value: "12" },
      yearStart: 2020,
      yearEnd: 2022,
    },
    {
      company: "Jeeon Bangladesh Ltd",
      position: "Senior Software Engineer",
      duration: "June 2016 - Sept 2020",
      description:
        "Developed innovative healthcare solutions focusing on accessibility and offline capabilities.",
      achievements: [
        "Launched an SMS-based medicine ordering system, increasing DAU by 55% with 10,000+ users",
        "Built and maintained a reliable eHealth payments platform",
        "Led development of high-availability systems with end-to-end responsibility",
        "Established efficient build and testing pipelines using Docker and CI/CD",
        "Enhanced product workflows with real-time features using Socket.IO and RxJS",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%23EF4444' width='64' height='64' rx='12'/%3E%3Cpath fill='white' d='M32 20 L42 26 L42 42 L22 42 L22 26 Z M32 28 L28 34 L32 38 L36 34 Z'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(252, 165, 165, 0.05))",
      keyMetric: { label: "DAU Growth", value: "55%" },
      yearStart: 2016,
      yearEnd: 2020,
    },
    {
      company: "AGD IT SOLUTION Sdn Bhd",
      position: "Senior Software Engineer",
      duration: "April 2015 - May 2016",
      description:
        "Led development of a scalable vehicle tracking system with real-time capabilities.",
      achievements: [
        "Led a team of 6 engineers to build a tracking system using Node.js and Google Maps API",
        "Designed microservices architecture for improved fault tolerance",
        "Reduced deployment time by 50% through automated pipelines",
        "Integrated real-time tracking features using Ionic and Objective-C",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%233B82F6' width='64' height='64' rx='12'/%3E%3Cpath fill='white' d='M32 22 C34.2 22 36 23.8 36 26 L36 38 C36 40.2 34.2 42 32 42 C29.8 42 28 40.2 28 38 L28 26 C28 23.8 29.8 22 32 22' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05))",
      keyMetric: { label: "Deployment Speed", value: "50% ↑" },
      yearStart: 2015,
      yearEnd: 2016,
    },
    {
      company: "Dream71 Bangladesh Ltd",
      position: "Senior Software Engineer",
      duration: "Oct 2014 - April 2015",
      description:
        "Specialized in real-time applications and game development.",
      achievements: [
        "Built a real-time cricket dashboard with minimal latency",
        "Led Unity3D game development with successful user retention",
        "Streamlined asset integration and build automation",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%23F59E0B' width='64' height='64' rx='12'/%3E%3Ccircle cx='32' cy='24' r='4' fill='white'/%3E%3Cpath fill='white' d='M24 35 L32 42 L40 35 Z'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(253, 224, 71, 0.05))",
      keyMetric: { label: "Real-time", value: "Gaming" },
      yearStart: 2014,
      yearEnd: 2015,
    },
    {
      company: "Independent Game Developer",
      position: "Freelance Developer",
      duration: "April 2013 - Sept 2014",
      description: "Developed custom 2D games for international clients.",
      achievements: [
        "Created games using Objective-C, C#, Cocos2D, and Box2D",
        "Delivered high-quality solutions across multiple game genres",
        "Managed full development cycles independently",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%2300D9FF' width='64' height='64' rx='12'/%3E%3Crect x='22' y='20' width='8' height='24' fill='white'/%3E%3Crect x='34' y='20' width='8' height='24' fill='white'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 180, 220, 0.05))",
      keyMetric: { label: "Projects", value: "20+" },
      yearStart: 2013,
      yearEnd: 2014,
    },
    {
      company: "Rise Up Labs",
      position: "Creative Director",
      duration: "Nov 2011 - Sept 2012",
      description: "Led game design and development direction.",
      achievements: [
        "Directed game logic and level design teams",
        "Created engaging game mechanics and environments",
        "Delivered polished games on schedule",
      ],
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect fill='%23EC4899' width='64' height='64' rx='12'/%3E%3Cpath fill='white' d='M32 18 L42 26 L40 40 L24 40 L22 26 Z'/%3E%3C/svg%3E",
      bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.05))",
      keyMetric: { label: "Leadership", value: "3+ Teams" },
      yearStart: 2011,
      yearEnd: 2012,
    },
  ];



  const sectionInitial = shouldReduceMotion ? false : 'hidden';
  const sectionAnimate = shouldReduceMotion ? false : 'show';

  return (
    <motion.div 
      className="container home-page"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Interactive glow effect */}
      {!shouldReduceMotion && (
        <motion.span
          className="home-glow"
          style={{ background: glowBackground }}
          aria-hidden="true"
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [0.98, 1.02, 0.98] 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      )}

      <motion.header 
        className="header header-row"
        variants={heroVariants}
        initial={sectionInitial}
        animate={sectionAnimate}
      >
        <div className="header-left">
          <motion.h1 className="hero-title" variants={heroItemVariants}>
            Nur Mohammad Farazi
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={heroItemVariants}>
            Principal Software Engineer
          </motion.h2>
        </div>
        <motion.div className="header-right" variants={heroItemVariants}>
          <motion.div
            className="contact-cta"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Link to="/contact" className="contact-btn">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      <motion.section 
        className="section about-me"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          About Me
        </motion.h2>
        <motion.p variants={heroItemVariants}>
          Experienced <span className="highlight-text highlight-primary">Backend Engineer</span> and <span className="highlight-text highlight-dark">Technical Project Manager</span>
          with <span className="highlight-text highlight-primary">15+ years</span> delivering scalable software and cloud solutions.
          <span className="highlight-text highlight-dark">Backend-focused</span> with expertise in system design, optimization, and full-stack development using <span className="highlight-text highlight-primary">Angular</span> and <span className="highlight-text highlight-primary">TypeScript</span>.
          Proven track record leading <span className="highlight-text highlight-dark">cross-functional global teams</span>, managing
          complex IT projects across web, mobile, and cloud platforms. Skilled
          in stakeholder alignment, crisis resolution, and project recovery,
          with a <span className="highlight-text highlight-primary">hands-on</span> approach to solving real-world problems at scale.
        </motion.p>
      </motion.section>

      <motion.section 
        className="section project-management"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          Project Management & Leadership
        </motion.h2>
        <motion.ul variants={sectionVariants}>
          <motion.li variants={listItemVariants}>
            Led <span className="highlight-text highlight-primary">cross-functional teams</span> of up to <span className="highlight-text highlight-dark">12</span>, delivering <span className="highlight-text highlight-primary">full-cycle
            projects</span> across web, mobile, and cloud platforms.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Defined scope, goals, and deliverables aligned with <span className="highlight-text highlight-dark">business
            objectives</span> across multiple <span className="highlight-text highlight-primary">SaaS products</span>.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Managed timelines, sprints, and budgets using <span className="highlight-text highlight-primary">Agile</span> (<span className="highlight-text highlight-dark">Scrum</span>, <span className="highlight-text highlight-dark">Kanban</span>)
            methodologies.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Acted as <span className="highlight-text highlight-primary">primary liaison</span> between technical teams, stakeholders, and
            external partners.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <span className="highlight-text highlight-dark">Mentored</span> junior team members and established a <span className="highlight-text highlight-primary">software engineer
            evaluation/growth framework</span>.
          </motion.li>
        </motion.ul>
      </motion.section>

      <ToolsSection />

      <motion.section 
        className="section github-stats"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          GitHub Activity
        </motion.h2>
        <motion.div className="stats-grid" variants={sectionVariants}>
          <motion.div className="stat-card" variants={cardVariants}>
            <div className="stat-value">97</div>
            <div className="stat-label">Public Repositories</div>
          </motion.div>
          <motion.div className="stat-card" variants={cardVariants}>
            <div className="stat-value">14</div>
            <div className="stat-label">Followers</div>
          </motion.div>
          <motion.div className="stat-card" variants={cardVariants}>
            <div className="stat-value">31</div>
            <div className="stat-label">Following</div>
          </motion.div>
          <motion.div className="stat-card" variants={cardVariants}>
            <div className="stat-value">14+</div>
            <div className="stat-label">Years Experience</div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="github-charts"
          variants={heroItemVariants}
          style={{ marginTop: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}
        >
          <motion.img
            src="https://github-readme-streak-stats.herokuapp.com/?user=nurfarazi&theme=transparent&hide_border=true&stroke=00D9FF&ring=00D9FF&fire=00B4DC&currStreakLabel=00D9FF"
            alt="GitHub Streak Stats"
            style={{ width: '100%', maxWidth: '800px', margin: '0 auto', borderRadius: 'var(--radius-lg)' }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          />
          <motion.img
            src="https://github-readme-activity-graph.vercel.app/graph?username=nurfarazi&theme=github-compact&hide_border=true&bg_color=00000000&color=00D9FF&line=00B4DC&point=00D9FF"
            alt="GitHub Activity Graph"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          />
        </motion.div>
      </motion.section>


      <motion.section 
        className="section work-experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
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
                  src={experience.logo || "https://placehold.co/64x64"}
                  alt={experience.company + " logo"}
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

      <motion.section 
        className="section education"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          Education
        </motion.h2>
        <motion.ul variants={sectionVariants}>
          <motion.li variants={listItemVariants}>
            <strong>
              BSc in Computer Science and Engineering (2006 - 2010)
            </strong>
            <br />
            State University of Bangladesh
          </motion.li>
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
