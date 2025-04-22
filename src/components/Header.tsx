import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Елена Афанасьева</span>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Обо мне</a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Процесс</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:flex">
          <Button>Связаться</Button>
        </div>

        {/* Мобильное меню */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Обо мне</a>
            <a 
              href="#services" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Услуги</a>
            <a 
              href="#portfolio" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Портфолио</a>
            <a 
              href="#process" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Процесс</a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >Контакты</a>
            <div className="pt-2">
              <Button className="w-full">Связаться</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;