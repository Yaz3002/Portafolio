import { Skill, Experience, Project } from '../types';

export const skills: Skill[] = [
  // Lenguajes
  { name: 'HTML', category: 'language'},
  { name: 'CSS', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Java', category: 'language'},
  { name: 'Python', category: 'language'},
  { name: 'C#', category: 'language' },
  { name: 'PHP', category: 'language'},
  { name: 'R', category: 'language'},
  { name: 'SQL', category: 'language'},
  
  // Frameworks
  { name: 'Bootstrap', category: 'framework'},
  { name: 'jQuery', category: 'framework' },
  { name: 'Angular', category: 'framework'},
  { name: 'React', category: 'framework' },
  { name: 'Spring Boot', category: 'framework' },
  { name: '.NET', category: 'framework'},
  
  // Bases de datos
  { name: 'MySQL', category: 'database'},
  { name: 'MongoDB', category: 'database'},
  
  // Herramientas
  { name: 'Git', category: 'tool'},
  { name: 'GitHub', category: 'tool'},
  { name: 'Canva', category: 'tool'},
  { name: 'MS Office', category: 'tool'},
  { name: 'Excel', category: 'tool'},
  { name: 'Adobe Illustrator', category: 'tool'},
  
  // Metodologías
  { name: 'Scrum', category: 'methodology'},
  { name: 'Agile', category: 'methodology'},
  { name: 'Design Thinking', category: 'methodology'},
  
  // Habilidades blandas
  { name: 'Comunicación Asertiva', category: 'soft'},
  { name: 'Pensamiento Crítico', category: 'soft'},
  { name: 'Resolución de Problemas', category: 'soft'},
  { name: 'Trabajo Colaborativo', category: 'soft' },
];

export const experiences: Experience[] = [
  {
    company: 'GEORALAB S.A.C',
    position: 'Asistente Técnico en TI',
    period: 'Abr 2024 – Ago 2024',
    responsibilities: [
      'Desarrollo de sitios web con tecnologías front-end y back-end',
      'Diseño de paneles de control para análisis de decisiones',
      'Implementación de soluciones técnicas innovadoras'
    ]
  },
  {
    company: 'Soporte Técnico y Atención al Cliente',
    position: 'Especialista en TI',
    period: 'Oct 2021 – Mar 2022',
    responsibilities: [
      'Administración de hardware y servidores',
      'Presentación de reportes mensuales a supervisión',
      'Resolución de incidencias técnicas'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Gestion Inventario',
    description: 'Sitio web para la gestión de inventario de una floreria .Utiliza una API como Supabase para el manejo de datos.',
    technologies: ['React', 'TypeScript', 'SQL'],
    githubUrl: 'https://github.com/Yaz3002/GI_FLORAL',
    demoUrl: 'https://gi-floral.vercel.app/',
    image: '/CAPTURA_GI_FLORAL.jpeg?auto=compress&cs=tinysrgb&w=400',
    comingSoon: false
  },
  {
    id: '2',
    name: 'E-commerce',
    description: 'Sitio web desarrollado con React y Tailwind CSS en el frontend para rendimiento y diseño óptimos.',
    technologies: ['TypeScript', 'React', 'Vite'],
    githubUrl: 'https://github.com/Yaz3002/Ecommerce-PetShop',
    demoUrl: 'https://yaz3002.github.io/Ecommerce-PetShop/',
    image: '/CAPTURA_ECOMMERCE.jpeg?auto=compress&cs=tinysrgb&w=400',
    comingSoon: false
  },
  {
    id: '3',
    name: 'Georalab S.A.C Website',
    description: 'Landing page para Georalab, una empresa dedicada al estudio y pavimentación de suelos.',
    technologies: ['PHP', 'JavaScript', 'HTML'],
    githubUrl: 'https://github.com/Yaz3002/GEORALAB.github.io',
    demoUrl: 'https://yaz3002.github.io/GEORALAB.github.io/',
    image: '/CAPTURA_GEORALAB.jpeg?auto=compress&cs=tinysrgb&w=400',
    comingSoon: false
  }
];