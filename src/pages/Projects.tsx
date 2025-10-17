import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import './Projects.css';
import { projects } from './projectsData';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();



  return (
    <div className='projects-page'>
      <section className='projects-header'>
    
        <motion.h4
          className='projects-title'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Selected projects and case studies
        </motion.h4>
    
      </section>

      <motion.div
        className='projects-grid'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {projects.map((project) => (
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
                ) : (
                  <video
                    src={project.preview.src}
                    poster={project.preview.poster}
                    muted
                    loop
                    playsInline
                    autoPlay={!shouldReduceMotion}
                  />
                )}
              </div>

              <div className='project-content'>
                <div className='project-text'>
                  <h2>{project.title}</h2>
                  <p>{project.tagline}</p>
                </div>

                {(project.role || project.duration) && (
                  <div className='project-meta'>
                    {project.role && (
                      <div className='project-meta-item'>
                        <span className='project-meta-label'>Role</span>
                        <span className='project-meta-value'>{project.role}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className='project-meta-item'>
                        <span className='project-meta-label'>Timeline</span>
                        <span className='project-meta-value'>{project.duration}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className='tech-tags'>
                  {project.techTags.map((tech) => (
                    <span key={tech} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='project-cta'>
                  <span>View case study</span>
                  <motion.span
                    aria-hidden
                    initial={{ x: 0 }}
                    animate={{ x: shouldReduceMotion ? 0 : 4 }}
                    transition={{ repeat: Infinity, repeatDelay: 2.4, duration: 0.9, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;