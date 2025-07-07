import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <Icon
            name="Code"
            size={64}
            className="mx-auto text-purple-400 mb-4"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Магия Python
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Превращаю идеи в код, создаю backend решения и делюсь знаниями о
          программировании
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            <Icon name="Download" className="mr-2" size={20} />
            Скачать резюме
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};
