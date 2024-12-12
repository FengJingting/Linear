import React from "react";

interface LogoItemProps {
  logo: string;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, alt }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <img src={logo} alt={alt} className="max-h-10" />
    </div>
  );
};

export default LogoItem;