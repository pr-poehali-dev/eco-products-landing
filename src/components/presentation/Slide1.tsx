
import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-gray-50 p-10 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <img 
                src="https://cdn.poehali.dev/files/39908cd5-c8d0-4131-9406-54674f06a0b3.jpg" 
                alt="Молекулярная структура" 
                className="w-full h-auto"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-200 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="p-10 space-y-8">
            <div className="bg-[#212A44] p-4 rounded-lg inline-block">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                ГИПОТЕЗА ПОДТВЕРЖДЕНА:
                <br />
                РЫНОК ГОТОВ ПЛАТИТЬ
              </h1>
            </div>
            
            <p className="text-lg text-gray-700">
              Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7269ef] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex-1">
                  <p className="text-gray-700">подтверждённый product-market fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7269ef] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex-1">
                  <p className="text-gray-700">soft-коммитменты от лабораторий на закупку реагентов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#7269ef] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex-1">
                  <p className="text-gray-700">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold text-[#212A44]">Наш научный фокус</span> — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
