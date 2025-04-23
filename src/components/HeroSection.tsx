import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/30 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/30 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создаю <span className="text-primary">уникальные</span> дизайны для вашего бренда
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Я Елена, опытный веб-дизайнер. Помогаю брендам привлекать больше клиентов через современный и уникальный дизайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base px-8">
                Смотреть работы
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-8">
                Обсудить проект
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-secondary via-secondary/50 to-secondary/20 p-6">
              <img
                src="/placeholder.svg"
                alt="Елена - Веб-дизайнер"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-8 bg-white shadow-lg rounded-xl p-4 animate-bounce">
              <span className="text-4xl">✨</span>
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white shadow-lg rounded-xl p-3 animate-pulse">
              <span className="text-2xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
