import { Leaf, Recycle, Heart } from "lucide-react";

const benefits = [
  {
    icon: <Leaf className="h-10 w-10 text-eco-primary" />,
    title: "Натуральный состав",
    description: "Все наши продукты изготовлены только из натуральных компонентов и не содержат вредных химических веществ."
  },
  {
    icon: <Recycle className="h-10 w-10 text-eco-primary" />,
    title: "Экологичная упаковка",
    description: "Мы используем биоразлагаемую или перерабатываемую упаковку, чтобы снизить негативное влияние на природу."
  },
  {
    icon: <Heart className="h-10 w-10 text-eco-primary" />,
    title: "Забота о здоровье",
    description: "Наши продукты безопасны для здоровья всей семьи, включая детей и домашних животных."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-eco-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Почему стоит выбрать нас</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Наши экологичные продукты не только помогают сохранить планету, но и делают вашу жизнь безопаснее и здоровее.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-eco-light p-3 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-background rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Наша миссия — сделать планету чище</h3>
              <p className="text-muted-foreground mb-4">
                Мы стремимся создавать экологичные и безопасные продукты, которые помогут сократить количество отходов и загрязнение окружающей среды.
              </p>
              <ul className="space-y-2">
                {[
                  "Используем только возобновляемые ресурсы",
                  "Перерабатываем отходы производства",
                  "Поддерживаем экологические инициативы"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-eco-primary text-white flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg"
                alt="Наша миссия"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;