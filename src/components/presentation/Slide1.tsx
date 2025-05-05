
import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-gray-50 p-10 flex items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/6f34f015-6019-4d98-bf66-2f754e14b90b.jpg" 
              alt="Молекулярная структура" 
              className="w-full h-auto max-w-md"
            />
          </div>
          
          <div className="p-10 space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2a0c72] leading-tight">
              ГИПОТЕЗА ПОДТВЕРЖДЕНА:
              <br />
              РЫНОК ГОТОВ ПЛАТИТЬ
            </h1>
            
            <p className="text-lg text-gray-700">
              Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6fc2b0] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#e6f4f1]"></div>
                </div>
                <p className="text-gray-700">подтверждённый product-market fit.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6fc2b0] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#e6f4f1]"></div>
                </div>
                <p className="text-gray-700">soft-коммитменты от лабораторий на закупку реагентов</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6fc2b0] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#e6f4f1]"></div>
                </div>
                <p className="text-gray-700">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-700">
                <span className="font-semibold">Наш научный фокус</span> — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
