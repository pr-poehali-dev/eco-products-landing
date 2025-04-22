import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Интернет-магазин органической косметики",
      description: "Дизайн современного интернет-магазина с удобной навигацией и адаптивной версткой",
      image: "/placeholder.svg",
      tags: ["E-commerce", "UX/UI", "Адаптивный дизайн"],
      link: "https://pin.it/6Ew5eP29Z"
    },
    {
      id: 2,
      title: "Корпоративный сайт IT-компании",
      description: "Минималистичный дизайн с акцентом на контент и удобство использования",
      image: "/placeholder.svg",
      tags: ["Корпоративный сайт", "Минимализм", "Анимации"],
      link: "https://www.behance.net/d9af5"
    },
    {
      id: 3,
      title: "Лендинг образовательного курса",
      description: "Яркий и привлекательный дизайн, ориентированный на конверсию",
      image: "/placeholder.svg",
      tags: ["Лендинг", "Конверсия", "Микроанимации"],
      link: "https://pin.it/6Ew5eP29Z"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои работы</h2>
          <p className="text-lg text-muted-foreground">
            Познакомьтесь с некоторыми из моих последних проектов. 
            Каждый проект уникален и создан с учетом потребностей клиента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-muted rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Посмотреть <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <a 
              href="https://www.behance.net/d9af5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gap-2"
            >
              Больше проектов на Behance <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;