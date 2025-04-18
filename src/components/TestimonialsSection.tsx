import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Мама двоих детей",
    content: "Я всегда беспокоилась о химических средствах в доме, особенно с маленькими детьми. Продукты ЭкоДома полностью решили эту проблему. Они эффективные и при этом абсолютно безопасные!",
    rating: 5
  },
  {
    name: "Сергей Иванов",
    role: "Эколог",
    content: "Как человек, который профессионально занимается вопросами экологии, я могу с уверенностью сказать, что продукция этой компании действительно соответствует всем экологическим стандартам.",
    rating: 5
  },
  {
    name: "Елена Козлова",
    role: "Домохозяйка",
    content: "Пользуюсь биоразлагаемыми губками и натуральным моющим средством уже несколько месяцев. Качество отличное, а главное - никакой химии в доме!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Что говорят наши клиенты</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Нам доверяют тысячи людей, которые заботятся об экологии и своём здоровье.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted mr-3 flex items-center justify-center text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-eco-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нашим довольным клиентам!</h3>
          <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
            Более 1000 семей уже сделали свой дом экологичнее с нашими продуктами. Станьте частью сообщества, которое заботится о планете.
          </p>
          <div className="flex justify-center">
            <div className="bg-background p-2 rounded-full">
              <div className="flex -space-x-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-12 w-12 rounded-full bg-muted border-2 border-background overflow-hidden flex items-center justify-center text-xl">
                    👤
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;