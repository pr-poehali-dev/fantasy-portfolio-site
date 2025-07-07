import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  const projects = [
    {
      title: "Система управления данными",
      description: "Backend API на FastAPI с PostgreSQL для обработки больших объемов данных",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      status: "Завершен"
    },
    {
      title: "Автоматизация DevOps",
      description: "Скрипты для CI/CD пайплайнов и мониторинга инфраструктуры",
      tech: ["Python", "Docker", "Kubernetes", "Jenkins"],
      status: "В разработке"
    },
    {
      title: "Анализ данных",
      description: "Система для анализа и визуализации больших данных",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      status: "Завершен"
    }
  ];

  const courses = [
    {
      id: "python-basics",
      title: "Основы Python",
      level: "Новичок",
      duration: "8 недель",
      description: "Изучение основ программирования на Python от переменных до объектно-ориентированного программирования",
      topics: ["Переменные и типы данных", "Условия и циклы", "Функции", "Классы и объекты", "Работа с файлами"]
    },
    {
      id: "backend-dev",
      title: "Backend разработка",
      level: "Средний",
      duration: "12 недель",
      description: "Создание серверных приложений с использованием современных Python фреймворков",
      topics: ["FastAPI", "Django", "Базы данных", "REST API", "Тестирование", "Деплой"]
    },
    {
      id: "data-science",
      title: "Наука о данных",
      level: "Продвинутый",
      duration: "16 недель",
      description: "Глубокое изучение анализа данных, машинного обучения и статистики",
      topics: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Статистика", "Визуализация"]
    }
  ];

  const blogPosts = [
    {
      title: "Оптимизация производительности Python",
      excerpt: "10 техник для ускорения вашего Python кода",
      date: "15 декабря 2024",
      readTime: "5 мин"
    },
    {
      title: "Микросервисы на FastAPI",
      excerpt: "Как построить масштабируемую архитектуру",
      date: "8 декабря 2024",
      readTime: "7 мин"
    },
    {
      title: "Автоматизация с Python",
      excerpt: "Скрипты для повседневных задач разработчика",
      date: "1 декабря 2024",
      readTime: "4 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Icon name="Code" size={64} className="mx-auto text-purple-400 mb-4" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Магия Python
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Превращаю идеи в код, создаю backend решения и делюсь знаниями о программировании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать резюме
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="User" className="inline mr-4" size={32} />
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">Backend разработчик</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Создаю надежные и масштабируемые серверные решения на Python. 
                  Специализируюсь на FastAPI, Django и работе с большими данными.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "Django", "PostgreSQL", "Docker", "AWS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-purple-900/50 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">Преподаватель</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Делюсь знаниями через курсы, презентации и блог. 
                  Помогаю начинающим разработчикам освоить Python и backend разработку.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-gray-400">Учеников</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Презентаций</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="GraduationCap" className="inline mr-4" size={32} />
            Образование
          </h2>
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="School" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Магистр Computer Science</h3>
                    <p className="text-gray-300 mb-2">Московский Государственный Университет</p>
                    <p className="text-gray-400 text-sm">2020 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Сертификаты</h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">• AWS Certified Solutions Architect</p>
                      <p className="text-gray-300">• Python Professional Certificate</p>
                      <p className="text-gray-300">• Docker Certified Associate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="FolderOpen" className="inline mr-4" size={32} />
            Проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-purple-300 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant={project.status === 'Завершен' ? 'default' : 'secondary'} 
                           className={project.status === 'Завершен' ? 'bg-green-900/50 text-green-300' : 'bg-orange-900/50 text-orange-300'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full text-purple-300 hover:text-purple-200 hover:bg-purple-900/20">
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="BookOpen" className="inline mr-4" size={32} />
            Курсы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Dialog key={course.id} open={openCourse === course.id} onOpenChange={(open) => setOpenCourse(open ? course.id : null)}>
                <DialogTrigger asChild>
                  <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group hover:scale-105 transform">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-amber-600/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                          <Icon name="Book" size={32} className="text-amber-400" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex justify-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-amber-900/30 text-amber-300">
                            {course.level}
                          </Badge>
                          <Badge variant="secondary" className="bg-amber-900/30 text-amber-300">
                            {course.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                          {course.description}
                        </p>
                        <div className="text-amber-400 font-semibold">
                          Нажмите для открытия →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-amber-500/30 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-amber-300 flex items-center gap-2">
                      <Icon name="BookOpen" size={24} />
                      {course.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="flex gap-4 mb-4">
                      <Badge className="bg-amber-900/50 text-amber-300">{course.level}</Badge>
                      <Badge className="bg-amber-900/50 text-amber-300">{course.duration}</Badge>
                    </div>
                    <p className="text-gray-300 mb-6">{course.description}</p>
                    <h4 className="text-lg font-semibold text-amber-300 mb-3">Темы курса:</h4>
                    <ul className="space-y-2 mb-6">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <Icon name="CheckCircle" size={16} className="text-green-400" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Icon name="Play" className="mr-2" size={16} />
                        Начать курс
                      </Button>
                      <Button variant="outline" className="border-amber-500 text-amber-300 hover:bg-amber-900/20">
                        <Icon name="Download" className="mr-2" size={16} />
                        Программа курса
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="PenTool" className="inline mr-4" size={32} />
            Блог
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/50 transition-colors group">
                <CardHeader>
                  <CardTitle className="text-purple-300 group-hover:text-purple-200 transition-colors text-lg">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                    <span>•</span>
                    <Icon name="Clock" size={14} />
                    {post.readTime}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="w-full text-purple-300 hover:text-purple-200 hover:bg-purple-900/20">
                    <Icon name="ArrowRight" className="mr-2" size={16} />
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
            <Icon name="Mail" className="inline mr-4" size={32} />
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">Свяжитесь со мной</CardTitle>
                <CardDescription className="text-gray-300">
                  Открыт для новых проектов и интересного сотрудничества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-purple-400" />
                    <span className="text-gray-300">your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-purple-400" />
                    <span className="text-gray-300">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-purple-400" />
                    <span className="text-gray-300">Москва, Россия</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">Социальные сети</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20">
                    <Icon name="Github" className="mr-2" size={20} />
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20">
                    <Icon name="Linkedin" className="mr-2" size={20} />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20">
                    <Icon name="Twitter" className="mr-2" size={20} />
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Python Портфолио. Создано с магией кода ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;