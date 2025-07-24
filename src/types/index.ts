export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool' | 'methodology' | 'soft';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  comingSoon?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}