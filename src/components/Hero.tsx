import React from 'react';
import { Github, Linkedin, Download, Sparkles, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20 dark:opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles 
              className="text-purple-400 dark:text-purple-300" 
              size={Math.random() * 8 + 4} 
            />
          </div>
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/30 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-12 max-w-3xl">
          <div className="mb-8">
            {/* Greeting */}
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 dark:border-slate-700/50 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                {t('nav.available')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('hero.greeting')}
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                Sandra Reyes
              </span>
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-purple-200 font-medium">
                {t('hero.title')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Yaz3002"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jade-reyes-quispe-7ab378298"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a href="/CV-Sandra-Reyes.pdf"
                 download className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        > <Download size={20} className="group-hover:bounce transition-transform duration-300" />
              <span>{t('hero.downloadCV')}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.stats.projects')}</div>
            </div>
          </div>
        </div>

        {/* Avatar/Image */}
        <div className="flex-shrink-0 mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 relative">
              {/* Main avatar container */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl shadow-purple-500/25 dark:shadow-purple-500/50">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-400/20 dark:to-pink-400/20 rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                      <div><img src="/perfil.jpg" alt="Perfil"  style={{ width: '380px', height: 'auto' }} /></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/4 -right-6 w-5 h-5 bg-blue-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 group"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="text-gray-400 dark:text-gray-600 group-hover:text-purple-500 transition-colors duration-300" size={16} />
        </div>
      </button>
    </section>
  );
};

export default Hero;