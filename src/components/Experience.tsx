import React from 'react';
import { experiences } from '../data/portfolio';
import { Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-100/20 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/20 dark:bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{t('experience.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start mb-16 last:mb-0 group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <div className="flex items-center text-purple-600 dark:text-purple-400 text-base font-semibold mb-2">
                          <MapPin size={18} className="mr-2" />
                          {experience.company}
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </div>
                      </div>
                      
                      {/* Company logo placeholder */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-4">{t('experience.responsibilities')}</h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                              <ChevronRight size={12} className="text-white" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills tags */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                      <div className="flex flex-wrap gap-2">
                        {index === 0 && (
                          <>
                            <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.webDev')}
                            </span>
                            <span className="bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.fullStack')}
                            </span>
                            <span className="bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.dataAnalysis')}
                            </span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.techSupport')}
                            </span>
                            <span className="bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.administration')}
                            </span>
                            <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">
                              {t('experience.skills.reports')}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;