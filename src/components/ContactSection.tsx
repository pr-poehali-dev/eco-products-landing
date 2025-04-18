import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Свяжитесь с нами</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Остались вопросы или нужна консультация? Мы всегда готовы помочь!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-eco-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-eco-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Электронная почта</h3>
                <p className="text-muted-foreground">info@ecodom.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Мы отвечаем в течение 24 часов</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-eco-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Зеленая, д. 123</p>
                <p className="text-sm text-muted-foreground mt-1">Ежедневно: 10:00 - 20:00</p>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Карта" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Напишите ваш вопрос или комментарий..." rows={4} />
              </div>
              
              <Button type="submit" className="w-full">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;