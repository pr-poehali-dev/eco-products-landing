import { CalendarDays, FileText, LayoutPanelLeft, MessagesSquare, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Обсуждение и брифинг",
      description: "Проведение созвона для детального обсуждения вашего проекта, целей и ожиданий.",
      icon: <MessagesSquare className="h-7 w-7 text-primary" />
    },
    {
      id: 2,
      title: "Коммерческое предложение",
      description: "Подготовка и согласование детального предложения, включающего сроки и стоимость.",
      icon: <FileText className="h-7 w-7 text-primary" />
    },
    {
      id: 3,
      title: "Заключение договора",
      description: "Официальное оформление нашего сотрудничества для обеспечения безопасности обеих сторон.",
      icon: <CalendarDays className="h-7 w-7 text-primary" />
    },
    {
      id: 4,
      title: "Разработка дизайна",
      description: "Создание прототипов и дизайн-макетов с учетом ваших пожеланий и современных тенденций.",
      icon: <LayoutPanelLeft className="h-7 w-7 text-primary" />
    },
    {
      id: 5,
      title: "Запуск проекта",
      description: "Финальные доработки, подготовка всех необходимых материалов и передача готового проекта.",
      icon: <Rocket className="h-7 w-7 text-primary" />
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс работы</h2>
          <p className="text-lg text-muted-foreground">
            Я придерживаюсь четкого процесса работы, который обеспечивает 
            эффективное сотрудничество и высокое качество результата.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row gap-6 mb-8 items-start">
              <div className="flex items-center md:flex-col gap-4 md:gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div className={`hidden md:block w-1 ${index === steps.length - 1 ? 'h-0' : 'h-24'} bg-primary/20 mx-auto my-2`}></div>
              </div>
              
              <div className="bg-card border rounded-lg p-6 shadow-sm flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary font-medium text-sm rounded-full px-3 py-1">
                    Шаг {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;