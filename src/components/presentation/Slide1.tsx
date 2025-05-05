
import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-gray-50 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/50b87188-a8b7-43b1-af5a-e9635d7619a9.jpg" 
              alt="Молекулярная структура" 
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight">
              ГИПОТЕЗА ПОДТВЕРЖДЕНА:
              <br />
              РЫНОК ГОТОВ ПЛАТИТЬ
            </h1>
            
            <p className="text-lg text-indigo-900">
              Мы глубоко понимаем свой продукт, рынок и целевую аудиторию.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1 opacity-80"></div>
                <p className="text-indigo-900">подтверждённый product-market fit.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1 opacity-80"></div>
                <p className="text-indigo-900">soft-коммитменты от лабораторий на закупку реагентов</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1 opacity-80"></div>
                <p className="text-indigo-900">предзаказ на разработку уникального нутрицевтика для онкологии, стоимость одной рецептуры 20 млн рублей.</p>
              </div>
            </div>
            
            <p className="text-indigo-900 mt-6">
              Наш научный фокус — создание передовых нутрицевтиков в сфере клинического и функционального питания, не имеющих аналогов в мире.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
