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
      >
        <ScrollCard
          title="Customer Requests"
          description="Build what customers actually want"
          buttonLabel=">"
          icon="📩"
        />
        <ScrollCard
          title="Powerful git workflows"
          description="Automate pull requests and commit workflows"
          buttonLabel="+"
          icon="🔗"
        />
        <ScrollCard
          title="Linear Mobile"
          description="Move product work forward from anywhere"
          buttonLabel=">"
          icon="📱"
        />
        <ScrollCard
          title="Linear Asks"
          description="Turn work into action items effortlessly"
          buttonLabel=">"
          icon="⚡"
        />
      </div>

      {/* 滑动按钮 */}
      <ScrollControls onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
    </div>
  );
};

export default Scroll;