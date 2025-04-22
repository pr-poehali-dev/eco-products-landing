import { 
  CheckCircle2, 
  Gem, 
  Globe, 
  Layout, 
  Smartphone, 
  Store 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
          <p className="text-lg text-muted-foreground">
            Я предлагаю комплексные решения для создания эффективного присутствия 
            вашего бизнеса в интернете.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <Layout className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Веб-дизайн</h3>
            <p className="text-muted-foreground mb-4">
              Создание современного, удобного и привлекательного дизайна сайта с 
              учетом ваших бизнес-целей.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Уникальный дизайн</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">UX/UI оптимизация</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Дизайн-система</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <Smartphone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Адаптивный дизайн</h3>
            <p className="text-muted-foreground mb-4">
              Разработка дизайна, который отлично выглядит и работает на всех 
              устройствах.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Мобильная версия</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Планшетная версия</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Десктопная версия</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <Store className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Дизайн интернет-магазина</h3>
            <p className="text-muted-foreground mb-4">
              Создание эффективного и удобного интернет-магазина, который будет 
              конвертировать посетителей в покупателей.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Каталог товаров</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Карточки товаров</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Корзина и оформление заказа</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <Globe className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Редизайн сайтов</h3>
            <p className="text-muted-foreground mb-4">
              Обновление устаревшего дизайна и улучшение пользовательского опыта 
              вашего существующего сайта.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Анализ текущего сайта</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Современный дизайн</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Улучшение конверсии</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <Gem className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Брендинг</h3>
            <p className="text-muted-foreground mb-4">
              Разработка фирменного стиля и визуальной идентичности вашего бренда 
              для цифровых платформ.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Логотип</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Цветовая палитра</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">Типографика</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 border-primary/20 border hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center p-4">
              <h3 className="text-xl font-semibold mb-4">Нужна индивидуальная услуга?</h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь со мной, чтобы обсудить ваш проект и получить индивидуальное предложение.
              </p>
              <Button>Связаться для консультации</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;