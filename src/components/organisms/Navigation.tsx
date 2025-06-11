import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSelector } from '../atoms/LanguageSelector';
import { ThemeSelector } from '../atoms/ThemeSelector';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' }, 
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? 'glass-effect shadow' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.a
          className="navbar-brand fw-bold fs-3 text-gradient"
          href="#"
          onClick={() => handleNavClick('#hero')}
          whileHover={{ scale: 1.05 }}
        >
          Ariel.dev
        </motion.a>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <LanguageSelector />
          <ThemeSelector />
          <button
            className="navbar-toggler border-0 ms-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a
                  className="nav-link fw-semibold px-3"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <div className="d-none d-lg-flex align-items-center gap-3">
            <LanguageSelector />
            <ThemeSelector />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};