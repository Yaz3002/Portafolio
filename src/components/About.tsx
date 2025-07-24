import React from 'react';
import { Code, Lightbulb, Target, Users, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t('about.highlights.development'),
      description: t('about.highlights.developmentDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('about.highlights.thinking'),
      description: t('about.highlights.thinkingDesc'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('about.highlights.planning'),
      description: t('about.highlights.planningDesc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('about.highlights.collaboration'),
      description: t('about.highlights.collaborationDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('about.highlights.quality'),
      description: t('about.highlights.qualityDesc'),
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('about.highlights.innovation'),
      description: t('about.highlights.innovationDesc'),
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/30 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/30 dark:bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{t('about.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text content */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t('about.description2')}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => {
                  const element = document.getElementById('proyectos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>{t('about.viewProjects')}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{t('about.availableToCollaborate')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.cta.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('about.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;