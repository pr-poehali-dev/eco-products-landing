import { Palette } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-10 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Елена Афанасьева</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#process" className="text-sm hover:text-primary transition-colors">
              Процесс
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Контакты
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/elena_art_desing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a 
              href="https://t.me/afnelena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.858-.921 3.935-1.302 5.222-.38 1.289-.704 2.416-.704 2.416s-.064.267-.302.315c-.239.048-.598-.19-.719-.275-.12-.085-1.855-1.21-2.518-1.766-.2-.168-.433-.55.03-.972.465-.422 2.093-1.98 2.626-2.44.532-.46.798-1.175-.58-.258-.1378.917-3.544 2.346-3.904 2.553-.36.208-.694.208-1.216.045-.522-.164-1.165-.378-1.165-.378s-.522-.237.36-.662c.882-.425 4.53-1.945 4.53-1.945s3.904-1.655 4.238-1.87c.334-.213.195-.213.195-.213-.047-.331-.195-.52-.559-.52z" />
              </svg>
            </a>
            <a 
              href="mailto:elena0904.elena@yandex.ru" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="tel:+79202715633" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Елена Афанасьева. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;