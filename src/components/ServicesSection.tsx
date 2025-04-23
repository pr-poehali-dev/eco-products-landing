import {
  Paintbrush,
  LayoutGrid,
  ShoppingBag,
  Smartphone,
  Zap,
  RefreshCw
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      title: "Веб-дизайн",
      description: "Создание современных, функциональных и эстетически привлекательных веб-сайтов с учетом ваших бизнес-целей."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-primary" />,
      title: "Дизайн интерфейсов",
      description: "Разработка интуитивно понятных и удобных пользовательских интерфейсов для веб-сайтов и приложений."
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Дизайн интернет-магазинов",
      description: "Создание эффективных и красивых интернет-магазинов, мотивирующих посетителей совершать покупки."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Адаптивный дизайн",
      description: "Разработка сайтов, которые отлично выглядят и функционируют на всех устройствах, от компьютеров до смартфонов."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Лендинги",
      description: "Создание высококонверсионных целевых страниц, оптимизированных для достижения конкретных бизнес-задач."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Редизайн",
      description: "Обновление и улучшение дизайна существующих веб-сайтов для повышения их эффективности и привлекательности."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои <span className="text-primary">услуги</span>
          </h2>
          <p className="text-lg text-gray-600">
            Я предлагаю полный спектр услуг по веб-дизайну, чтобы помочь вашему бизнесу выделиться в онлайн-пространстве и достичь поставленных целей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
