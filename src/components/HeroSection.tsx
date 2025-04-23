import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block bg-accent/20 px-4 py-2 rounded-full text-sm font-medium text-accent-foreground">
              Веб-дизайнер • UI/UX специалист
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Привет! Я Елена, <br />
              <span className="text-primary">веб-дизайнер</span> из России
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Создаю уникальные сайты, которые привлекают новых клиентов и повышают узнаваемость вашего бренда.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild>
                <a href="#contact">
                  Обсудить проект
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">Смотреть работы</a>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-muted rounded-2xl overflow-hidden border shadow-lg aspect-square md:aspect-[4/5] max-w-md mx-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Елена - веб-дизайнер" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
