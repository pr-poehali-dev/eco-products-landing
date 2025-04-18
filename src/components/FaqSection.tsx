import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Насколько экологичны ваши продукты?",
    answer: "Все наши продукты разработаны с учетом минимального воздействия на окружающую среду. Мы используем только натуральные компоненты, биоразлагаемую упаковку и придерживаемся принципов экологичного производства."
  },
  {
    question: "Безопасны ли ваши продукты для детей и домашних животных?",
    answer: "Да, наши продукты абсолютно безопасны для всей семьи, включая детей и домашних животных. Мы не используем токсичные вещества, агрессивные химикаты или сильные ароматизаторы."
  },
  {
    question: "Как долго служат ваши экологичные товары?",
    answer: "Срок службы зависит от конкретного продукта и интенсивности использования. Несмотря на то, что экологичные товары могут иметь немного меньший срок службы, чем синтетические аналоги, они не наносят вред окружающей среде при утилизации."
  },
  {
    question: "Осуществляете ли вы доставку?",
    answer: "Да, мы осуществляем доставку по всей России. При заказе от 3000 рублей доставка бесплатная. Срок доставки зависит от вашего региона и обычно составляет 2-7 рабочих дней."
  },
  {
    question: "Можно ли вернуть товар, если он не подошел?",
    answer: "Конечно! Если товар вам не подошел, вы можете вернуть его в течение 14 дней с момента получения при условии сохранения товарного вида и упаковки."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Часто задаваемые вопросы</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Ответы на популярные вопросы о наших экологичных продуктах для дома
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Не нашли ответ на свой вопрос? Свяжитесь с нами!
          </p>
          <a href="#contact" className="inline-block mt-4 text-primary font-medium hover:underline">
            Перейти к форме связи
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;