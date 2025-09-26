import React from "react";
import { motion, useReducedMotion } from "motion/react";
import type { MotionProps } from "motion/react";
import "../App.css"; // Assuming styles are in App.css or adjust as needed

interface ContactLink {
  url: string;
  text: string;
  className?: string;
}

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const contactLinks: ContactLink[] = [
    { url: "https://www.linkedin.com/in/nurfarazi/", text: "LinkedIn" },
    {
      url: "https://github.com/nurfarazi",
      text: "GitHub",
      className: "github",
    },
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

  // Shared animation presets for hero and section titles
  const heroTitleMotion: MotionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      };

  const heroSubtitleMotion: MotionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
      };

  const getSectionTitleMotion = (delay = 0): MotionProps =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.6 },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    <div className="container">
      <header className="header header-row">
        <div className="header-left">
          <motion.h1 className="hero-title" {...heroTitleMotion}>
            Nur Mohammad Farazi
          </motion.h1>
          <motion.h2 className="hero-subtitle" {...heroSubtitleMotion}>
            Principal Software Engineer
          </motion.h2>
          <p>
            Dhaka, Bangladesh | +8801717369188 |{" "}
            <a href="mailto:nur369188@gmail.com">nur369188@gmail.com</a>
          </p>
          <div className="contact-info">
            {contactLinks.map((link) => (
              <a
                key={link.text}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="header-right">
          <video src="working.webm" autoPlay loop muted playsInline style={{ width: "200px" }} />
        </div>
      </header>

      <section className="section about-me">
        <motion.h2 className="section-title" {...getSectionTitleMotion()}>
          About Me
        </motion.h2>
        <p>
          Experienced Technical Project Manager and Principal Software Engineer
          with 14+ years delivering scalable software and cloud solutions.
          Proven track record leading cross-functional global teams, managing
          complex IT projects across web, mobile, and cloud platforms. Skilled
          in stakeholder alignment, crisis resolution, and project recovery,
          with a hands-on approach to solving real-world problems at scale.
        </p>
      </section>

      <section className="section project-management">
        <motion.h2 className="section-title" {...getSectionTitleMotion(0.05)}>
          Project Management & Leadership
        </motion.h2>
        <ul>
          <li>
            Led cross-functional teams of up to 12, delivering full-cycle
            projects across web, mobile, and cloud platforms.
          </li>
          <li>
            Defined scope, goals, and deliverables aligned with business
            objectives across multiple SaaS products.
          </li>
          <li>
            Managed timelines, sprints, and budgets using Agile (Scrum, Kanban)
            methodologies.
          </li>
          <li>
            Acted as primary liaison between technical teams, stakeholders, and
            external partners.
          </li>
          <li>
            Mentored junior team members and established a software engineer
            evaluation/growth framework.
          </li>
        </ul>
      </section>

      <section className="section tools-methods">
        <motion.h2 className="section-title" {...getSectionTitleMotion(0.1)}>
          Tools & Methods
        </motion.h2>
        <ul>
          <li>
            <strong>Frontend & UI:</strong> Angular (8 yrs), RxJS (4 yrs),
            TypeScript (6 yrs), Bootstrap, SCSS, HTML5, Responsive Design
          </li>
          <li>
            <strong>Backend:</strong> .NET Core (8 yrs), Node.js (8 yrs), REST
            APIs, WebSocket, SignalR
          </li>
          <li>
            <strong>Mobile:</strong> Flutter (1 yr), Ionic (5 yrs), Kotlin
            (Android)
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL (6 yrs), Redis (6 yrs),
            MongoDB (4 yrs), MySQL (5 yrs), DynamoDB (1 yr)
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> AWS (10 yrs – Lambda, EC2, SAM,
            Route 53, RDS, etc.), Firebase (7 yrs), Docker, CI/CD
          </li>
          <li>
            <strong>Architecture & Patterns:</strong> Clean Architecture, CQRS,
            Hexagonal, SOLID, Microservices, gRPC
          </li>
          <li>
            <strong>AI & Automation:</strong> ChatBot, Invoice Automation,
            Workflow Automation
          </li>
          <li>
            <strong>Project & Collaboration Tools:</strong> Jira, YouTrack,
            GitLab Board, GitHub, GitLab, Figma, Miro
          </li>
          <li>
            <strong>Agile Practices:</strong> Scrum, Kanban, Sprint Planning,
            Backlog Grooming
          </li>
          <li>
            <strong>Other:</strong> SignalR, TDD, Technical Writing,
            Documentation Systems
          </li>
        </ul>
      </section>

      <section className="section work-experience">
        <motion.h2 className="section-title" {...getSectionTitleMotion(0.15)}>
          Work Experience
        </motion.h2>
        <div className="work-experience-list">
          {workExperiences.map((experience, index) => (
            <div key={index} className="bento-card">
              <div className="bento-card-logo">
                <img src="https://placehold.co/64x64" alt={experience.company + " logo"} />
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
                <ul>
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section education">
        <motion.h2 className="section-title" {...getSectionTitleMotion(0.2)}>
          Education
        </motion.h2>
        <ul>
          <li>
            <strong>
              BSc in Computer Science and Engineering (2006 - 2010)
            </strong>
            <br />
            State University of Bangladesh
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
