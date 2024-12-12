import React from "react";
import LogoItem from "./LogoItem";

const logos = [
  { logo: "ramp-logo.svg", alt: "Ramp" },
  { logo: "vercel-logo.svg", alt: "Vercel" },
  { logo: "scale-logo.svg", alt: "Scale" },
  { logo: "arc-logo.svg", alt: "Arc" },
  { logo: "cashapp-logo.svg", alt: "Cash App" },
  { logo: "retool-logo.svg", alt: "Retool" },
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