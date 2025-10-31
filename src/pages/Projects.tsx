import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import './Projects.css';
import { projects } from './projectsData';
import { getYouTubePoster } from '../utils/youtube';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className='projects-page'>
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
                ) : project.preview.type === 'video' ? (
                  <video
                    src={project.preview.src}
                    poster={project.preview.poster}
                    muted
                    loop
                    playsInline
                    autoPlay={!shouldReduceMotion}
                  />
                ) : (
                  <div className='project-preview-youtube'>
                    {(() => {
                      const posterSrc = getYouTubePoster(
                        project.preview.src,
                        project.preview.poster,
                      );
                      return posterSrc ? (
                        <img src={posterSrc} alt={project.preview.alt} loading='lazy' />
                      ) : (
                        <div className='project-preview-youtube-fallback' aria-hidden='true' />
                      );
                    })()}
                    <span className='project-preview-youtube-icon' aria-hidden='true' />
                  </div>
                )}
              </div>
              <h2 className='project-card-title'>{project.title}</h2>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
