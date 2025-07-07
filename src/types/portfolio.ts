export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
}

export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  icon: string;
}

export interface Certificate {
  name: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
