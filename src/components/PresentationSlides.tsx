
import React from "react";
import Slide1 from "./presentation/Slide1";
import Slide2 from "./presentation/Slide2";
import Slide3 from "./presentation/Slide3";

const PresentationSlides = () => {
  return (
    <div className="space-y-12">
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </div>
  );
};

export default PresentationSlides;
