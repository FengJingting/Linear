import React from "react";
import LogoItem from "./LogoItem";

const logos = [
  { logo: "./public/logo-light.png", alt: "Ramp" },
  { logo: "./public/logo-light.png", alt: "Vercel" },
  { logo: "./public/logo-light.png", alt: "Scale" },
  { logo: "./public/logo-light.png", alt: "Arc" },
  { logo: "./public/logo-light.png", alt: "Cash App" },
  { logo: "./public/logo-light.png", alt: "Retool" },
];

const LogoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
      {logos.map((item, index) => (
        <LogoItem key={index} logo={item.logo} alt={item.alt} />
      ))}
    </div>
  );
};

export default LogoGrid;