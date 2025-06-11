import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card } from '../atoms/Card';
import { SectionTitle } from '../atoms/SectionTitle';
import { useLanguage } from '../../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Code size={32} />,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc')
    },
    {
      icon: <Palette size={32} />,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc')
    },
    {
      icon: <Zap size={32} />,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc')
    },
    {
      icon: <Heart size={32} />,
      title: t('about.feature4.title'),
      description: t('about.feature4.desc')
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="h2 fw-bold mb-4">{t('about.greeting')}</h3>
              <p className="lead mb-4">
                {t('about.description1')}
              </p>
              <p className="mb-4">
                {t('about.description2')}
              </p>
              <p className="mb-4">
                {t('about.description3')}
              </p>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Workspace"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-100 p-4">
                  <div className="mb-3 d-flex justify-content-center">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};