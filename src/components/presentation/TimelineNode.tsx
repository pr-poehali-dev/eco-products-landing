
import React from "react";

interface TimelineNodeProps {
  year: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
}

const TimelineNode = ({ 
  year, 
  title, 
  description, 
  variant = "light" 
}: TimelineNodeProps) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
    </div>
    <div className={`${variant === "dark" ? "bg-indigo-950" : "bg-indigo-400"} text-white text-center py-2 px-4 rounded-lg w-full mb-2`}>
      <p className="font-bold">{year}</p>
    </div>
    <div className="text-center">
      <h3 className="font-bold text-indigo-950">{title}</h3>
      {description && <p className="text-sm text-indigo-800">{description}</p>}
    </div>
  </div>
);

export default TimelineNode;
