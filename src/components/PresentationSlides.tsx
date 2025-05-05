
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
      
      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={goToPrevSlide}
          className="bg-indigo-900 text-white p-2 rounded-full"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-indigo-900" : "bg-indigo-300"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNextSlide}
          className="bg-indigo-900 text-white p-2 rounded-full"
          aria-label="Следующий слайд"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PresentationSlides;
