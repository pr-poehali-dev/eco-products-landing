import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Globe, ShoppingBag, Layout, Layers, Compass } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Дизайн сайтов",
      description: "Создание современных и уникальных дизайнов для вашего веб-сайта с учетом ваших потребностей и целевой аудитории."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Разработка лендингов",
      description: "Разработка эффективных лендингов, которые конвертируют посетителей в клиентов."
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Интернет-магазины",
      description: "Дизайн функциональных и привлекательных интернет-магазинов с удобным пользовательским интерфейсом."
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Редизайн сайтов",
      description: "Обновление устаревших сайтов с сохранением фирменного стиля и улучшением пользовательского опыта."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Фирменный стиль",
      description: "Разработка уникального фирменного стиля, который отражает ценности и характер вашего бренда."
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "UI/UX Дизайн",
      description: "Проектирование удобных и интуитивно понятных пользовательских интерфейсов с фокусом на пользовательском опыте."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Мои <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground">
            Предлагаю широкий спектр услуг в области веб-дизайна и разработки, направленных на создание эффективных решений для вашего бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow group">
              <CardHeader>
                <div className="mb-2 group-hover:text-primary transition-colors">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
