
import React from "react";

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer = ({ children }: SlideContainerProps) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
    <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      {children}
    </div>
  </div>
);

export default SlideContainer;
