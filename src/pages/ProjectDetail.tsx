import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  getProjectById,
  type Project,
  type ProjectMedia,
} from './projectsData';
import './ProjectDetail.css';
import { getYouTubeEmbedUrl, getYouTubePoster } from '../utils/youtube';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [playingMedia, setPlayingMedia] = useState<Record<string, boolean>>({});

  const project: Project | null = useMemo(() => {
    if (!projectId) {
      return null;
    }

    return getProjectById(projectId);
  }, [projectId]);

  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const heroMedia: ProjectMedia = project.mediaGallery[0] ?? project.preview;
  const markMediaAsPlaying = (mediaSrc: string) =>
    setPlayingMedia((prev) => ({ ...prev, [mediaSrc]: true }));
  const isMediaPlaying = (mediaSrc: string) => Boolean(playingMedia[mediaSrc]);
  const heroIsYouTube = heroMedia.type === 'youtube';
  const heroPosterSrc = heroIsYouTube ? getYouTubePoster(heroMedia.src, heroMedia.poster) : undefined;
  const heroIsPlaying = heroIsYouTube ? isMediaPlaying(heroMedia.src) : false;

  return (
    <article className='project-detail-page'>
      <div className='project-detail-topbar'>
        <Link to='/projects' className='project-detail-back'>
          Back to projects
        </Link>
        {project.links.length > 0 && (
          <div className='project-detail-hero-links'>
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <section className='project-detail-hero'>
        <div className='project-detail-summary'>
          <motion.h1
            className='project-detail-title'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className='project-detail-tagline'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
          >
            {project.tagline}
          </motion.p>



          <div className='project-detail-description'>
            <h2>Project description.</h2>
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.techTags.length > 0 && (
            <div className='project-detail-meta-item tech-list'>
              <span className='meta-label'>Skills and deliverables</span>
              <div className='meta-chip-row'>
                {project.techTags.map((tech) => (
                  <span key={tech} className='meta-chip'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='project-detail-featured'>
          {heroMedia.type === 'video' ? (
            <video
              key={heroMedia.src}
              src={heroMedia.src}
              poster={heroMedia.poster}
              controls
              playsInline
              autoPlay={!shouldReduceMotion}
              muted
            />
          ) : heroIsYouTube ? (
            <div className='project-detail-youtube'>
              {heroIsPlaying ? (
                <iframe
                  src={getYouTubeEmbedUrl(heroMedia.src, { autoplay: !shouldReduceMotion })}
                  title={heroMedia.alt}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              ) : (
                <button
                  type='button'
                  className='project-detail-youtube-trigger'
                  onClick={() => markMediaAsPlaying(heroMedia.src)}
                  aria-label={`Play ${heroMedia.alt}`}
                >
                  {heroPosterSrc ? (
                    <img src={heroPosterSrc} alt={heroMedia.alt} loading='lazy' />
                  ) : (
                    <div className='project-detail-youtube-fallback' aria-hidden='true' />
                  )}
                  <span aria-hidden='true' className='project-detail-youtube-play-icon' />
                </button>
              )}
            </div>
          ) : (
            <img src={heroMedia.src} alt={heroMedia.alt} />
          )}
        </div>
      </section>

      <section className='project-detail-gallery'>
        <div className='project-detail-gallery-grid'>
          {project.mediaGallery.map((media) => {
            let content: ReactNode;

            if (media.type === 'image') {
              content = <img src={media.src} alt={media.alt} loading='lazy' />;
            } else if (media.type === 'video') {
              content = (
                <video
                  src={media.src}
                  poster={media.poster}
                  controls
                  playsInline
                  muted
                />
              );
            } else {
              const posterSrc = getYouTubePoster(media.src, media.poster);
              const isPlaying = isMediaPlaying(media.src);

              content = (
                <div className='project-detail-youtube'>
                  {isPlaying ? (
                    <iframe
                      src={getYouTubeEmbedUrl(media.src, { autoplay: !shouldReduceMotion })}
                      title={media.alt}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type='button'
                      className='project-detail-youtube-trigger'
                      onClick={() => markMediaAsPlaying(media.src)}
                      aria-label={`Play ${media.alt}`}
                    >
                      {posterSrc ? (
                        <img src={posterSrc} alt={media.alt} loading='lazy' />
                      ) : (
                        <div className='project-detail-youtube-fallback' aria-hidden='true' />
                      )}
                      <span aria-hidden='true' className='project-detail-youtube-play-icon' />
                    </button>
                  )}
                </div>
              );
            }

            return (
              <figure key={media.src} className='project-detail-gallery-card'>
                {content}
                <figcaption>{media.alt}</figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
