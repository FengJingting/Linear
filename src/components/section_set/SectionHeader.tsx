import React from "react";

const SectionHeader: React.FC = () => {
  return (
    <div className="mb-12">
     {/* 小标题部分 */}
      <div className="flex items-center gap-x-2 mb-2">
        {/* 绿色椭圆 */}
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
        <p className="text-green-400 text-sm font-medium">
          Project and long-term planning
        </p>
      </div>


      {/* 主标题 */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Set the product direction
      </h2>

      {/* 副标题 */}
      <p className="text-gray-400 w-96 break-words">
        <span className="font-bold">
          Align your team around a unified product timeline.
        </span>
        <span>
          Plan, manage, and track all product initiatives with Linear’s visual
          planning tools.
        </span>
      </p>
      <div className="mt-10 md:mt-0">
        <img
          src="./public/section_set_0.png" // 替换为实际图片路径
          alt="Preview"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SectionHeader;