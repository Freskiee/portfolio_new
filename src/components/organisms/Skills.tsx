import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../atoms/SectionTitle';
import { SkillBar } from '../molecules/SkillBar';
import { Card } from '../atoms/Card';
import { useLanguage } from '../../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      color: 'var(--primary-gradient)',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript ES6+', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 92 }
      ]
    },
    {
      title: t('skills.backend'),
      color: 'var(--secondary-gradient)',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: t('skills.design'),
      color: 'var(--accent-gradient)',
      skills: [
        { name: 'Figma / Adobe XD', level: 88 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Responsive Design', level: 95 },
        { name: 'SEO Optimization', level: 80 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Testing (Jest/Cypress)', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionTitle
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />
        
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-100 p-4">
                  <div className="text-center mb-4">
                    <h4 
                      className="fw-bold mb-0 skill-category-title"
                      style={{
                        background: category.color,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {category.title}
                    </h4>
                  </div>
                  
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skillIndex}
                        skill={skill.name}
                        percentage={skill.level}
                        color={category.color}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="lead text-muted">
            {t('skills.footer')}
            <br />
            <strong>{t('skills.footer2')}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};