import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, FileText, ClipboardCheck, PenTool, Layers, CheckCircle2 } from "lucide-react";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      title: "Обсуждение проекта",
      description: "Проведем детальное обсуждение ваших целей, требований и ожиданий от проекта.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Коммерческое предложение",
      description: "Подготовлю коммерческое предложение с указанием сроков, стоимости и этапов работы.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: "Заключение договора",
      description: "Оформим официальный договор, который защитит интересы обеих сторон.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Разработка дизайна",
      description: "Создам несколько концепций дизайна на выбор и внесу необходимые корректировки.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Финализация проекта",
      description: "Доработаю выбранный вариант дизайна с учетом всех ваших пожеланий и комментариев.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Сдача проекта",
      description: "Передам все необходимые файлы и материалы для дальнейшей работы с проектом.",
    },
  ];

  return (
    <section id="process" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Как я <span className="text-primary">работаю</span>
          </h2>
          <p className="text-muted-foreground">
            Мой процесс работы построен таким образом, чтобы обеспечить максимальную прозрачность, эффективность и качество результата.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="mb-2">{step.icon}</div>
                <CardTitle className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-2">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <div className={`h-1 w-full ${index < steps.length - 1 ? 'bg-gradient-to-r from-primary to-transparent' : 'bg-primary'}`}></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
