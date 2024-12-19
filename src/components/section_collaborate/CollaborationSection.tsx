import React from "react";
import Scroll from "./Scroll"; // 引入子组件 Scroll

const CollaborationSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* 标题部分 */}
        <div className="mb-12">
          <p className="text-purple-400 text-sm font-medium mb-4">
            Workflows and integrations
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Collaborate across tools and teams
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Expand the capabilities of the Linear system with a wide variety of
            integrations that keep everyone in your organization aligned and focused.
          </p>
        </div>

        {/* 滑动窗口部分 */}
        <Scroll />
      </div>
    </section>
  );
};

export default CollaborationSection;