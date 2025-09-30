import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import './Knowledge.css';

interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  link: string;
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

const Knowledge: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const articles: KnowledgeArticle[] = [
    {
      id: '1',
      title: 'Building Scalable Microservices with .NET 8 and gRPC',
      category: 'Architecture',
      date: 'December 2024',
      readTime: '12 min read',
      excerpt: 'Learn how to architect and implement a production-ready microservices system using .NET 8, gRPC for inter-service communication, and RabbitMQ for event-driven patterns. This comprehensive guide covers service design, API gateways, and deployment strategies.',
      tags: ['.NET 8', 'Microservices', 'gRPC', 'RabbitMQ', 'Docker'],
      link: 'https://nur369188.medium.com/when-grpc-is-and-isnt-the-right-call-88beb208ed37'
    },
    {
      id: '2',
      title: 'Mastering CQRS Pattern in C#',
      category: 'Design Patterns',
      date: 'November 2024',
      readTime: '10 min read',
      excerpt: 'Deep dive into Command Query Responsibility Segregation (CQRS) pattern implementation in C#. Explore real-world scenarios, performance benefits, and best practices for separating read and write operations in complex applications.',
      tags: ['C#', 'CQRS', 'Design Patterns', 'System Design'],
      link: 'https://medium.com/@nur369188'
    },
    {
      id: '3',
      title: 'Angular Performance Optimization Techniques',
      category: 'Frontend',
      date: 'October 2024',
      readTime: '15 min read',
      excerpt: 'Comprehensive guide to optimizing Angular applications for production. Covers change detection strategies, lazy loading, bundle optimization, and advanced RxJS patterns for building high-performance web applications.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Performance'],
      link: 'https://medium.com/@nur369188'
    },
    {
      id: '4',
      title: 'System Design: Building Fault-Tolerant Email Systems',
      category: 'System Design',
      date: 'September 2024',
      readTime: '18 min read',
      excerpt: 'Case study on designing a resilient email delivery system with automatic failover across multiple providers. Discusses circuit breaker patterns, retry strategies, and monitoring for distributed systems.',
      tags: ['System Design', 'Resilience', 'C#', 'Architecture'],
      link: 'https://medium.com/@nur369188'
    },
    {
      id: '5',
      title: 'Clean Architecture in .NET: A Practical Guide',
      category: 'Architecture',
      date: 'August 2024',
      readTime: '14 min read',
      excerpt: 'Implementing Clean Architecture principles in .NET applications. Learn about dependency inversion, domain-driven design, and creating maintainable, testable codebases that stand the test of time.',
      tags: ['.NET', 'Clean Architecture', 'DDD', 'SOLID'],
      link: 'https://medium.com/@nur369188'
    },
    {
      id: '6',
      title: 'Concurrency and Threading Best Practices in C#',
      category: 'Performance',
      date: 'July 2024',
      readTime: '16 min read',
      excerpt: 'Master thread-safe programming in C#. Explore concurrent collections, async/await patterns, parallel programming, and techniques for preventing race conditions and deadlocks in multithreaded applications.',
      tags: ['C#', 'Threading', 'Concurrency', 'Async/Await'],
      link: 'https://nur369188.medium.com/how-i-think-about-concurrency-and-threading-in-c-a99340d19eed'
    }
  ];

  const categories = ['All', 'Architecture', 'Design Patterns', 'Frontend', 'System Design', 'Performance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <motion.div
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
          <motion.h1 variants={cardVariants}>
            Knowledge Base
          </motion.h1>
          <motion.p className="knowledge-subtitle" variants={cardVariants}>
            Technical articles, insights, and lessons learned from building scalable software systems
          </motion.p>
        </motion.header>

        <motion.div
          className="category-filter"
          variants={sectionVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="articles-grid"
          variants={sectionVariants}
          initial="hidden"
          animate="show"
        >
          {filteredArticles.map((article) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card-link"
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : {
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <article className="article-card">
                <div className="article-header">
                  <span className="article-category">{article.category}</span>
                  <div className="article-meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="article-tag">{tag}</span>
                  ))}
                </div>
                <div className="article-link">
                  Read Article →
                </div>
              </article>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="knowledge-cta"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Want to stay updated?</h2>
          <p>Follow me on Medium for regular updates on software engineering, system design, and best practices.</p>
          <motion.a
            href="https://medium.com/@nur369188"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Follow on Medium
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Knowledge;
