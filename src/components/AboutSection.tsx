import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-xl opacity-70"></div>
              <div className="relative rounded-lg overflow-hidden border">
                <img
                  src="/placeholder.svg"
                  alt="Обо мне"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-7/12 space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-primary">Обо</span> мне
            </h2>
            <p className="text-muted-foreground">
              Я Елена, опытный веб-дизайнер с многолетним стажем работы. Моя цель — создавать не просто красивые сайты, а эффективные инструменты для вашего бизнеса, которые помогут привлечь новых клиентов и укрепить позиции бренда.
            </p>
            
            <h3 className="text-xl font-semibold pt-2">В работе я использую:</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Индивидуальный подход",
                  description: "Проведем личный созвон, на котором детально обсудим ваш запрос и ожидаемый результат."
                },
                {
                  title: "Понятный процесс работы",
                  description: "Составлю коммерческое предложение, в котором будут закреплены все этапы работы вместе со сроками и стоимостью."
                },
                {
                  title: "Безопасность",
                  description: "Заключим договор, который обезопасит обе стороны."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
