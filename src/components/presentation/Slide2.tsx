
import React from "react";

const Slide2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-10 space-y-8 order-2 md:order-1">
            <div className="bg-[#212A44] p-4 rounded-lg inline-block">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                РЫНОК МИКРОБИОМНЫХ
                <br />
                ИССЛЕДОВАНИЙ
              </h1>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#7269ef] shadow-sm">
                <p className="text-lg">
                  <span className="font-semibold text-[#212A44]">Цель</span> - занять 10% сегмента рынка реагентов в течение 5 лет, что эквивалентно выручке порядка $150 млн.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#7269ef] shadow-sm">
                <p className="text-lg">
                  <span className="font-semibold text-[#212A44]">Прогнозируемая капитализация</span> RND компании - 500+ млн $ 2031 год
                </p>
              </div>
            </div>
            
            <div className="pt-6 text-right">
              <span className="inline-block px-4 py-2 bg-[#7269ef] text-white font-bold rounded-lg shadow-md">
                CAGR - 25%
              </span>
            </div>
          </div>
          
          <div className="relative bg-gray-50 p-10 flex items-center justify-center order-1 md:order-2">
            <img 
              src="https://cdn.poehali.dev/files/79552beb-f6de-4fd5-81a0-902ac30b41d0.jpg" 
              alt="Чашки Петри с микробиомными культурами" 
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
            
            <div className="absolute top-8 left-8 p-4 bg-white rounded-lg shadow-md border-l-4 border-[#212A44]">
              <p className="text-[#212A44] font-semibold">Глобальный - 4,5 млрд $</p>
              <p className="text-[#212A44] font-semibold">Реагенты - 1,5 млрд $</p>
            </div>
            
            <div className="absolute bottom-24 left-8 p-4 bg-white rounded-lg shadow-md border-l-4 border-[#212A44]">
              <p className="text-[#212A44] font-semibold">РФ - 45 млн $</p>
            </div>
            
            <div className="absolute bottom-8 left-8 p-2 bg-[#212A44] text-white font-semibold rounded-md shadow-md">
              <p>2031г</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
