import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Изучение потребностей",
      description: "Проводим детальную консультацию, где обсуждаем ваши цели, потребности аудитории и конкурентное окружение.",
    },
    {
      number: "02",
      title: "Коммерческое предложение",
      description: "Составляю коммерческое предложение с подробным описанием всех этапов работы, сроков и стоимости.",
    },
    {
      number: "03",
      title: "Заключение договора",
      description: "Официально оформляем наше сотрудничество, что обеспечивает безопасность и прозрачность для обеих сторон.",
    },
    {
      number: "04",
      title: "Прототипирование",
      description: "Создаю прототипы страниц для визуализации структуры и функциональности будущего сайта.",
    },
    {
      number: "05",
      title: "Дизайн",
      description: "Разрабатываю уникальный дизайн, учитывая ваш бренд, целевую аудиторию и тренды веб-дизайна.",
    },
    {
      number: "06",
      title: "Правки и финализация",
      description: "Вношу необходимые корректировки на основе вашей обратной связи и финализирую проект.",
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мой <span className="text-primary">процесс</span> работы
          </h2>
          <p className="text-lg text-gray-600">
            Я придерживаюсь структурированного подхода к каждому проекту, обеспечивая эффективность и высокое качество результата.
          </p>
        </div>

        <div className="relative">
          {/* Декоративная линия для десктопа */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-primary/20 -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 relative lg:mb-8">
                      <span className="text-xl font-bold">{step.number}</span>
                      {/* Вертикальная линия для мобильных */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden absolute h-16 w-0.5 bg-secondary/70 top-full left-1/2 -translate-x-1/2"></div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
