
import React from "react";

const Slide2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-gray-50 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight mb-8">
              РЫНОК МИКРОБИОМНЫХ
              <br />
              ИССЛЕДОВАНИЙ
            </h1>
            
            <div className="space-y-4 text-indigo-900">
              <p className="text-lg">
                Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что 
                эквивалентно выручке порядка $150 млн.
              </p>
              
              <p className="text-lg">
                Прогнозируемая капитализация RND компании - 500+ млн $ 2031 год
              </p>
            </div>
            
            <div className="mt-8 text-right">
              <p className="text-indigo-900 font-bold text-xl">CAGR - 25%</p>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <img 
              src="https://cdn.poehali.dev/files/a387c69a-7d2f-48fc-9594-df40a39e7cd5.jpg" 
              alt="Чашки Петри с микробиомными культурами" 
              className="w-full h-auto rounded"
            />
            
            <div className="absolute top-4 left-4 text-indigo-900 font-semibold">
              <p>Глобальный - 4,5 млрд $</p>
              <p>Реагенты - 1,5 млрд $</p>
            </div>
            
            <div className="absolute bottom-16 left-4 text-indigo-900 font-semibold">
              <p>РФ - 45 млн $</p>
            </div>
            
            <div className="absolute bottom-4 left-4 text-indigo-900 font-semibold">
              <p>2031г</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
