import React from "react";

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* First Button */}
      <button
        className="
          bg-[#e6e6e6] 
          text-[#08090a] 
          px-6 
          py-3
          rounded-lg 
          font-bold 
          hover:bg-gray-200 
          transition-all 
          duration-300 
          ease-in-out 
          text-center 
          filter blur-0 
          opacity-100 
          transform 
          hover:scale-105 
          hover:shadow-md
        "
        style={{
          fontFeatureSettings: '"cv01", "ss03"',
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          boxShadow:
            "rgba(0, 0, 0, 0.11) 0px -1px 1px 0px inset, rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px",
          height: "48px", // Set consistent height
        }}
      >
        Start building
      </button>

      {/* Second Button */}
      <button
        className="
          relative 
          text-[15px] 
          font-[510] 
          text-[#f7f8f8] 
          px-6 
          py-3 
          bg-gradient-to-r from-[#f7f8f8] to-transparent 
          border-none 
          rounded 
          overflow-hidden 
          cursor-pointer 
          hover:border-white 
          transition-all 
          duration-300
          flex 
          items-center
          gap-2
        "
        style={{
          lineHeight: "40px",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          whiteSpace: "nowrap",
          textRendering: "optimizeLegibility",
          height: "48px", // Set consistent height
        }}
      >
        <span>Introducing Customer Requests</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;