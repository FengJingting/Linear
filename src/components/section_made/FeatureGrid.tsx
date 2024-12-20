import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    image: "section_made_0.avif", // 替换为实际路径
    title: "Purpose-built for product development",
  },
  {
    image: "section_made_1.avif", // 替换为实际路径
    title: "Designed to move fast",
  },
  {
    image: "section_made_2.avif", // 替换为实际路径
    title: "Crafted to perfection",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {features.map((feature, index) => (
        <FeatureCard key={index} image={feature.image} title={feature.title} />
      ))}
    </div>
  );
};

export default FeatureGrid;