import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Ariel Developer',
    'hero.title': 'Frontend Developer & Creative Technologist',
    'hero.description': 'Transformo ideas creativas en experiencias digitales excepcionales. Especializado en React, diseño UI/UX y desarrollo frontend moderno.',
    'hero.contact': 'Contáctame',
    'hero.download': 'Descargar CV',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por crear experiencias digitales extraordinarias',
    'about.greeting': '¡Hola! Soy Ariel 👋',
    'about.description1': 'Desarrollador Frontend con más de 3 años de experiencia creando aplicaciones web modernas y responsivas. Me especializo en React, TypeScript y tecnologías frontend de vanguardia.',
    'about.description2': 'Mi enfoque combina diseño creativo con código eficiente, siempre buscando la innovación y la excelencia en cada proyecto. Creo firmemente que la tecnología debe ser accesible, hermosa y funcional.',
    'about.description3': 'Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.',
    'about.feature1.title': 'Clean Code',
    'about.feature1.desc': 'Escribo código limpio, mantenible y escalable siguiendo las mejores prácticas.',
    'about.feature2.title': 'Design Thinking',
    'about.feature2.desc': 'Combino creatividad y funcionalidad para crear experiencias visuales impactantes.',
    'about.feature3.title': 'Performance',
    'about.feature3.desc': 'Optimizo cada proyecto para obtener el máximo rendimiento y velocidad.',
    'about.feature4.title': 'Pasión',
    'about.feature4.desc': 'Amo lo que hago y eso se refleja en cada línea de código que escribo.',
    
    // Projects Section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Una selección de mis trabajos más recientes y destacados',
    'projects.featured': 'Destacado',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.project1.title': 'E-Commerce Moderno',
    'projects.project1.desc': 'Plataforma de comercio electrónico con carrito de compras, autenticación y panel de administración.',
    'projects.project2.title': 'Dashboard Analytics',
    'projects.project2.desc': 'Panel de control con gráficos interactivos y métricas en tiempo real para análisis de datos.',
    'projects.project3.title': 'App de Gestión de Tareas',
    'projects.project3.desc': 'Aplicación para gestión de proyectos con drag & drop, colaboración en tiempo real.',
    'projects.project4.title': 'Portfolio Interactivo',
    'projects.project4.desc': 'Sitio web personal con animaciones avanzadas y efectos de paralaje.',
    'projects.project5.title': 'Chat App en Tiempo Real',
    'projects.project5.desc': 'Aplicación de mensajería instantánea con salas privadas y notificaciones push.',
    'projects.project6.title': 'Landing Page Creativa',
    'projects.project6.desc': 'Página de aterrizaje con diseño moderno, animaciones CSS y optimización SEO.',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones excepcionales',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & Tools',
    'skills.design': 'Design & Other',
    'skills.footer': 'Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.',
    'skills.footer2': '¡La curiosidad y la innovación impulsan mi desarrollo profesional!',
    
    // Contact Section
    'contact.title': '¡Hablemos!',
    'contact.subtitle': '¿Tienes un proyecto en mente? Me encantaría conocer tu idea',
    'contact.name': 'Nombre completo',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.placeholder.name': 'Tu nombre',
    'contact.placeholder.email': 'tu@email.com',
    'contact.placeholder.message': 'Cuéntame sobre tu proyecto...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.location': 'Ubicación',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.social': 'Sígueme en redes',
    'contact.success': '¡Mensaje enviado correctamente! Te contactaré pronto.',
    
    // Footer
    'footer.tagline': 'Creando experiencias digitales excepcionales',
    'footer.copyright': 'Ariel Developer. Hecho con',
    'footer.coffee': 'y mucho café ☕',
    
    // Theme Selector
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.neon': 'Neón'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Ariel Developer',
    'hero.title': 'Frontend Developer & Creative Technologist',
    'hero.description': 'I transform creative ideas into exceptional digital experiences. Specialized in React, UI/UX design and modern frontend development.',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating extraordinary digital experiences',
    'about.greeting': 'Hello! I\'m Ariel 👋',
    'about.description1': 'Frontend Developer with over 3 years of experience creating modern and responsive web applications. I specialize in React, TypeScript and cutting-edge frontend technologies.',
    'about.description2': 'My approach combines creative design with efficient code, always seeking innovation and excellence in every project. I firmly believe that technology should be accessible, beautiful and functional.',
    'about.description3': 'When I\'m not coding, I enjoy exploring new technologies, contributing to open source projects and sharing knowledge with the developer community.',
    'about.feature1.title': 'Clean Code',
    'about.feature1.desc': 'I write clean, maintainable and scalable code following best practices.',
    'about.feature2.title': 'Design Thinking',
    'about.feature2.desc': 'I combine creativity and functionality to create impactful visual experiences.',
    'about.feature3.title': 'Performance',
    'about.feature3.desc': 'I optimize every project to achieve maximum performance and speed.',
    'about.feature4.title': 'Passion',
    'about.feature4.desc': 'I love what I do and it shows in every line of code I write.',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of my most recent and featured work',
    'projects.featured': 'Featured',
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',
    'projects.project1.title': 'Modern E-Commerce',
    'projects.project1.desc': 'E-commerce platform with shopping cart, authentication and admin panel.',
    'projects.project2.title': 'Analytics Dashboard',
    'projects.project2.desc': 'Control panel with interactive charts and real-time metrics for data analysis.',
    'projects.project3.title': 'Task Management App',
    'projects.project3.desc': 'Project management application with drag & drop, real-time collaboration.',
    'projects.project4.title': 'Interactive Portfolio',
    'projects.project4.desc': 'Personal website with advanced animations and parallax effects.',
    'projects.project5.title': 'Real-time Chat App',
    'projects.project5.desc': 'Instant messaging application with private rooms and push notifications.',
    'projects.project6.title': 'Creative Landing Page',
    'projects.project6.desc': 'Landing page with modern design, CSS animations and SEO optimization.',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I master to create exceptional solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & Tools',
    'skills.design': 'Design & Other',
    'skills.footer': 'Always learning new technologies and improving my skills.',
    'skills.footer2': 'Curiosity and innovation drive my professional development!',
    
    // Contact Section
    'contact.title': 'Let\'s Talk!',
    'contact.subtitle': 'Have a project in mind? I\'d love to hear your idea',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.message': 'Tell me about your project...',
    'contact.info.title': 'Contact Information',
    'contact.info.location': 'Location',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.social': 'Follow me on social media',
    'contact.success': 'Message sent successfully! I\'ll contact you soon.',
    
    // Footer
    'footer.tagline': 'Creating exceptional digital experiences',
    'footer.copyright': 'Ariel Developer. Made with',
    'footer.coffee': 'and lots of coffee ☕',
    
    // Theme Selector
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.neon': 'Neon'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'es' | 'en'>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as 'es' | 'en') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};