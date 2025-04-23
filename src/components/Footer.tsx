import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Логотип и краткое описание */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-playfair font-bold">
              Елена<span className="text-primary">.</span>Дизайн
            </Link>
            <p className="text-gray-600 max-w-xs">
              Создаю уникальные веб-дизайны, которые привлекают новых клиентов и повышают узнаваемость вашего бренда.
            </p>
          </div>
          
          {/* Навигация */}
          <div>
            <h4 className="text-lg font-bold mb-4">Навигация</h4>
            <nav className="space-y-3">
              <a href="#about" className="block text-gray-600 hover:text-primary transition-colors">
                Обо мне
              </a>
              <a href="#services" className="block text-gray-600 hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#portfolio" className="block text-gray-600 hover:text-primary transition-colors">
                Портфолио
              </a>
              <a href="#process" className="block text-gray-600 hover:text-primary transition-colors">
                Процесс
              </a>
              <a href="#testimonials" className="block text-gray-600 hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
          </div>
          
          {/* Контакты */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79202715633" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+7 (920) 271-56-33</span>
              </a>
              <a href="mailto:elena0904.elena@yandex.ru" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>elena0904.elena@yandex.ru</span>
              </a>
              <a href="https://t.me/afnelena" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span>@afnelena</span>
              </a>
              <a href="https://www.instagram.com/elena_art_desing/profilecard/?igsh=cWNraGlsMW5uN2My" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>@elena_art_desing</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Разделитель */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Елена.Дизайн. Все права защищены.
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              Создано с <Heart className="h-4 w-4 text-primary mx-1 fill-primary" /> 
              <a href="#" className="hover:text-primary transition-colors">Еленой</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
