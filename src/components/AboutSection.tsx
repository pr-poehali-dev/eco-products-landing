import { Shield, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
          <p className="text-lg text-muted-foreground">
            Я профессиональный веб-дизайнер, специализирующийся на создании 
            современных и функциональных сайтов, которые помогают бизнесу расти.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Индивидуальный подход</h3>
            <p className="text-muted-foreground">
              Проведем личный созвон, на котором детально обсудим ваш запрос и 
              ожидаемый результат. Каждый проект уникален для меня.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Понятный процесс</h3>
            <p className="text-muted-foreground">
              Составлю коммерческое предложение, в котором будут закреплены все 
              этапы работы вместе со сроками и стоимостью.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 flex flex-col items-center text-center shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Безопасность</h3>
            <p className="text-muted-foreground">
              Заключим договор, который обезопасит обе стороны. Ясные условия 
              сотрудничества и гарантия качества.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;