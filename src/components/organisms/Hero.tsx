import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { Button } from '../atoms/Button';
import { SocialLinks } from '../molecules/SocialLinks';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="display-1 fw-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('hero.greeting')}
                <br />
                <span className="text-gradient">{t('hero.name')}</span>
              </motion.h1>
              
              <motion.h2 
                className="h3 mb-4 text-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.title')}
              </motion.h2>
              
              <motion.p 
                className="lead mb-5 text-muted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>
              
              <motion.div 
                className="d-flex flex-column flex-sm-row gap-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  icon={<Mail size={20} />}
                  className="w-100 w-sm-auto"
                >
                  {t('hero.contact')}
                </Button>
                
                <Button
                  variant="secondary"
                  size="lg"
                  href="/cv.pdf"
                  icon={<Download size={20} />}
                  className="w-100 w-sm-auto"
                >
                  {t('hero.download')}
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <SocialLinks />
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="position-relative d-inline-block">
                <motion.div
                  className="bg-primary rounded-circle position-absolute hero-glow"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
                  alt="Ariel Developer"
                  className="rounded-circle shadow-lg position-relative hero-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.button
        className="position-absolute bottom-0 start-50 translate-middle-x btn btn-link text-white mb-4 scroll-indicator"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};