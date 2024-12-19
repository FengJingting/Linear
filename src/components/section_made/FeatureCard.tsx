import React from "react";

interface FeatureCardProps {
  image: string; // 图片路径
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 min-h-[300px] flex flex-col">
      {/* 图片部分 */}
      <div className="mb-6 pt-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* 标题和按钮 */}
      <div className="flex justify-between items-end mt-auto">
        <h3 className="text-xl font-semibold text-white leading-none max-w-[200px]">
          {title}
        </h3>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 text-white text-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;