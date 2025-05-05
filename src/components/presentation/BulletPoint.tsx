
import React from "react";

interface BulletPointProps {
  text: string;
}

const BulletPoint = ({ text }: BulletPointProps) => (
  <div className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-blue-200 flex-shrink-0 mt-1"></div>
    <p className="text-indigo-950">{text}</p>
  </div>
);

export default BulletPoint;
