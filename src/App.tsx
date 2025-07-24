import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SkillsCarousel from './components/SkillsCarousel';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
          <Navigation />
          <Hero />
          <About />
          <SkillsCarousel />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;