import React from "react";

interface ScrollControllerProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const ScrollController: React.FC<ScrollControllerProps> = ({
  onScrollLeft,
  onScrollRight,
}) => {
  return (
    <div className="flex justify-center items-center mt-4 gap-4">
      {/* 左滑按钮 */}
      <button
        type="button"
        aria-label="Previous slide"
        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:outline-none"
        onClick={onScrollLeft}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.78 4.78a.75.75 0 0 0-1.06-1.06l-4 4a.75.75 0 0 0-.007 1.054l3.903 4a.75.75 0 0 0 1.073-1.048l-3.385-3.47L9.78 4.78Z" />
        </svg>
      </button>

      {/* 右滑按钮 */}
      <button
        type="button"
        aria-label="Next slide"
        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:outline-none"
        onClick={onScrollRight}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385-3.47L6.47 11.47Z" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollController;