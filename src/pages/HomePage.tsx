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
          with <span className="highlight-text highlight-primary">14+ years</span> delivering scalable software and cloud solutions.
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
            <strong>Frontend & UI:</strong> <span className="highlight-text highlight-primary">Angular</span> (8 yrs), <span className="highlight-text highlight-dark">RxJS</span> (4 yrs),
            <span className="highlight-text highlight-primary">TypeScript</span> (6 yrs), Bootstrap, SCSS, HTML5, Responsive Design
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Backend:</strong> <span className="highlight-text highlight-primary">.NET Core</span> (8 yrs), <span className="highlight-text highlight-dark">Node.js</span> (8 yrs), WebSocket, SignalR
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Mobile:</strong> Flutter (1 yr), Ionic (5 yrs)
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Databases:</strong> PostgreSQL (6 yrs), Redis (6 yrs),
            MongoDB (4 yrs), MySQL (5 yrs), DynamoDB (1 yr)
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Cloud & DevOps:</strong> <span className="highlight-text highlight-primary">AWS</span> (10 yrs - Lambda, EC2, SAM,
            Route 53, RDS, etc.), Firebase (7 yrs), Docker, CI/CD
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Architecture & Patterns:</strong> <span className="highlight-text highlight-dark">Clean Architecture</span>, CQRS,
            Hexagonal, SOLID, <span className="highlight-text highlight-primary">Microservices</span>, gRPC
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
            <strong>Agile Practices:</strong> <span className="highlight-text highlight-dark">Scrum</span>, Kanban, Sprint Planning,
            Backlog Grooming
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Other:</strong> SignalR, <span className="highlight-text highlight-dark">TDD</span>, Technical Writing,
            Documentation Systems
          </motion.li>
        </motion.ul>
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
