import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioSection: React.FC = () => {
  const categories = [
    { id: "all", label: "Все проекты" },
    { id: "web", label: "Веб-сайты" },
    { id: "landing", label: "Лендинги" },
    { id: "ecommerce", label: "Интернет-магазины" },
    { id: "branding", label: "Фирменный стиль" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Редизайн сайта ресторана 'Аврора'",
      category: ["web"],
      image: "/placeholder.svg",
      link: "https://behance.net"
    },
    {
      id: 2,
      title: "Интернет-магазин 'GreenLife'",
      category: ["ecommerce", "web"],
      image: "/placeholder.svg",
      link: "https://behance.net"
    },
    {
      id: 3,
      title: "Лендинг для IT-стартапа Neurotech",
      category: ["landing", "web"],
      image: "/placeholder.svg",
      link: "https://pinterest.com"
    },
    {
      id: 4,
      title: "Фирменный стиль для кофейни 'Утро'",
      category: ["branding"],
      image: "/placeholder.svg",
      link: "https://behance.net"
    },
    {
      id: 5,
      title: "Сайт юридической компании 'LegalPro'",
      category: ["web"],
      image: "/placeholder.svg",
      link: "https://pinterest.com"
    },
    {
      id: 6,
      title: "Лендинг курса по веб-дизайну",
      category: ["landing", "web"],
      image: "/placeholder.svg",
      link: "https://behance.net"
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Мои <span className="text-primary">работы</span>
          </h2>
          <p className="text-muted-foreground">
            Здесь представлены некоторые из моих последних проектов. Посмотрите на них, чтобы оценить мой стиль и подход к дизайну.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" asChild>
              <a href="https://pin.it/6Ew5eP29Z" target="_blank" rel="noopener noreferrer">
                Pinterest
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.behance.net/d9af5" target="_blank" rel="noopener noreferrer">
                Behance
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="h-auto p-1 bg-background border">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => 
                    category.id === "all" || project.category.includes(category.id)
                  )
                  .map(project => (
                    <Card key={project.id} className="overflow-hidden border hover:shadow-lg transition-all group">
                      <CardContent className="p-0">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block relative"
                        >
                          <div className="aspect-[3/2] overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h3 className="text-white font-medium">{project.title}</h3>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
