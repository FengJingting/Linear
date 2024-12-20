import React, { useRef } from "react";
import ScrollCard from "./ScrollCard";
import ScrollControls from "./ScrollControls";

const Scroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black py-8">
      {/* 滑动内容 */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-6 px-6 scrollbar-hide"
        style={{
          width: "100%",
          whiteSpace: "nowrap",
          msOverflowStyle: "none", // IE 和 Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <div className="flex gap-6 w-max"> {/* 设置宽度最大值 */}
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
            title="Linear Asks"
            description="Turn work into action items effortlessly"
            buttonLabel=">"
            image="./public/scroll_0.avif"
          />
        </div>
      </div>

      {/* 滑动按钮 */}
      <ScrollControls onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
    </div>
  );
};

export default Scroll;