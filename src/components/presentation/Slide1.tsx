
import React from "react";
import BulletPoint from "./BulletPoint";
import SlideContainer from "./SlideContainer";
import SlideContent from "./SlideContent";
import SlideHeader from "./SlideHeader";

const bulletPoints = [
  "подтверждённый product-market fit.",
  "soft-коммитменты от лабораторий на закупку реагентов",
  "предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей."
];

const Slide1 = () => {
  return (
    <SlideContainer>
      <SlideHeader 
        title="ГИПОТЕЗА ПОДТВЕРЖДЕНА:" 
        subtitle="РЫНОК ГОТОВ ПЛАТИТЬ" 
      />
      
      <SlideContent>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://cdn.poehali.dev/files/dc812029-b9f3-4f1d-a9d8-8a6f996727a0.jpeg" 
              alt="Молекулярная структура" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-indigo-950">
              Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
            </p>
            
            <div className="space-y-4">
              {bulletPoints.map((point, index) => (
                <BulletPoint key={index} text={point} />
              ))}
            </div>
            
            <p className="text-indigo-950 mt-6">
              Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и 
              функционального питания, не имеющих аналогов в мире.
            </p>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  );
};

export default Slide1;
