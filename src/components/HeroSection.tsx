import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создаю уникальный <span className="text-primary">дизайн</span> для вашего бизнеса
            </h1>
            <p className="text-lg text-muted-foreground">
              Привет! Я Елена, опытный веб-дизайнер. Помогу создать сайт, 
              который привлечет новых клиентов и повысит узнаваемость вашего бренда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="gap-2">
                Обсудить проект <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">Посмотреть работы</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="tel:+79202715633" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Телефон"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/elena_art_desing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:elena0904.elena@yandex.ru" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted relative">
              <img 
                src="/placeholder.svg"
                alt="Елена Афанасьева - веб-дизайнер"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent flex items-end p-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <p className="font-medium">Елена Афанасьева</p>
                  <p className="text-sm text-muted-foreground">Веб-дизайнер с опытом более 5 лет</p>
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