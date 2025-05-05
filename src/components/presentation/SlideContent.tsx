
import React from "react";

interface SlideContentProps {
  children: React.ReactNode;
  bgColor?: string;
}

const SlideContent = ({ bgColor = "from-blue-50", children }: SlideContentProps) => (
  <div className={`bg-gradient-to-br ${bgColor} to-white p-6 md:p-10`}>
    {children}
  </div>
);

export default SlideContent;
