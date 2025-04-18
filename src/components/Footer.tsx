import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ЭкоДом</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Экологичные товары для дома и заботы о планете
            </p>
            <div className="flex space-x-4">
              {["🌐", "📱", "📷", "🐦"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-8 w-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              {["Для кухни", "Для ванной", "Для уборки", "Для стирки", "Новинки"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              {["О нас", "Блог", "Доставка", "Оплата", "Контакты"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Подпишитесь на рассылку</h3>
            <p className="text-muted-foreground mb-4">
              Будьте в курсе новинок и акций
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Ваш email" />
              <Button>OK</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 ЭкоДом. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;