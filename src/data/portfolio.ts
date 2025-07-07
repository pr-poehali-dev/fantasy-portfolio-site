import {
  Project,
  Course,
  BlogPost,
  ContactInfo,
  Education,
  Certificate,
  SocialLink,
} from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Система управления данными",
    description:
      "Backend API на FastAPI с PostgreSQL для обработки больших объемов данных",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    status: "Завершен",
  },
  {
    title: "Автоматизация DevOps",
    description: "Скрипты для CI/CD пайплайнов и мониторинга инфраструктуры",
    tech: ["Python", "Docker", "Kubernetes", "Jenkins"],
    status: "В разработке",
  },
  {
    title: "Анализ данных",
    description: "Система для анализа и визуализации больших данных",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    status: "Завершен",
  },
];

export const courses: Course[] = [
  {
    id: "python-basics",
    title: "Основы Python",
    level: "Новичок",
    duration: "8 недель",
    description:
      "Изучение основ программирования на Python от переменных до объектно-ориентированного программирования",
    topics: [
      "Переменные и типы данных",
      "Условия и циклы",
      "Функции",
      "Классы и объекты",
      "Работа с файлами",
    ],
  },
  {
    id: "backend-dev",
    title: "Backend разработка",
    level: "Средний",
    duration: "12 недель",
    description:
      "Создание серверных приложений с использованием современных Python фреймворков",
    topics: [
      "FastAPI",
      "Django",
      "Базы данных",
      "REST API",
      "Тестирование",
      "Деплой",
    ],
  },
  {
    id: "data-science",
    title: "Наука о данных",
    level: "Продвинутый",
    duration: "16 недель",
    description:
      "Глубокое изучение анализа данных, машинного обучения и статистики",
    topics: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Статистика",
      "Визуализация",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Оптимизация производительности Python",
    excerpt: "10 техник для ускорения вашего Python кода",
    date: "15 декабря 2024",
    readTime: "5 мин",
  },
  {
    title: "Микросервисы на FastAPI",
    excerpt: "Как построить масштабируемую архитектуру",
    date: "8 декабря 2024",
    readTime: "7 мин",
  },
  {
    title: "Автоматизация с Python",
    excerpt: "Скрипты для повседневных задач разработчика",
    date: "1 декабря 2024",
    readTime: "4 мин",
  },
];

export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  phone: "+7 (999) 123-45-67",
  location: "Москва, Россия",
};

export const education: Education[] = [
  {
    degree: "Магистр Computer Science",
    university: "Московский Государственный Университет",
    period: "2020 - 2022",
    icon: "School",
  },
];

export const certificates: Certificate[] = [
  { name: "AWS Certified Solutions Architect" },
  { name: "Python Professional Certificate" },
  { name: "Docker Certified Associate" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "Github", url: "#" },
  { name: "LinkedIn", icon: "Linkedin", url: "#" },
  { name: "Twitter", icon: "Twitter", url: "#" },
  { name: "Telegram", icon: "MessageCircle", url: "#" },
];

export const techStack = [
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export const stats = {
  students: "500+",
  presentations: "50+",
};
