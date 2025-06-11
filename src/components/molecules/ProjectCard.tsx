import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      className={`project-card ${featured ? 'featured' : ''}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-content">
        <div className="position-relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="project-image"
          />
          {featured && (
            <div className="featured-badge">
              {t('projects.featured')}
            </div>
          )}
        </div>
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          
          <div className="tech-stack">
            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="button-group">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                <span>{t('projects.code')}</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                <span>{t('projects.demo')}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};