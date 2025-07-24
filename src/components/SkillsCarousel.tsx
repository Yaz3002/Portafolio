import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  logo: string;
  color: string;
}

const SkillsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const skills: Skill[] = [
    // Frontend
    { 
      name: 'HTML5', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26' 
    },
    { 
      name: 'CSS3', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6' 
    },
    { 
      name: 'JavaScript', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E' 
    },
    { 
      name: 'React', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB' 
    },
    { 
      name: 'Angular', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      color: '#DD0031' 
    },
    { 
      name: 'Bootstrap', 
      category: 'Frontend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: '#7952B3' 
    },
    
    // Backend
    { 
      name: 'Java', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#ED8B00' 
    },
    { 
      name: 'Python', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB' 
    },
    { 
      name: 'C#', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      color: '#239120' 
    },
    { 
      name: 'PHP', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: '#777BB4' 
    },
    { 
      name: 'Spring Boot', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6DB33F' 
    },
    { 
      name: '.NET', 
      category: 'Backend', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      color: '#512BD4' 
    },
    
    // Tools
    { 
      name: 'Git', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032' 
    },
    { 
      name: 'MySQL', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1' 
    },
    { 
      name: 'MongoDB', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248' 
    },
    { 
      name: 'Vite', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      color: '#FF9A00' 
    },
    { 
      name: 'SaaS', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      color: '#f036c8ff' 
    },
    { 
      name: 'VS Code', 
      category: 'Tools', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: '#007ACC' 
    },
  ]
  const categories = ['all', 'Frontend', 'Backend', 'Tools'];
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const skillsPerSlide = 6;
  const totalSlides = Math.ceil(filteredSkills.length / skillsPerSlide);

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && totalSlides > 1) {
      nextSlide();
    } else if (isRightSwipe && totalSlides > 1) {
      prevSlide();
    }
  };

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-500">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-100/30 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-100/30 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">{t('skills.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skills.title').split(' ')[0]} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('skills.title').split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600'
              }`}
            >
              {category === 'all' ? t('skills.all') : category}
              <span className="ml-2 text-xs opacity-75">
                ({category === 'all' ? skills.length : skills.filter(s => s.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {filteredSkills
                      .slice(slideIndex * skillsPerSlide, (slideIndex + 1) * skillsPerSlide)
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="group flex flex-col items-center p-6 rounded-2xl bg-gray-50 dark:bg-slate-700/50 border border-gray-200/50 dark:border-slate-600/50 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                          <div className="w-16 h-16 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center">
                            <img 
                              src={skill.logo} 
                              alt={`${skill.name} logo`}
                              className="w-full h-full object-contain filter drop-shadow-lg"
                              style={{ 
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                transition: 'all 0.3s ease'
                              }}
                              onError={(e) => {
                                // Fallback to a generic icon if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `https://via.placeholder.com/64x64/${skill.color.replace('#', '')}/ffffff?text=${skill.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <h4 className="text-gray-900 dark:text-white font-semibold text-sm text-center mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {skill.category}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Navigation Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Auto-play control */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isAutoPlaying ? t('skills.pause') : t('skills.play')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;