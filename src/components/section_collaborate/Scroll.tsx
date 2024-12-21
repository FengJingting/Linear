import React, { useRef } from "react";
import ScrollCard from "./ScrollCard";

const Scroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -336, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 336, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative bg-black py-8 -mr-[187px] -ml-[336px]">
        {/* Carousel Wrapper */}
      <div className="overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex h-[469px] overflow-x-scroll gap-2 px-6 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* 左侧空白占位 */}
          <div style={{ minWidth: "336px", flexShrink: 0 }}></div>

          {/* Carousel Items */}
          <ScrollCard
            title="Customer Requests"
            description="Build what customers actually want"
            buttonLabel=">"
            image="./public/scroll_0.avif"
          />
          <ScrollCard
            title="Powerful git workflows"
            description="Automate pull requests and commit workflows"
            buttonLabel="+"
            image="./public/scroll_1.avif"
          />
          <ScrollCard
            title="Linear Mobile"
            description="Move product work forward from anywhere"
            buttonLabel=">"
            image="./public/scroll_2.avif"
          />
          <ScrollCard
            title="Linear Asks"
            description="Turn work into action items effortlessly"
            buttonLabel=">"
            image="./public/scroll_0.avif"
          />
          <ScrollCard
            title="Linear Integrations"
            description="Enhance your Linear experience"
            buttonLabel=">"
            image="./public/scroll_3.avif"
          />
        </div>
      </div>
      </div>
      

      {/* Scroll Controls */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:outline-none"
          onClick={scrollLeft}
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
        <button
          type="button"
          aria-label="Next slide"
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:outline-none"
          onClick={scrollRight}
        >
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
    </div>
  );
};

export default Scroll;