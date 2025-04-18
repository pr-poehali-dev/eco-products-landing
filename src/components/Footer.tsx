import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-eco-primary" />
              <span className="text-xl font-bold">ЭкоДом</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Экологичные продукты для вашего дома и планеты.
            </p>
            <div className="flex space-x-4">
              {["🌐", "📷", "👥", "🐦"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-background hover:bg-eco-light transition-colors"
                >
                  <span className="text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2">
              {["Для кухни", "Для ванной", "Для уборки", "Для прачечной", "Новинки"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {["О нас", "Наша миссия", "Экологический подход", "Блог", "Карьера"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Подпишитесь на новости</h3>
            <p className="text-muted-foreground mb-4">
              Будьте в курсе новых экологичных продуктов и акций
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Ваш email" className="max-w-[220px]" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2023 ЭкоДом. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;