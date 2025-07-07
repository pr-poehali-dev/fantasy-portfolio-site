import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { education, certificates } from "@/data/portfolio";

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="GraduationCap" className="inline mr-4" size={32} />
          Образование
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon
                      name={edu.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-2">{edu.university}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Сертификаты
                  </h3>
                  <div className="space-y-2">
                    {certificates.map((cert, index) => (
                      <p key={index} className="text-gray-300">
                        • {cert.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
