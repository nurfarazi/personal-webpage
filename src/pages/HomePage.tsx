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



interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  highlights: string[];
  stars?: number;
  language?: string;
}

interface Publication {
  title: string;
  platform: string;
  date: string;
  url: string;
  excerpt: string;
}

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
    radial-gradient(300px circle at ${glowXSpring}% ${glowYSpring}%, rgba(100, 108, 255, 0.15), transparent 70%)
  `;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    
    const bounds = sectionRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    
    glowX.set(Math.min(100, Math.max(0, x)));
    glowY.set(Math.min(100, Math.max(0, y)));
  };

  const handlePointerLeave = () => {
    if (shouldReduceMotion) return;
    glowX.set(50);
    glowY.set(50);
  };



  const publications: Publication[] = [
    {
      title: "Building Scalable Microservices with .NET 8",
      platform: "Medium",
      date: "2024",
      url: "https://medium.com/@nur369188",
      excerpt: "Exploring modern microservices architecture patterns, gRPC communication, and CQRS implementation in .NET 8."
    },
    {
      title: "Mastering Design Patterns in C#",
      platform: "Medium",
      date: "2024",
      url: "https://medium.com/@nur369188",
      excerpt: "A comprehensive guide to implementing creational, structural, and behavioral design patterns in C# and .NET."
    },
    {
      title: "System Design Best Practices",
      platform: "Medium",
      date: "2024",
      url: "https://medium.com/@nur369188",
      excerpt: "Deep dive into system design principles, scalability patterns, and architectural decision-making for modern applications."
    }
  ];

  const featuredProjects: Project[] = [
    {
      name: "Organic Shop MicroServices",
      description: "A microservices-based e-commerce platform built using .NET 8, ASP.NET Core, Docker, RabbitMQ, and other modern technologies. Implements core e-commerce features as independent microservices communicating through gRPC and RabbitMQ.",
      techStack: ["C#", ".NET 8", "Docker", "RabbitMQ", "gRPC", "CQRS", "Microservices"],
      githubUrl: "https://github.com/nurfarazi/Organic-Shop-MicroServices",
      highlights: [
        "Microservices architecture with API Gateway",
        "gRPC for inter-service communication",
        "RabbitMQ message broker integration",
        "CQRS pattern implementation",
        "FluentValidation for request validation"
      ],
      stars: 1,
      language: "C#"
    },
    {
      name: "SafeMailer",
      description: "A robust email delivery system designed to ensure high reliability and fault tolerance by managing multiple third-party email services. Integrates seamlessly with providers like SendGrid, Gmail, and Yahoo.",
      techStack: ["C#", ".NET", "Email Services", "Fault Tolerance"],
      githubUrl: "https://github.com/nurfarazi/SafeMailer",
      highlights: [
        "Multiple email provider integration",
        "Automatic fallback mechanism",
        "High reliability & fault tolerance",
        "Seamless provider switching"
      ],
      language: "C#"
    },
    {
      name: "Design Patterns",
      description: "Comprehensive demonstration of creational, structural, and behavioral design patterns implemented in C# and .NET 8. A learning resource for understanding software design principles.",
      techStack: ["C#", ".NET 8", "Design Patterns", "SOLID"],
      githubUrl: "https://github.com/nurfarazi/design-patterns",
      highlights: [
        "Singleton, Factory, Builder patterns",
        "Facade, Proxy, Flyweight patterns",
        "Comprehensive examples",
        "Best practices implementation"
      ],
      stars: 1,
      language: "C#"
    },
    {
      name: "Fine Tracker",
      description: "A tracking system built with modern technologies for managing and monitoring fines efficiently.",
      techStack: ["Shell", "Automation", "Tracking"],
      githubUrl: "https://github.com/nurfarazi/fine-tracker",
      highlights: [
        "Automated tracking system",
        "Efficient data management",
        "Real-time monitoring"
      ],
      language: "Shell"
    },
    {
      name: "Express TypeScript 2024",
      description: "A modern Express.js backend application built with TypeScript, showcasing best practices for building scalable Node.js applications.",
      techStack: ["TypeScript", "Express.js", "Node.js", "REST API"],
      githubUrl: "https://github.com/nurfarazi/express-typescript-2024",
      highlights: [
        "Type-safe backend development",
        "Modern Express.js patterns",
        "RESTful API design",
        "Scalable architecture"
      ],
      language: "TypeScript"
    },
    {
      name: "ThreadingPlay",
      description: "Thread-safe shared data structures demonstrating concurrency patterns and ensuring correctness in multithreaded applications.",
      techStack: ["C#", "Concurrency", "Threading", "Parallel Programming"],
      githubUrl: "https://github.com/nurfarazi/ThreadingPlay",
      highlights: [
        "Thread-safe data structures",
        "Concurrency patterns",
        "Race condition prevention",
        "Performance optimization"
      ],
      language: "C#"
    }
  ];

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
    },
  ];



  const sectionInitial = shouldReduceMotion ? false : 'hidden';
  const sectionAnimate = shouldReduceMotion ? false : 'show';

  return (
    <motion.div 
      className="container"
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
          Experienced Backend Engineer and Technical Project Manager
          with 14+ years delivering scalable software and cloud solutions.
          Backend-focused with expertise in system design, optimization, and full-stack development using Angular and TypeScript.
          Proven track record leading cross-functional global teams, managing
          complex IT projects across web, mobile, and cloud platforms. Skilled
          in stakeholder alignment, crisis resolution, and project recovery,
          with a hands-on approach to solving real-world problems at scale.
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
            Led cross-functional teams of up to 12, delivering full-cycle
            projects across web, mobile, and cloud platforms.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Defined scope, goals, and deliverables aligned with business
            objectives across multiple SaaS products.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Managed timelines, sprints, and budgets using Agile (Scrum, Kanban)
            methodologies.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Acted as primary liaison between technical teams, stakeholders, and
            external partners.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Mentored junior team members and established a software engineer
            evaluation/growth framework.
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section 
        className="section tools-methods"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          Tools & Methods
        </motion.h2>
        <motion.ul variants={sectionVariants}>
          <motion.li variants={listItemVariants}>
            <strong>Frontend & UI:</strong> Angular (8 yrs), RxJS (4 yrs),
            TypeScript (6 yrs), Bootstrap, SCSS, HTML5, Responsive Design
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Backend:</strong> .NET Core (8 yrs), Node.js (8 yrs), REST
            APIs, WebSocket, SignalR
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Mobile:</strong> Flutter (1 yr), Ionic (5 yrs), Kotlin
            (Android)
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Databases:</strong> PostgreSQL (6 yrs), Redis (6 yrs),
            MongoDB (4 yrs), MySQL (5 yrs), DynamoDB (1 yr)
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Cloud & DevOps:</strong> AWS (10 yrs – Lambda, EC2, SAM,
            Route 53, RDS, etc.), Firebase (7 yrs), Docker, CI/CD
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Architecture & Patterns:</strong> Clean Architecture, CQRS,
            Hexagonal, SOLID, Microservices, gRPC
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>AI & Automation:</strong> ChatBot, Invoice Automation,
            Workflow Automation
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Project & Collaboration Tools:</strong> Jira, YouTrack,
            GitLab Board, GitHub, GitLab, Figma, Miro
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Agile Practices:</strong> Scrum, Kanban, Sprint Planning,
            Backlog Grooming
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Other:</strong> SignalR, TDD, Technical Writing,
            Documentation Systems
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section 
        className="section featured-projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          Featured Projects
        </motion.h2>
        <motion.p className="section-subtitle" variants={heroItemVariants}>
          A selection of open-source projects and contributions
        </motion.p>
        <motion.div className="projects-grid" variants={sectionVariants}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : {
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-header">
                <div className="project-title-row">
                  <motion.h3
                    whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={shouldReduceMotion ? undefined : { 
                      scale: 1.2,
                      rotate: 5 
                    }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
                <div className="project-meta">
                  {project.language && (
                    <span className="project-language">
                      <span className="language-dot"></span>
                      {project.language}
                    </span>
                  )}
                  {project.stars !== undefined && (
                    <span className="project-stars">
                      ⭐ {project.stars}
                    </span>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-badge"
                    whileHover={shouldReduceMotion ? undefined : {
                      scale: 1.1,
                      y: -2
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.ul className="project-highlights" variants={sectionVariants}>
                {project.highlights.map((highlight, i) => (
                  <motion.li key={i} variants={listItemVariants}>
                    {highlight}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

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
            src="https://github-readme-streak-stats.herokuapp.com/?user=nurfarazi&theme=transparent&hide_border=true&stroke=646CFF&ring=646CFF&fire=9333EA&currStreakLabel=646CFF"
            alt="GitHub Streak Stats"
            style={{ width: '100%', maxWidth: '800px', margin: '0 auto', borderRadius: 'var(--radius-lg)' }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          />
          <motion.img
            src="https://github-readme-activity-graph.vercel.app/graph?username=nurfarazi&theme=github-compact&hide_border=true&bg_color=00000000&color=646CFF&line=9333EA&point=646CFF"
            alt="GitHub Activity Graph"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          />
        </motion.div>
      </motion.section>

      <motion.section 
        className="section publications"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={heroItemVariants}>
          Publications & Writing
        </motion.h2>
        <motion.p className="section-subtitle" variants={heroItemVariants}>
          Technical articles and insights on software engineering
        </motion.p>
        <motion.div className="publications-list" variants={sectionVariants}>
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              className="publication-card"
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : {
                x: 8,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="publication-title">{publication.title}</h3>
              <div className="publication-meta">
                <span>{publication.platform}</span>
                <span>•</span>
                <span>{publication.date}</span>
              </div>
              <p className="publication-excerpt">{publication.excerpt}</p>
              <motion.a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              >
                Read Article →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}
          variants={heroItemVariants}
        >
          <motion.a
            href="https://medium.com/@nur369188"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            style={{ display: 'inline-block' }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            View All Articles on Medium
          </motion.a>
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
            >
              <div className="bento-card-logo">
                <motion.img 
                  src="https://placehold.co/64x64" 
                  alt={experience.company + " logo"}
                  whileHover={shouldReduceMotion ? undefined : { 
                    rotate: 5,
                    scale: 1.1 
                  }}
                />
              </div>
              <div className="bento-card-content">
                <div className="experience-header">
                  <h3>{experience.company}</h3>
                  <div className="position-meta">
                    <span className="position">{experience.position}</span>
                    <span className="duration">{experience.duration}</span>
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
