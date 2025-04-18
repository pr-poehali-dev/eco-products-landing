import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Из чего сделаны ваши эко-продукты?",
    answer: "Наши продукты изготовлены из натуральных ингредиентов, таких как растительные экстракты, эфирные масла, органические кислоты и другие компоненты природного происхождения. Мы не используем синтетические ароматизаторы, красители и консерванты."
  },
  {
    question: "Как долго служат многоразовые эко-товары?",
    answer: "Срок службы зависит от конкретного товара. Бамбуковые зубные щетки следует менять каждые 3 месяца, многоразовые мешочки и сумки могут служить годами при правильном уходе. На каждом товаре указан рекомендуемый срок использования."
  },
  {
    question: "Подходят ли ваши продукты для людей с аллергией?",
    answer: "Да, все наши продукты гипоаллергенны и подходят для людей с чувствительной кожей. Однако если у вас есть особые аллергические реакции, рекомендуем ознакомиться с полным составом продукта, указанным на упаковке."
  },
  {
    question: "Как осуществляется доставка?",
    answer: "Мы доставляем товары по всей России. В крупных городах доступна курьерская доставка, в регионы отправляем посылки через Почту России или транспортные компании. При заказе от 3000 рублей доставка бесплатная."
  },
  {
    question: "Можно ли вернуть товар?",
    answer: "Да, вы можете вернуть неиспользованный товар в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке и не иметь следов использования. Для оформления возврата обратитесь в нашу службу поддержки."
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших экологичных продуктах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Не нашли ответ на свой вопрос?</p>
          <a href="#contact" className="text-primary font-medium hover:underline inline-block mt-2">
            Свяжитесь с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;