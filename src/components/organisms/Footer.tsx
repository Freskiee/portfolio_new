import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { SocialLinks } from '../molecules/SocialLinks';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="fw-bold mb-2">Ariel Developer</h5>
              <p className="text-muted mb-0">
                {t('footer.tagline')}
              </p>
            </motion.div>
          </div>
          
          <div className="col-md-6 text-md-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <motion.p 
              className="text-muted mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} {t('footer.copyright')}{' '}
              <Heart size={16} className="text-danger mx-1" />
              {t('footer.coffee')}
            </motion.p>
          </div>
          
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <nav className="d-flex gap-3 justify-content-md-end justify-content-start flex-wrap">
              <a href="#about" className="text-muted text-decoration-none">
                {t('nav.about')}
              </a>
              <a href="#projects" className="text-muted text-decoration-none">
                {t('nav.projects')}
              </a>
              <a href="#skills" className="text-muted text-decoration-none">
                {t('nav.skills')}
              </a>
              <a href="#contact" className="text-muted text-decoration-none">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      <motion.button
        className="position-absolute top-0 end-0 me-4 mt-3 btn btn-primary rounded-circle back-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};