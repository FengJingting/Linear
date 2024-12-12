import React from "react";

interface FeatureCardProps {
  image: string; // 图片路径
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <div className="bg-black border border-gray-800 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
      {/* 图片部分 */}
      <div className="mb-6">
        <img src={image} alt={title} className="h-24 mx-auto object-contain" />
      </div>

      {/* 标题和按钮左右布局 */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* 标题 */}
        <h3 className="text-xl font-semibold text-white mb-4 md:mb-0">
          {title}
        </h3>

        {/* 按钮 */}
        <button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 text-white text-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;