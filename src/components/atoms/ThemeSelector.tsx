import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { key: 'light', icon: <Sun size={16} />, label: t('theme.light') },
    { key: 'dark', icon: <Moon size={16} />, label: t('theme.dark') },
    { key: 'neon', icon: <Zap size={16} />, label: t('theme.neon') }
  ];

  return (
    <div className="position-relative">
      <motion.button
        className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change theme"
      >
        <Palette size={16} />
        <span className="d-none d-md-inline fw-semibold">
          {themes.find(t => t.key === theme)?.label}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-absolute top-100 end-0 mt-2 bg-white rounded-3 shadow-lg border p-2"
            style={{ minWidth: '150px', zIndex: 1000 }}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {themes.map((themeOption) => (
              <button
                key={themeOption.key}
                className={`btn btn-sm w-100 d-flex align-items-center gap-2 mb-1 ${
                  theme === themeOption.key ? 'btn-primary' : 'btn-outline-light text-dark'
                }`}
                onClick={() => {
                  setTheme(themeOption.key as any);
                  setIsOpen(false);
                }}
              >
                {themeOption.icon}
                <span>{themeOption.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 999 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};