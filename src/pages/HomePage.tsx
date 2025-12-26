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
