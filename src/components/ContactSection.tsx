import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Instagram } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Телефон",
      value: "+7 (920) 271-56-33",
      link: "tel:+79202715633",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: "Telegram",
      value: "@afnelena",
      link: "https://t.me/afnelena",
    },
    {
      icon: <Instagram className="h-5 w-5 text-primary" />,
      title: "Instagram",
      value: "elena_art_desing",
      link: "https://www.instagram.com/elena_art_desing/profilecard/?igsh=cWNraGlsMW5uN2My",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "elena0904.elena@yandex.ru",
      link: "mailto:elena0904.elena@yandex.ru",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Свяжитесь <span className="text-primary">со мной</span>
          </h2>
          <p className="text-muted-foreground">
            Готовы обсудить ваш проект? Заполните форму ниже или используйте любой из контактов для связи со мной.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Введите ваш email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <Input
                      id="subject"
                      placeholder="Тема сообщения"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-5/12 space-y-4">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{contact.title}</h4>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Рабочее время</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Понедельник - Пятница:</span>
                  <span>10:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Суббота:</span>
                  <span>11:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Воскресенье:</span>
                  <span>Выходной</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
