
import React, { useState } from "react";
import Slide1 from "./presentation/Slide1";
import Slide2 from "./presentation/Slide2";
import Slide3 from "./presentation/Slide3";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PresentationSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />
  ];
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  return (
    <div className="relative">
      {slides[currentSlide]}
      
      {/* Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6">
        <button
          onClick={goToPrevSlide}
          className="bg-white text-[#2a0c72] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-[#6fc2b0] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNextSlide}
          className="bg-white text-[#2a0c72] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Следующий слайд"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PresentationSlides;
