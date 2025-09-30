import { useEffect, useRef, useState } from 'react';
import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'motion/react';
import type { Variants } from 'motion/react';
import {
  FaCalendarCheck,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaMedium,
} from 'react-icons/fa';

import './Contact.css';

type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
  copyable?: boolean;
};

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'nur369188@gmail.com',
    href: 'mailto:nur369188@gmail.com',
    icon: <FaEnvelope aria-hidden="true" />,
    copyable: true,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+8801717369188',
    href: 'tel:+8801717369188',
    icon: <FaPhone aria-hidden="true" />,
    copyable: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    icon: <FaMapMarkerAlt aria-hidden="true" />,
  },
];

const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nurfarazi/',
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/nurfarazi',
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    id: 'medium',
    label: 'Medium',
    href: 'https://medium.com/@nur369188',
    icon: <FaMedium aria-hidden="true" />,
  },
];

const availabilityTags = [
  'Backend Engineering',
  'Angular & TypeScript',
  'System Design & Optimization',
];

const contactSectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

const headerContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.05,
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

const gridVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const noteVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const tagContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const tagItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: 0.1 },
  },
};

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowXSpring = useSpring(glowX, {
    stiffness: 140,
    damping: 24,
    mass: 0.6,
  });
  const glowYSpring = useSpring(glowY, {
    stiffness: 140,
    damping: 24,
    mass: 0.6,
  });
  const glowBackground = useMotionTemplate`
    radial-gradient(220px circle at ${glowXSpring}% ${glowYSpring}%, rgba(100, 108, 255, 0.2), transparent 75%)
  `;
  const sectionInitial = shouldReduceMotion ? false : 'hidden';
  const sectionAnimate = shouldReduceMotion ? false : 'show';

  const scheduleReset = () => {
    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = window.setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    glowX.set(Math.min(100, Math.max(0, x)));
    glowY.set(Math.min(100, Math.max(0, y)));
  };

  const handlePointerLeave = () => {
    if (shouldReduceMotion) {
      return;
    }

    glowX.set(50);
    glowY.set(50);
  };

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async (value: string, id: string) => {
    if (!navigator.clipboard) {
      const input = document.createElement('textarea');
      input.value = value;
      input.setAttribute('readonly', '');
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy');
        setCopiedItem(id);
        scheduleReset();
      } catch (error) {
        console.error('Unable to copy text', error);
      } finally {
        document.body.removeChild(input);
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(id);
      scheduleReset();
    } catch (error) {
      console.error('Unable to copy text', error);
    }
  };

  return (
    <motion.main
      className="contact-page"
      initial={
        shouldReduceMotion
          ? undefined
          : { opacity: 0, y: 18 }
      }
      animate={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-center-wrapper">
        <div className="container">
          <motion.section
            className="section contact"
            variants={contactSectionVariants}
            initial={sectionInitial}
            animate={sectionAnimate}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            {!shouldReduceMotion && (
              <motion.span
                className="contact-glow"
                style={{ background: glowBackground }}
                aria-hidden="true"
                animate={{ opacity: [0.28, 0.55, 0.28], scale: [0.98, 1, 0.98] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              />
            )}

            <motion.header className="contact-header" variants={headerContainerVariants}>
              <motion.span className="contact-eyebrow" variants={headerItemVariants}>
                Let&apos;s collaborate
              </motion.span>
              <motion.h2 variants={headerItemVariants}>Say hello 👋</motion.h2>
              <motion.p variants={headerItemVariants}>
                I&apos;d love to hear about projects, opportunities, or ideas worth
                exploring. Drop a message and I&apos;ll respond within a day.
              </motion.p>
            </motion.header>

            <motion.div className="contact-grid" variants={gridVariants}>
              <motion.article
                className="contact-card contact-card--primary"
                variants={cardVariants}
              >
                <h3>Contact details</h3>
                <motion.ul
                  className="contact-list"
                  aria-label="Direct contact details"
                  variants={listVariants}
                >
                  {contactMethods.map(({ id, label, value, href, icon, copyable }) => (
                    <motion.li
                      key={id}
                      className="contact-item"
                      variants={listItemVariants}
                    >
                      <div className="contact-item__info">
                        <span className="contact-item__icon" aria-hidden="true">
                          {icon}
                        </span>
                        <div>
                          <span className="contact-item__label">{label}</span>
                          {href ? (
                            <a href={href} className="contact-item__link">
                              {value}
                            </a>
                          ) : (
                            <span className="contact-item__value">{value}</span>
                          )}
                        </div>
                      </div>
                      {copyable && (
                        <motion.button
                          type="button"
                          className="contact-copy"
                          onClick={() => handleCopy(value, id)}
                          aria-label={`Copy ${label.toLowerCase()} ${value}`}
                          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                        >
                          {copiedItem === id ? 'Copied!' : 'Copy'}
                        </motion.button>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div className="contact-note" role="status" variants={noteVariants}>
                  <FaCalendarCheck aria-hidden="true" />
                  <span>Typically replying within 24 hours.</span>
                </motion.div>
              </motion.article>

              <motion.article
                className="contact-card contact-card--availability"
                variants={cardVariants}
              >
                <h3>Currently open for</h3>
                <p>
                  Remote-friendly roles, product design sprints, and collaborative
                  problem solving. Let&apos;s build human-centered experiences together.
                </p>
                <motion.div
                  className="contact-tags"
                  aria-label="Availability tags"
                  variants={tagContainerVariants}
                >
                  {availabilityTags.map((tag) => (
                    <motion.span key={tag} className="contact-tag" variants={tagItemVariants}>
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>

              <motion.article
                className="contact-card contact-card--social"
                variants={cardVariants}
              >
                <h3>Connect elsewhere</h3>
                <p>Follow along for updates, experiments, and case studies.</p>
                <motion.div
                  className="contact-social-links"
                  variants={socialContainerVariants}
                >
                  {socialLinks.map(({ id, href, icon, label }) => (
                    <motion.a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label={`${label} profile`}
                      variants={socialItemVariants}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                    >
                      <span className="contact-social-icon" aria-hidden="true">
                        {icon}
                      </span>
                      <span>{label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.article>
            </motion.div>

            <motion.footer className="contact-footer" variants={footerVariants}>
              Prefer async? Send a quick note and I&apos;ll schedule a follow-up that
              works in your timezone.
            </motion.footer>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;