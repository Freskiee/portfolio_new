import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
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
    <Card className={`h-100 ${featured ? 'border-3 border-primary' : ''}`}>
      <div className="position-relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="card-img-top project-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {featured && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-primary">{t('projects.featured')}</span>
          </div>
        )}
      </div>
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>
        
        <div className="mb-3">
          <div className="d-flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <span key={index} className="badge bg-light text-dark">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="d-flex gap-2 mt-auto flex-wrap">
          {githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              href={githubUrl}
              icon={<Github size={16} />}
              className="flex-fill"
            >
              {t('projects.code')}
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="accent"
              size="sm"
              href={liveUrl}
              icon={<ExternalLink size={16} />}
              className="flex-fill"
            >
              {t('projects.demo')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};