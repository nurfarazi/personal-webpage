import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import Seo from '../components/Seo';
import { siteConfig } from '../config/site';
import './Knowledge.css';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tags: string[];
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const faqs: FaqItem[] = [
  {
    id: 'what-do-you-build',
    question: 'What kinds of AI projects do you take on?',
    answer:
      'I build AI app development projects, full-stack SaaS features, workflow automations, and product experiences that connect frontend, backend, and intelligent tooling into one useful system.',
    tags: ['AI app development', 'SaaS', 'Automation'],
  },
  {
    id: 'what-stack',
    question: 'What stack do you usually use?',
    answer:
      'I work across Angular, TypeScript, .NET, Node.js, and cloud services. When a project needs AI assistance, I also use Claude- and Codex-assisted workflows to move faster without losing engineering discipline.',
    tags: ['Angular', 'TypeScript', '.NET', 'Node.js'],
  },
  {
    id: 'how-do-you-work',
    question: 'How do you approach a new freelance project?',
    answer:
      'I start with scope, architecture, and success criteria. Then I break the work into delivery steps, ship the riskiest part first, and keep communication focused on progress, blockers, and outcomes instead of vague status updates.',
    tags: ['Discovery', 'Delivery', 'Communication'],
  },
  {
    id: 'what-ai-tools',
    question: 'Do you work with Claude and Codex?',
    answer:
      'Yes. I use Claude and Codex as practical development tools for planning, implementation support, and code review assistance. They help speed up delivery, but the product direction and quality standards still come from real engineering judgment.',
    tags: ['Claude', 'Codex', 'AI tools'],
  },
  {
    id: 'what-results',
    question: 'What should a client expect from working with you?',
    answer:
      'A clean build, a clear delivery path, and a product that is tied to measurable outcomes. I care about the implementation, but I also care about whether the project helps users, saves time, or creates revenue.',
    tags: ['Outcomes', 'Product focus', 'Quality'],
  },
];

const knowledgeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const Knowledge: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Seo
        title="AI App Development FAQ"
        description="Answers about freelance AI app development, full-stack SaaS delivery, workflow automation, Claude, and Codex from Nur Mohammad Farazi."
        path="/knowledge"
        type="article"
        keywords={[
          'AI app development FAQ',
          'freelance AI developer',
          'Claude developer',
          'Codex developer',
          'workflow automation',
          'full-stack SaaS',
        ]}
        jsonLd={knowledgeJsonLd}
      />
      <motion.main
        className="knowledge-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.header
            className="knowledge-header"
            variants={sectionVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span className="knowledge-eyebrow" variants={cardVariants}>
              How I work
            </motion.span>
            <motion.h1 variants={cardVariants}>AI App Development FAQ</motion.h1>
            <motion.p className="knowledge-subtitle" variants={cardVariants}>
              Straight answers about freelance AI app development, full-stack SaaS,
              workflow automation, and the way I use Claude and Codex on real projects.
            </motion.p>
          </motion.header>

          <motion.div
            className="faq-grid"
            variants={sectionVariants}
            initial="hidden"
            animate="show"
          >
            {faqs.map((faq) => (
              <motion.article
                key={faq.id}
                className="faq-card"
                variants={cardVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              >
                <span className="faq-category">FAQ</span>
                <h2 className="faq-question">{faq.question}</h2>
                <p className="faq-answer">{faq.answer}</p>
                <div className="faq-tags" aria-label={`${faq.question} topics`}>
                  {faq.tags.map((tag) => (
                    <span key={tag} className="faq-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.section
            className="knowledge-cta"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>Want a tailored answer for your project?</h2>
            <p>
              Send me a note if you want to talk through an AI app, SaaS build, or
              automation idea before you commit to a scope.
            </p>
            <motion.div
              className="knowledge-cta__actions"
              variants={cardVariants}
            >
              <Link to="/contact" className="cta-btn">
                Contact me
              </Link>
              <a
                href={siteConfig.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--secondary"
              >
                Read on Medium
              </a>
            </motion.div>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
};

export default Knowledge;
