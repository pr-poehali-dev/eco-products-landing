
import React from "react";

const timelineItems = [
  {
    year: "2025",
    title: "Масштабирование производства",
    subtitle: "Доработка линейки реагентов",
    color: "bg-purple-400"
  },
  {
    year: "2026",
    title: "Расширение продуктовой линейки",
    subtitle: "Разработка и патентование рецептур нутрицевтиков",
    color: "bg-indigo-900"
  },
  {
    year: "2027",
    title: "Глобализация",
    subtitle: "Создание научных хабов в странах БРИКС",
    color: "bg-purple-400"
  },
  {
    year: "2028",
    title: "Расширение сети дистрибуции",
    subtitle: "Выход на рынки: США,Канада",
    color: "bg-indigo-900"
  },
  {
    year: "2029",
    title: "Укрепление позиций на мировой арене",
    subtitle: "",
    color: "bg-purple-400"
  }
];

const Slide3 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-gray-50 overflow-hidden">
        <div className="mb-12">
          <div className="bg-indigo-900 py-6 px-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              ДОРОЖНАЯ КАРТА
            </h1>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="h-1 bg-indigo-900/20 absolute top-1/3 left-0 right-0 z-0"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className={`${item.color} text-white font-bold px-6 py-3 mb-4 w-28 text-center`}>
                    {item.year}
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="text-indigo-900 font-bold text-lg">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-indigo-900 text-sm mt-1">{item.subtitle}</p>
                    )}
                  </div>
                  
                  <div className="absolute top-1/3 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full border-2 border-indigo-900/30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
