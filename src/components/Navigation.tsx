import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'inicio', label: t('nav.home'), href: '#inicio' },
    { id: 'sobre-mi', label: t('nav.about'), href: '#sobre-mi' },
    { id: 'habilidades', label: t('nav.skills'), href: '#habilidades' },
    { id: 'experiencia', label: t('nav.experience'), href: '#experiencia' },
    { id: 'proyectos', label: t('nav.projects'), href: '#proyectos' },
    { id: 'contacto', label: t('nav.contact'), href: '#contacto' }
  ];

  const languages = [
    { code: 'es', name: 'Español', flag: '🇵🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-200/20 dark:border-purple-500/20 shadow-lg shadow-black/5 dark:shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Galactic Cat */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('#inicio')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-purple-500/25">
                <span className="text-white text-2xl">🐱‍🚀</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-900 dark:text-white font-bold text-xl transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Sandra Reyes
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'w-6' 
                    : 'group-hover:w-6'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                aria-label="Select language"
              >
                <span className="text-sm">{currentLanguage?.flag}</span>
                <span className="hidden sm:inline text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl py-2 min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 ${
                        language === lang.code 
                          ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://github.com/Yaz3002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/jade-reyes-quispe-7ab378298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-500/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* CV Button */}
            <a
              href="/CV-Sandra-Reyes.pdf"
              download
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <Download size={16} />
              <span>{t('nav.cv')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-slate-700/50 p-6 shadow-xl">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/Yaz3002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/jade-reyes-quispe-7ab378298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-500/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <a
                  href="/CV-Sandra-Reyes.pdf"
                  download className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Download size={16} />
                  <span>{t('nav.cv')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;