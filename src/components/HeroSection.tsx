import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-eco-light to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Эко-продукты для <span className="text-eco-primary">чистого дома</span> и здоровой планеты
            </h1>
            <p className="text-lg text-muted-foreground">
              Натуральные, биоразлагаемые и экологически чистые товары для дома, которые заботятся о вашем здоровье и окружающей среде.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Смотреть каталог <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-muted border-2 border-background overflow-hidden">
                    <span className="flex h-full w-full items-center justify-center text-sm">👤</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">1200+</span> счастливых клиентов
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Эко-продукты для дома" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-eco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      </div>
    </section>
  );
};

export default HeroSection;