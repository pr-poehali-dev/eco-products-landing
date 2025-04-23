import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              Елена<span className="text-secondary">.Дизайн</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Создаю уникальные веб-сайты, которые привлекают клиентов и повышают узнаваемость вашего бренда.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/elena_art_desing/profilecard/?igsh=cWNraGlsMW5uN2My"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:elena0904.elena@yandex.ru"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+79202715633"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/afnelena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Telegram"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Процесс работы
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                <span>
                  <a href="tel:+79202715633" className="hover:text-primary transition-colors">
                    +7 (920) 271-56-33
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                <span>
                  <a href="https://t.me/afnelena" className="hover:text-primary transition-colors">
                    @afnelena
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                <span>
                  <a href="mailto:elena0904.elena@yandex.ru" className="hover:text-primary transition-colors">
                    elena0904.elena@yandex.ru
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
                <span>
                  <a 
                    href="https://www.instagram.com/elena_art_desing/profilecard/?igsh=cWNraGlsMW5uN2My" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    elena_art_desing
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Елена.Дизайн. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
