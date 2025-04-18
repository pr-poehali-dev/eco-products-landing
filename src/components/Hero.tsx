import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#f1f8e9] to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-3 py-1 text-sm">
              <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
              <span className="text-primary font-medium">Экологически чистые товары</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Эко-продукты для <span className="text-primary">здорового дома</span> и планеты
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Натуральные, биоразлагаемые и экологически безопасные товары для вашего дома. 
              Забота о семье и окружающей среде в каждом продукте.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Смотреть каталог <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            
            <div className="flex items-center gap-2 pt-6">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white border-2 border-background overflow-hidden">
                    <span className="flex h-full w-full items-center justify-center text-sm">👤</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-medium">1000+</span> счастливых клиентов
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Экологичные продукты для дома" 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium">100% натуральные</p>
                <p className="text-xs text-muted-foreground">безопасны для всей семьи</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;