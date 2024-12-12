import React from "react";

const HeroTitle: React.FC = () => {
  return (
    <div className="text-white text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Linear is a purpose-built tool for planning and building products
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        Meet the system for modern software development. Streamline issues,
        projects, and product roadmaps.
      </p>
    </div>
  );
};

export default HeroTitle;