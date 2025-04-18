import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-eco-primary" />
          <span className="text-xl font-bold">ЭкоДом</span>
        </div>

        {/* Десктопная навигация */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-sm font-medium hover:text-eco-primary transition-colors">Продукты</a>
          <a href="#benefits" className="text-sm font-medium hover:text-eco-primary transition-colors">Преимущества</a>
          <a href="#reviews" className="text-sm font-medium hover:text-eco-primary transition-colors">Отзывы</a>
          <a href="#faq" className="text-sm font-medium hover:text-eco-primary transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium hover:text-eco-primary transition-colors">Контакты</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Каталог</Button>
          <Button>Заказать</Button>
        </div>

        {/* Мобильная навигация */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#products" className="text-sm font-medium hover:text-eco-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Продукты</a>
            <a href="#benefits" className="text-sm font-medium hover:text-eco-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Преимущества</a>
            <a href="#reviews" className="text-sm font-medium hover:text-eco-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
            <a href="#faq" className="text-sm font-medium hover:text-eco-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-eco-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" className="flex-1">Каталог</Button>
              <Button className="flex-1">Заказать</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;