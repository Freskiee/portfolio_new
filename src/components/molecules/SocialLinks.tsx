import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: <Github size={20} />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: <Linkedin size={20} />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: <Twitter size={20} />
  },
  {
    name: 'Email',
    url: 'mailto:tu@email.com',
    icon: <Mail size={20} />
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="d-flex gap-3 justify-content-center">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          className="social-icon"
          aria-label={link.name}
          target={link.url.startsWith('http') ? '_blank' : undefined}
          rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};