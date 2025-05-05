
import React from "react";

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
}

const SlideHeader = ({ title, subtitle }: SlideHeaderProps) => (
  <div className="bg-indigo-950 p-6 md:p-10">
    <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
      {title}
      {subtitle && <br />}
      {subtitle}
    </h1>
  </div>
);

export default SlideHeader;
