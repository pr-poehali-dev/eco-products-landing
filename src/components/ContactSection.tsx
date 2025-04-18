import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Остались вопросы или хотите сделать заказ? Мы всегда на связи!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">info@ecodom.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Отвечаем в течение 24 часов</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Зеленая, д. 123</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Вс: 10:00 - 20:00</p>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Карта проезда" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.ru" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (xxx) xxx-xx-xx" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
              </div>
              
              <Button type="submit" className="w-full">Отправить</Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Отправляя форму, вы соглашаетесь с нашей <a href="#" className="underline">политикой конфиденциальности</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;