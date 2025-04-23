import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Типы проектов для фильтрации
const projectTypes = ["Все", "Веб-сайты", "Лендинги", "Интернет-магазины", "Редизайн"];

// Имитация данных проектов
const portfolioProjects = [
  {
    id: 1,
    title: "Sofa Boston",
    category: "Интернет-магазины",
    image: "https://cdn.poehali.dev/files/3265bd22-97a9-4428-9ce4-2c95fecd3072.png",
    description: "Дизайн интернет-магазина мебели с минималистичным стилем и удобной навигацией.",
    link: "https://pin.it/6Ew5eP29Z"
  },
  {
    id: 2,
    title: "СПА-салон",
    category: "Лендинги",
    image: "https://cdn.poehali.dev/files/419c15b8-8a24-40f1-a32a-c31432807a04.png",
    description: "Продающий лендинг для СПА-салона с акцентом на парные процедуры и специальные предложения.",
    link: "https://www.behance.net/d9af5"
  },
  {
    id: 3,
    title: "Nike Air Force",
    category: "Интернет-магазины",
    image: "https://cdn.poehali.dev/files/fb26ba36-2b42-42a7-b85a-8d8c239fa12e.png",
    description: "Страница продукта для интернет-магазина обуви с ярким дизайном и четким описанием.",
    link: "https://pin.it/6Ew5eP29Z"
  },
  {
    id: 4,
    title: "Кофейня Aroma",
    category: "Веб-сайты",
    image: "/placeholder.svg",
    description: "Полноценный сайт для кофейни с уютным дизайном и онлайн-заказом.",
    link: "https://www.behance.net/d9af5"
  },
  {
    id: 5,
    title: "Студия йоги Harmony",
    category: "Редизайн",
    image: "/placeholder.svg",
    description: "Обновление дизайна сайта студии йоги с улучшенным UX/UI и мобильной версией.",
    link: "https://pin.it/6Ew5eP29Z"
  },
  {
    id: 6,
    title: "Туристическое агентство Explore",
    category: "Веб-сайты",
    image: "/placeholder.svg",
    description: "Многостраничный сайт туристического агентства с интерактивными элементами и каталогом туров.",
    link: "https://www.behance.net/d9af5"
  }
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeFilter === "Все"
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои <span className="text-primary">работы</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ознакомьтесь с моими последними проектами, которые демонстрируют мой опыт и стиль в веб-дизайне.
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTypes.map(type => (
            <Button
              key={type}
              variant={activeFilter === type ? "default" : "outline"}
              className="rounded-full"
              onClick={() => {
                setActiveFilter(type);
                setVisibleProjects(6);
              }}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Проекты */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative group h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать больше" */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <Button 
              onClick={handleShowMore}
              variant="outline" 
              className="rounded-full px-8"
            >
              Показать больше работ
            </Button>
          </div>
        )}

        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            Хотите увидеть больше моих работ? Посетите мои профили:
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full">
              <a href="https://pin.it/6Ew5eP29Z" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="https://www.behance.net/d9af5" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
