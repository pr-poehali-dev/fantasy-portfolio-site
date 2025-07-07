import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { techStack, stats } from "@/data/portfolio";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="User" className="inline mr-4" size={32} />
          Обо мне
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-300">
                Backend разработчик
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                Создаю надежные и масштабируемые серверные решения на Python.
                Специализируюсь на FastAPI, Django и работе с большими данными.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-purple-900/50 text-purple-300"
                  >
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
                Делюсь знаниями через курсы, презентации и блог. Помогаю
                начинающим разработчикам освоить Python и backend разработку.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {stats.students}
                  </div>
                  <div className="text-sm text-gray-400">Учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {stats.presentations}
                  </div>
                  <div className="text-sm text-gray-400">Презентаций</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
