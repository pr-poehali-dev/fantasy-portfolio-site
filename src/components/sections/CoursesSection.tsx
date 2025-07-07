import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { courses } from "@/data/portfolio";

export const CoursesSection = () => {
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  return (
    <section id="courses" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="BookOpen" className="inline mr-4" size={32} />
          Курсы
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Dialog
              key={course.id}
              open={openCourse === course.id}
              onOpenChange={(open) => setOpenCourse(open ? course.id : null)}
            >
              <DialogTrigger asChild>
                <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group hover:scale-105 transform">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-amber-600/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                        <Icon
                          name="Book"
                          size={32}
                          className="text-amber-400"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-200 mb-2 group-hover:text-amber-100 transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex justify-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-amber-900/30 text-amber-300"
                        >
                          {course.level}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-amber-900/30 text-amber-300"
                        >
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
                    <Badge className="bg-amber-900/50 text-amber-300">
                      {course.level}
                    </Badge>
                    <Badge className="bg-amber-900/50 text-amber-300">
                      {course.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6">{course.description}</p>
                  <h4 className="text-lg font-semibold text-amber-300 mb-3">
                    Темы курса:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-green-400"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Icon name="Play" className="mr-2" size={16} />
                      Начать курс
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-500 text-amber-300 hover:bg-amber-900/20"
                    >
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
  );
};
