import React from "react";

const InsightsSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Container layout */}
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        {/* Top: Text + Button */}
        <div className="space-y-6 text-center md:text-left">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight">
            Linear Insights
          </h2>

          {/* Subheading */}
          <p className="w-96 text-lg text-gray-400">
            Take the guesswork out of product planning with realtime, actionable
            data analytics.
          </p>

          {/* Button */}
          <button
            className="inline-flex items-center px-3 py-2 bg-[#28282c] text-[13px] text-[#bfc2c7] rounded-lg hover:bg-[#35353a] shadow-[rgba(0,0,0,0.11)_0px_-1px_1px_0px_inset,_rgba(0,0,0,0)_0px_8px_2px_0px,_rgba(0,0,0,0.01)_0px_5px_2px_0px,_rgba(0,0,0,0.04)_0px_3px_2px_0px,_rgba(0,0,0,0.07)_0px_1px_1px_0px,_rgba(0,0,0,0.08)_0px_0px_1px_0px] focus:outline-none"
            style={{
              fontFeatureSettings: '"cv01", "ss03"',
              colorScheme: "dark",
            }}
          >
            Learn more
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

        {/* Bottom: Chart */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
            maskComposite: "exclude",
            WebkitMaskComposite: "exclude",
          }}
        >
          <img
            src="/public/section_insight_0.svg"
            alt="Insights chart"
            className="
              w-[1536px] 
              h-[820.953px] 
              max-w-none 
              aspect-[1740/930] 
              object-contain 
              pointer-events-none 
              -mb-[256px] 
              -ml-[153.594px]
              -mt-[120px]
            "
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;