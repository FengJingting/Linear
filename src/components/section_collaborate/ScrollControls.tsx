import React from "react";

interface ScrollControlsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const ScrollControls: React.FC<ScrollControlsProps> = ({ onScrollLeft, onScrollRight }) => {
  return (
    <div className="absolute inset-x-0 bottom-2 flex justify-center space-x-4">
      <button
        onClick={onScrollLeft}
        className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white hover:bg-gray-600"
      >
        {"<"}
      </button>
      <button
        onClick={onScrollRight}
        className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white hover:bg-gray-600"
      >
        {">"}
      </button>
    </div>
  );
};

export default ScrollControls;