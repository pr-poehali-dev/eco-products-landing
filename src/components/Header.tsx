import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-playfair font-bold"
        >
          Елена<span className="text-primary">.</span>Дизайн
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            <a href="#contact">Связаться</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLinks mobile onClick={toggleMenu} />
            <Button 
              asChild 
              className="w-full rounded-full bg-primary hover:bg-primary/90 mt-4"
            >
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const baseClassName = mobile
    ? "block py-2 hover:text-primary transition-colors font-medium"
    : "hover:text-primary transition-colors font-medium highlight-underline";

  const links = [
    { href: "#about", label: "Обо мне" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#process", label: "Процесс" },
    { href: "#testimonials", label: "Отзывы" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={baseClassName}
          onClick={onClick}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Header;
