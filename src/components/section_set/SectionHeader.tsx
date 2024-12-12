import React from "react";

const SectionHeader: React.FC = () => {
  return (
    <div className="mb-12">
      {/* 小标题 */}
      <p className="text-green-400 text-sm font-medium mb-2">
        Project and long-term planning
      </p>

      {/* 主标题 */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Set the product direction
      </h2>

      {/* 副标题 */}
      <p className="text-gray-400 max-w-2xl">
        Align your team around a unified product timeline. Plan, manage, and
        track all product initiatives with Linear’s visual planning tools.
      </p>
    </div>
  );
};

export default SectionHeader;