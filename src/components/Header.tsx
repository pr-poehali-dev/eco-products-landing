import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-eco-primary" />
          <span className="text-xl font-bold">ЭкоДом</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors">
            Продукты
          </a>
          <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors">
            Преимущества
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Отзывы
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
            Частые вопросы
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="hidden md:flex">
            Заказать
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Открыть меню</span>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a href="#products" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Продукты
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Преимущества
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Отзывы
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Частые вопросы
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline">Войти</Button>
              <Button>Заказать</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;