
import React from "react";

const timelineItems = [
  {
    year: "2025",
    title: "Масштабирование производства",
    description: "Доработка линейки реагентов",
    color: "bg-[#7269ef]"
  },
  {
    year: "2026",
    title: "Расширение продуктовой линейки",
    description: "Разработка и патентование рецептур нутрицевтиков",
    color: "bg-[#212A44]"
  },
  {
    year: "2027",
    title: "Глобализация",
    description: "Создание научных хабов в странах БРИКС",
    color: "bg-[#7269ef]"
  },
  {
    year: "2028",
    title: "Расширение сети дистрибуции",
    description: "Выход на рынки: США, Канада",
    color: "bg-[#212A44]"
  },
  {
    year: "2029",
    title: "Укрепление позиций на мировой арене",
    description: "",
    color: "bg-[#7269ef]"
  }
];

const Slide3 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-10 space-y-10">
          <div className="bg-[#212A44] py-5 px-10 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              ДОРОЖНАЯ КАРТА
            </h1>
          </div>
          
          <div className="relative px-6">
            {/* Timeline horizontal line */}
            <div className="absolute h-1 bg-gray-200 top-16 left-0 right-0 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pt-10">
                  {/* Circle connector */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-[#7269ef] shadow-md"></div>
                  </div>
                  
                  {/* Year box */}
                  <div className={`${item.color} text-white font-bold rounded-lg p-4 text-center mb-6 shadow-md`}>
                    {item.year}
                  </div>
                  
                  {/* Content box */}
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#7269ef] h-full shadow-sm">
                    <h3 className="font-semibold text-[#212A44] text-lg mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-3 pt-6">
            {timelineItems.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === 2 ? 'bg-[#7269ef]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
