import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Анна Смирнова",
    role: "Мама двоих детей",
    text: "С тех пор как я перешла на эко-продукты ЭкоДом, у моего ребенка перестала проявляться аллергия. Товары не только экологичные, но и по-настоящему эффективные!",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 2,
    name: "Сергей Иванов",
    role: "Эколог",
    text: "Как специалист в области экологии, я внимательно изучаю состав продуктов. ЭкоДом полностью соответствует всем экологическим стандартам и заслуживает высшей оценки.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Петрова",
    role: "Блогер",
    text: "Уже год рассказываю своим подписчикам об осознанном потреблении и экологичном образе жизни. Продукция ЭкоДом неизменно входит в мои рекомендации.",
    avatar: "/placeholder.svg",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас люди, которые выбрали экологичные товары для своего дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Присоединяйтесь к нашим счастливым клиентам!</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Более 1000 семей уже выбрали экологичные товары для своего дома. 
            Сделайте шаг к здоровому образу жизни и заботе о планете.
          </p>
          <div className="flex -space-x-4 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full bg-white border-2 border-primary/10 overflow-hidden">
                <span className="flex h-full w-full items-center justify-center text-md">👤</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;