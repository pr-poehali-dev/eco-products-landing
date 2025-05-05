
import React from "react";

interface InfoOverlayProps {
  top?: string;
  left?: string;
  children: React.ReactNode;
  className?: string;
}

const InfoOverlay = ({ top, left, children, className = "" }: InfoOverlayProps) => (
  <div className={`bg-indigo-950/10 backdrop-blur-sm rounded-lg p-4 absolute ${top} ${left} ${className}`}>
    {children}
  </div>
);

export default InfoOverlay;
