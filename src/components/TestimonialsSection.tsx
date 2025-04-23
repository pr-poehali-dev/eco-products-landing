import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg",
    stars: 5,
    text: "Елена создала для нашей компании потрясающий сайт, который превзошел все ожидания. Процесс был очень понятным и профессиональным, а результат привлек новых клиентов в первый же месяц работы."
  },
  {
    id: 2,
    name: "Мария Иванова",
    position: "Основатель, BeautyLine",
    avatar: "/placeholder.svg",
    stars: 5,
    text: "С Еленой мы полностью обновили дизайн нашего устаревшего сайта. Теперь он выглядит современно и прекрасно работает на всех устройствах. Количество обращений выросло на 40%!"
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    position: "Маркетолог, GreenHome",
    avatar: "/placeholder.svg",
    stars: 5,
    text: "Лендинг, созданный Еленой для нашей рекламной кампании, показал конверсию значительно выше среднего по рынку. Профессиональная работа, внимание к деталям и выполнение в срок."
  },
  {
    id: 4,
    name: "Ольга Петрова",
    position: "Владелец, CafeSweet",
    avatar: "/placeholder.svg",
    stars: 5,
    text: "Благодаря Елене наша кофейня получила стильный сайт, который идеально отражает атмосферу заведения. Посетители отмечают удобство и приятный дизайн, а онлайн-заказы выросли вдвое."
  },
  {
    id: 5,
    name: "Игорь Васильев",
    position: "Директор, TravelPlus",
    avatar: "/placeholder.svg",
    stars: 5,
    text: "С Еленой работать одно удовольствие! Она создала для нас многостраничный сайт с каталогом и фильтрами туров. Сайт работает безупречно, выглядит современно и помог нам увеличить продажи."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  
  const displayedTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    Math.min((currentIndex + 1) * itemsPerPage, testimonials.length)
  );

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <p className="text-lg text-gray-600">
            Что говорят мои клиенты о нашем сотрудничестве и результатах работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map(testimonial => (
            <Card 
              key={testimonial.id} 
              className="border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Page Indicators */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
