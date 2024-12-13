import React from "react";

interface CenterWrapperProps {
  children: React.ReactNode;
}

const CenterWrapper: React.FC<CenterWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-start justify-center min-h-[80vh] mx-32 px-16 py-32">
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default CenterWrapper;