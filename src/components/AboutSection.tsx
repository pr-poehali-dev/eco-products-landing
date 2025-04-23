import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-white shadow-xl rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Елена - веб-дизайнер"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/40 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Обо <span className="text-primary">мне</span>
            </h2>
            
            <p className="text-lg text-gray-700">
              Я Елена, опытный веб-дизайнер с обширным портфолио успешных проектов. Моя миссия — создавать уникальные дизайны, которые не только эстетически привлекательны, но и эффективно привлекают клиентов и повышают узнаваемость вашего бренда.
            </p>
            
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">В работе я использую:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Индивидуальный подход</h4>
                    <p className="text-gray-600">Проведем личный созвон, на котором детально обсудим ваш запрос и ожидаемый результат.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Понятный процесс работы</h4>
                    <p className="text-gray-600">Составлю коммерческое предложение, в котором будут закреплены все этапы работы вместе со сроками и стоимостью.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Безопасность</h4>
                    <p className="text-gray-600">Заключим договор, который обезопасит обе стороны.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
