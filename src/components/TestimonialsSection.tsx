import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      position: "Директор, Ресторан 'Аврора'",
      content: "Елена создала для нас потрясающий дизайн сайта, который полностью отражает концепцию нашего ресторана. Работа была выполнена в срок и с учетом всех наших пожеланий. Теперь у нас значительно выросла конверсия и количество бронирований через сайт.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Марина Иванова",
      position: "Основатель, GreenLife Store",
      content: "Сотрудничество с Еленой было очень плодотворным. Она не только разработала современный дизайн для нашего интернет-магазина, но и дала ценные рекомендации по улучшению пользовательского опыта. Благодарим за профессионализм и ответственный подход!",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Дмитрий Королев",
      position: "CEO, Neurotech",
      content: "Отличный специалист! Елена быстро поняла специфику нашего IT-стартапа и создала лендинг, который идеально передает наши ценности и привлекает целевую аудиторию. Работа выполнена качественно и в соответствии с договоренностями.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Ольга Смирнова",
      position: "Владелец, Кофейня 'Утро'",
      content: "Я очень довольна разработанным фирменным стилем для нашей кофейни. Елена продемонстрировала глубокое понимание наших потребностей и создала уникальный дизайн, который выделяет нас среди конкурентов. Однозначно рекомендую!",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">Отзывы</span> клиентов
          </h2>
          <p className="text-muted-foreground">
            Что говорят мои клиенты о работе со мной и результатах наших проектов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border">
              <CardContent className="pt-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4 pb-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
