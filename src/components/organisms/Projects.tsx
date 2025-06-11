import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.desc'),
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/tu-usuario/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.desc'),
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Firebase', 'Chart.js'],
      githubUrl: 'https://github.com/tu-usuario/dashboard',
      liveUrl: 'https://dashboard-demo.com',
      featured: true
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.desc'),
      image: 'https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Redux', 'Socket.io', 'Express'],
      githubUrl: 'https://github.com/tu-usuario/task-manager',
      liveUrl: 'https://tasks-demo.com'
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.desc'),
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Framer Motion', 'GSAP', 'Sass'],
      githubUrl: 'https://github.com/tu-usuario/portfolio',
      liveUrl: 'https://portfolio-demo.com'
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.desc'),
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/tu-usuario/chat-app',
      liveUrl: 'https://chat-demo.com'
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project6.desc'),
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      githubUrl: 'https://github.com/tu-usuario/landing',
      liveUrl: 'https://landing-demo.com'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <SectionTitle
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};