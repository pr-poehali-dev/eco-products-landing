import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare, Instagram, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
    alert("Сообщение отправлено! Скоро я свяжусь с вами.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Свяжитесь <span className="text-primary">со мной</span>
          </h2>
          <p className="text-lg text-gray-600">
            Буду рада обсудить детали вашего проекта и ответить на все вопросы. Заполните форму, и я свяжусь с вами в ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {/* Телефон */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Телефон</h4>
                    <a href="tel:+79202715633" className="text-gray-700 hover:text-primary transition-colors">
                      +7 (920) 271-56-33
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a href="mailto:elena0904.elena@yandex.ru" className="text-gray-700 hover:text-primary transition-colors">
                      elena0904.elena@yandex.ru
                    </a>
                  </div>
                </div>
                
                {/* Telegram */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Telegram</h4>
                    <a href="https://t.me/afnelena" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                      @afnelena
                    </a>
                  </div>
                </div>
                
                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Instagram</h4>
                    <a href="https://www.instagram.com/elena_art_desing/profilecard/?igsh=cWNraGlsMW5uN2My" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                      @elena_art_desing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Призыв к действию */}
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Готовы начать проект?</h3>
              <p className="mb-6">Давайте обсудим вашу идею и создадим уникальный дизайн, который привлечет новых клиентов.</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Написать в Telegram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Отправьте сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваше имя"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Введите ваш email"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите ваш телефон"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
