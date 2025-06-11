import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="language-selector"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="fw-semibold">{language.toUpperCase()}</span>
      </button>
    </motion.div>
  );
};