
import React from "react";
import InfoOverlay from "./InfoOverlay";
import SlideContainer from "./SlideContainer";
import SlideContent from "./SlideContent";
import SlideHeader from "./SlideHeader";

const Slide2 = () => {
  return (
    <SlideContainer>
      <SlideHeader 
        title="РЫНОК МИКРОБИОМНЫХ" 
        subtitle="ИССЛЕДОВАНИЙ" 
      />
      
      <SlideContent bgColor="from-pink-50">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 relative">
            <img 
              src="https://cdn.poehali.dev/files/44116d8a-796e-4b7a-8b18-3f6c7dc85c1b.jpeg" 
              alt="Чашки Петри с микробиомными культурами" 
              className="w-full h-auto max-w-md mx-auto"
            />
            
            <InfoOverlay top="top-10" left="left-10">
              <p className="text-indigo-950 font-semibold">Глобальный - 4,5 млрд $</p>
              <p className="text-indigo-950 font-semibold">Реагенты - 1,5 млрд $</p>
            </InfoOverlay>
            
            <InfoOverlay top="bottom-10" left="left-20">
              <p className="text-indigo-950 font-semibold">РФ - 45 млн $</p>
            </InfoOverlay>
            
            <div className="absolute bottom-0 left-0">
              <p className="text-indigo-950 font-semibold">2031г</p>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-indigo-950">
                Цель - занять 10% сегмента рынка реагентов в течение 5 лет, что 
                эквивалентно выручке порядка $150 млн.
              </p>
              
              <p className="text-lg text-indigo-950">
                Прогнозируемая капитализация RND компании - 500+ млн $ 2031 год
              </p>
            </div>
            
            <div className="mt-10 bg-indigo-950/5 p-4 rounded-lg">
              <p className="text-indigo-950 font-bold text-xl text-right">CAGR - 25%</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  );
};

export default Slide2;
