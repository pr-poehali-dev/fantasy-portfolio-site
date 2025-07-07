import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { contactInfo, socialLinks } from "@/data/portfolio";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">
          <Icon name="Mail" className="inline mr-4" size={32} />
          Контакты
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-300">
                Свяжитесь со мной
              </CardTitle>
              <CardDescription className="text-gray-300">
                Открыт для новых проектов и интересного сотрудничества
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-purple-400" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-purple-400" />
                  <span className="text-gray-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-purple-400" />
                  <span className="text-gray-300">{contactInfo.location}</span>
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
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20"
                  >
                    <Icon
                      name={social.icon as any}
                      className="mr-2"
                      size={20}
                    />
                    {social.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
