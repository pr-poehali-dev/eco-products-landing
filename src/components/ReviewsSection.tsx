import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    position: "Мама двоих детей",
    comment: "С тех пор как я перешла на эко-продукты от ЭкоДом, мои дети перестали страдать от аллергии. Очень довольна качеством и эффективностью всех средств.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 2,
    name: "Сергей М.",
    position: "Эколог",
    comment: "Как специалист в области экологии, я очень внимательно изучаю состав продуктов. ЭкоДом полностью соответствует всем экологическим стандартам.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    name: "Елена В.",
    position: "Блогер",
    comment: "Рассказываю своим подписчикам о важности экологичного образа жизни. Продукция ЭкоДом - одна из лучших на рынке. Рекомендую!",
    avatar: "/placeholder.svg",
    rating: 4
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Что говорят люди, которые уже используют наши эко-продукты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-muted/30">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-eco-light rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Присоединяйтесь к нашим довольным клиентам!</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Более 1200 семей уже выбрали экологичные продукты для своего дома. Сделайте шаг к заботе о себе и планете.
          </p>
          <div className="flex -space-x-4 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-muted overflow-hidden">
                <span className="flex h-full w-full items-center justify-center text-lg">👤</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;