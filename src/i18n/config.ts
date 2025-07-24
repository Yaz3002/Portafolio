import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  es: {
    translation: {
      // Navigation
      'nav.home': 'Inicio',
      'nav.about': 'Sobre Mí',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'nav.cv': 'CV',
      'nav.available': 'Disponible para nuevos proyectos',
      'nav.jobTitle': 'Ingeniera de Sistemas',

      // Hero Section
      'hero.greeting': 'Hola, soy',
      'hero.title': 'Systems Engineer & Full Stack Developer',
      'hero.jobTitle': 'Ingeniera de Sistemas',
      'hero.subtitle': 'Full Stack Developer',
      'hero.description': 'Creando soluciones digitales impactantes con planificación estratégica y tecnología innovadora.',
      'hero.downloadCV': 'Descargar CV',
      'hero.stats.experience': 'Años Experiencia',
      'hero.stats.projects': 'Proyectos',

      // About Section
      'about.badge': 'Conoce más sobre mí',
      'about.title': 'Sobre Mí',
      'about.description1': 'Ingeniera de sistemas especializada en desarrollo full-stack y diseño de soluciones estratégicas. Me motiva resolver desafíos complejos a través del pensamiento lógico y enfoques innovadores.',
      'about.description2': 'Mi experiencia abarca tecnologías web modernas, gestión de bases de datos y metodologías ágiles. Me enfoco en crear soluciones limpias y centradas en el usuario que entregan valor real.',
      'about.viewProjects': 'Ver mis proyectos',
      'about.availableToCollaborate': 'Disponible para colaborar',
      'about.highlights.development': 'Desarrollo Técnico',
      'about.highlights.developmentDesc': 'Experiencia en front-end, back-end y bases de datos',
      'about.highlights.thinking': 'Pensamiento Lógico',
      'about.highlights.thinkingDesc': 'Enfoque analítico para resolver desafíos complejos',
      'about.highlights.planning': 'Planificación Estratégica',
      'about.highlights.planningDesc': 'Visión a largo plazo en cada proyecto',
      'about.highlights.collaboration': 'Colaboración',
      'about.highlights.collaborationDesc': 'Trabajo efectivo en entornos dinámicos',
      'about.highlights.quality': 'Calidad',
      'about.highlights.qualityDesc': 'Código limpio y soluciones escalables',
      'about.highlights.innovation': 'Innovación',
      'about.highlights.innovationDesc': 'Siempre buscando nuevas tecnologías',
      'about.cta.title': '¿Listo para trabajar juntos?',
      'about.cta.description': 'Estoy siempre abierta a nuevas oportunidades y proyectos interesantes. Conectemos y creemos algo increíble juntos.',
      'about.cta.button': 'Hablemos',

      // Skills Section
      'skills.badge': 'Tecnologías y herramientas',
      'skills.title': 'Mis Habilidades',
      'skills.all': 'Todas',
      'skills.pause': 'Pausar',
      'skills.play': 'Reproducir',

      // Experience Section
      'experience.badge': 'Trayectoria profesional',
      'experience.title': 'Mi Experiencia',
      'experience.responsibilities': 'Responsabilidades principales:',
      'experience.skills.webDev': 'Desarrollo Web',
      'experience.skills.fullStack': 'Frontend & Backend',
      'experience.skills.dataAnalysis': 'Análisis de Datos',
      'experience.skills.techSupport': 'Soporte Técnico',
      'experience.skills.administration': 'Administración',
      'experience.skills.reports': 'Reportes',
      'experience.cta.title': '¿Interesado en mi experiencia?',
      'experience.cta.description': 'Descarga mi CV completo para conocer más detalles sobre mi trayectoria profesional y logros.',
      'experience.cta.button': 'Descargar CV Completo',

      // Projects Section
      'projects.badge': 'Portfolio de trabajos',
      'projects.title': 'Mis Proyectos',
      'projects.description': 'Una selección de proyectos que demuestran mis habilidades técnicas y creatividad',
      'projects.all': 'Todos',
      'projects.web': 'Web',
      'projects.mobile': 'Móvil',
      'projects.backend': 'Backend',
      'projects.comingSoon': 'Próximamente',
      'projects.featured': 'Destacado',
      'projects.code': 'Código',
      'projects.demo': 'Demo',
      'projects.empty.title': 'No hay proyectos en esta categoría',
      'projects.empty.description': 'Selecciona otra categoría para ver más proyectos',
      'projects.cta.title': '¿Tienes un proyecto en mente?',
      'projects.cta.description': 'Me encantaría colaborar contigo en tu próximo proyecto. Hablemos sobre cómo puedo ayudarte.',
      'projects.cta.button': 'Iniciar conversación',

      // Contact Section
      'contact.badge': 'Hablemos',
      'contact.title': 'Conectemos',
      'contact.description': '¿Tienes un proyecto en mente o simplemente quieres saludar? Me encantaría escuchar de ti.',
      'contact.subtitle': '¡Hablemos de tu próximo proyecto!',
      'contact.intro': 'Estoy siempre abierta a nuevas oportunidades y proyectos interesantes. Ya sea que necesites desarrollo web, consultoría técnica o simplemente quieras conectar, no dudes en contactarme.',
      'contact.email': 'Email',
      'contact.location': 'Ubicación',
      'contact.locationValue': 'Perú',
      'contact.response': 'Respuesta',
      'contact.responseTime': '< 24 horas',
      'contact.followMe': 'Sígueme en:',
      'contact.availability': 'Disponible para nuevos proyectos',
      'contact.availabilityDesc': 'Actualmente acepto proyectos freelance y oportunidades de colaboración.',

      // Common
      'common.loading': 'Cargando...',
      'common.error': 'Error',
      'common.success': 'Éxito',
      'common.close': 'Cerrar',
      'common.cancel': 'Cancelar',
      'common.save': 'Guardar',

      // Footer
      'footer.quickLinks': 'Enlaces Rápidos',
      'footer.madeWith': 'Hecho con',
      'footer.by': 'por Sandra Victoria Jade Reyes Quispe',
      'footer.backToTop': 'Volver arriba'
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.cv': 'CV',
      'nav.available': 'Available for new projects',
      'nav.jobTitle': 'Systems Engineer',

      // Hero Section
      'hero.greeting': 'Hello, I\'m',
      'hero.title': 'Systems Engineer & Full Stack Developer',
      'hero.jobTitle': 'Systems Engineer',
      'hero.subtitle': 'Full Stack Developer',
      'hero.description': 'Creating impactful digital solutions with strategic planning and innovative technology.',
      'hero.downloadCV': 'Download CV',
      'hero.stats.experience': 'Years Experience',
      'hero.stats.projects': 'Projects',

      // About Section
      'about.badge': 'Get to know me',
      'about.title': 'About Me',
      'about.description1': 'Systems engineer specializing in full-stack development and strategic solution design. I thrive on solving complex challenges through logical thinking and innovative approaches.',
      'about.description2': 'My expertise spans modern web technologies, database management, and agile methodologies. I focus on creating clean, user-centered solutions that deliver real value.',
      'about.viewProjects': 'View my projects',
      'about.availableToCollaborate': 'Available to collaborate',
      'about.highlights.development': 'Technical Development',
      'about.highlights.developmentDesc': 'Experience in front-end, back-end and databases',
      'about.highlights.thinking': 'Logical Thinking',
      'about.highlights.thinkingDesc': 'Analytical approach to solve complex challenges',
      'about.highlights.planning': 'Strategic Planning',
      'about.highlights.planningDesc': 'Long-term vision in every project',
      'about.highlights.collaboration': 'Collaboration',
      'about.highlights.collaborationDesc': 'Effective work in dynamic environments',
      'about.highlights.quality': 'Quality',
      'about.highlights.qualityDesc': 'Clean code and scalable solutions',
      'about.highlights.innovation': 'Innovation',
      'about.highlights.innovationDesc': 'Always seeking new technologies',
      'about.cta.title': 'Ready to work together?',
      'about.cta.description': 'I\'m always open to new opportunities and interesting projects. Let\'s connect and create something amazing together.',
      'about.cta.button': 'Let\'s talk',

      // Skills Section
      'skills.badge': 'Technologies and tools',
      'skills.title': 'My Skills',
      'skills.all': 'All',
      'skills.pause': 'Pause',
      'skills.play': 'Play',

      // Experience Section
      'experience.badge': 'Professional journey',
      'experience.title': 'My Experience',
      'experience.responsibilities': 'Main responsibilities:',
      'experience.skills.webDev': 'Web Development',
      'experience.skills.fullStack': 'Frontend & Backend',
      'experience.skills.dataAnalysis': 'Data Analysis',
      'experience.skills.techSupport': 'Technical Support',
      'experience.skills.administration': 'Administration',
      'experience.skills.reports': 'Reports',
      'experience.cta.title': 'Interested in my experience?',
      'experience.cta.description': 'Download my complete CV to learn more details about my professional journey and achievements.',
      'experience.cta.button': 'Download Complete CV',

      // Projects Section
      'projects.badge': 'Work portfolio',
      'projects.title': 'My Projects',
      'projects.description': 'A selection of projects that demonstrate my technical skills and creativity',
      'projects.all': 'All',
      'projects.web': 'Web',
      'projects.mobile': 'Mobile',
      'projects.backend': 'Backend',
      'projects.comingSoon': 'Coming Soon',
      'projects.featured': 'Featured',
      'projects.code': 'Code',
      'projects.demo': 'Demo',
      'projects.empty.title': 'No projects in this category',
      'projects.empty.description': 'Select another category to see more projects',
      'projects.cta.title': 'Have a project in mind?',
      'projects.cta.description': 'I\'d love to collaborate with you on your next project. Let\'s talk about how I can help you.',
      'projects.cta.button': 'Start conversation',

      // Contact Section
      'contact.badge': 'Let\'s talk',
      'contact.title': 'Let\'s Connect',
      'contact.description': 'Have a project in mind or just want to say hello? I\'d love to hear from you.',
      'contact.subtitle': 'Let\'s talk about your next project!',
      'contact.intro': 'I\'m always open to new opportunities and interesting projects. Whether you need web development, technical consulting, or just want to connect, don\'t hesitate to contact me.',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.locationValue': 'Peru',
      'contact.response': 'Response',
      'contact.responseTime': '< 24 hours',
      'contact.followMe': 'Follow me on:',
      'contact.availability': 'Available for new projects',
      'contact.availabilityDesc': 'Currently accepting freelance projects and collaboration opportunities.',

      // Common
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.success': 'Success',
      'common.close': 'Close',
      'common.cancel': 'Cancel',
      'common.save': 'Save',

      // Footer
      'footer.quickLinks': 'Quick Links',
      'footer.madeWith': 'Made with',
      'footer.by': 'by Sandra Victoria Jade Reyes Quispe',
      'footer.backToTop': 'Back to top'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Default to Spanish for Peruvian context
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;