import { Leaf, Recycle, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Leaf className="h-10 w-10 text-eco-primary" />,
    title: "Натуральный состав",
    description: "Все наши продукты изготовлены только из натуральных компонентов и не содержат вредных химических веществ."
  },
  {
    icon: <Recycle className="h-10 w-10 text-eco-primary" />,
    title: "Биоразлагаемая упаковка",
    description: "Мы используем упаковку, которая не наносит вред окружающей среде и полностью разлагается."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-eco-primary" />,
    title: "Безопасно для всей семьи",
    description: "Наши продукты безопасны для детей, взрослых и домашних животных, не вызывают аллергических реакций."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-eco-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Преимущества эко-продуктов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему стоит выбрать экологичные продукты для вашего дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-eco-light/50 rounded-full p-3 inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground mb-6">
                Мы стремимся создавать продукты, которые делают ваш дом чище и безопаснее, 
                при этом не нанося вреда окружающей среде. Каждая покупка - это вклад в сохранение природы.
              </p>
              <ul className="space-y-3">
                {[
                  "Снижаем углеродный след",
                  "Следуем принципам устойчивого развития",
                  "Поддерживаем экологические инициативы"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-eco-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl">
              <img 
                src="/placeholder.svg" 
                alt="Наша миссия" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;