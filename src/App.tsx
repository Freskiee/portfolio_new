import React from 'react';
import { Navigation } from './components/organisms/Navigation';
import { Hero } from './components/organisms/Hero';
import { About } from './components/organisms/About';
import { Projects } from './components/organisms/Projects';
import { Skills } from './components/organisms/Skills';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';
import { CustomCursor } from './components/atoms/CustomCursor';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <CustomCursor />
          <div className="animated-bg"></div>
          
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;