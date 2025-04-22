import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-lg text-muted-foreground">
            Готовы обсудить ваш проект? Заполните форму ниже или свяжитесь со 
            мной любым удобным способом.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Напишите мне</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Тема сообщения
                </label>
                <Input id="subject" placeholder="Обсуждение нового проекта" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите подробнее о вашем проекте..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                Отправить сообщение <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a 
                      href="tel:+79202715633" 
                      className="text-primary hover:underline"
                    >
                      +7 (920) 271-56-33
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:elena0904.elena@yandex.ru" 
                      className="text-primary hover:underline"
                    >
                      elena0904.elena@yandex.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a 
                      href="https://www.instagram.com/elena_art_desing/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @elena_art_desing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border">
              <h4 className="text-xl font-medium mb-4">Быстрый ответ</h4>
              <p className="text-muted-foreground mb-6">
                Я стараюсь отвечать на все сообщения в течение 24 часов. 
                Для быстрой связи рекомендую использовать Telegram.
              </p>
              <Button variant="outline" asChild className="gap-2">
                <a 
                  href="https://t.me/afnelena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.858-.921 3.935-1.302 5.222-.38 1.289-.704 2.416-.704 2.416s-.064.267-.302.315c-.239.048-.598-.19-.719-.275-.12-.085-1.855-1.21-2.518-1.766-.2-.168-.433-.55.03-.972.465-.422 2.093-1.98 2.626-2.44.532-.46.798-1.175-.58-.258-.1378.917-3.544 2.346-3.904 2.553-.36.208-.694.208-1.216.045-.522-.164-1.165-.378-1.165-.378s-.522-.237.36-.662c.882-.425 4.53-1.945 4.53-1.945s3.904-1.655 4.238-1.87c.334-.213.195-.213.195-.213-.047-.331-.195-.52-.559-.52z" />
                  </svg>
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;