import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { projects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="FolderOpen" className="inline mr-4" size={32} />
          Проекты
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/50 transition-colors group"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-300 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={
                      project.status === "Завершен" ? "default" : "secondary"
                    }
                    className={
                      project.status === "Завершен"
                        ? "bg-green-900/50 text-green-300"
                        : "bg-orange-900/50 text-orange-300"
                    }
                  >
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
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-purple-500/30 text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-purple-300 hover:text-purple-200 hover:bg-purple-900/20"
                >
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
