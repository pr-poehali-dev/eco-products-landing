
import React from "react";
import SlideContainer from "./SlideContainer";
import SlideContent from "./SlideContent";
import SlideHeader from "./SlideHeader";
import TimelineNode from "./TimelineNode";

const timelineData = [
  {
    year: "2025",
    title: "Масштабирование производства",
    description: "Доработка линейки реагентов",
    variant: "light" as const
  },
  {
    year: "2026",
    title: "Расширение продуктовой линейки",
    description: "Разработка и патентование рецептур нутрицевтиков",
    variant: "dark" as const
  },
  {
    year: "2027",
    title: "Глобализация",
    description: "Создание научных хабов в странах БРИКС",
    variant: "light" as const
  },
  {
    year: "2028",
    title: "Расширение сети дистрибуции",
    description: "Выход на рынки: США,Канада",
    variant: "dark" as const
  },
  {
    year: "2029",
    title: "Укрепление позиций на мировой арене",
    variant: "light" as const
  }
];

const Slide3 = () => {
  return (
    <SlideContainer>
      <SlideHeader title="ДОРОЖНАЯ КАРТА" />
      
      <SlideContent>
        <div className="relative">
          <div className="h-2 bg-indigo-300 absolute top-32 left-0 right-0 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {timelineData.map((item, index) => (
              <TimelineNode 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  );
};

export default Slide3;
