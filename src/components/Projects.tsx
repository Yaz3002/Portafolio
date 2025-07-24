import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { Github, Clock, Folder, Star, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-500">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-100/30 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-100/30 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <Folder className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{t('projects.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2 animate-pulse" />
                      <span className="text-purple-300 font-medium">{t('projects.comingSoon')}</span>
                    </div>
                  </div>
                )}
                
                {/* Overlay with quick actions */}
                {!project.comingSoon && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        title={t('projects.code')}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        title={t('projects.demo')}
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                )}

                {/* Featured badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Star size={12} />
                    <span>{t('projects.featured')}</span>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between">
                  {project.comingSoon ? (
                    <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-3 rounded-2xl font-medium cursor-not-allowed">
                      {t('projects.comingSoon')}
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3 w-full">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 flex-1 justify-center"
                        >
                          <Github size={16} />
                          <span>{t('projects.code')}</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 flex-1 justify-center"
                        >
                          <Globe size={16} />
                          <span>{t('projects.demo')}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.cta.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('projects.cta.description')}
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
              {t('projects.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;