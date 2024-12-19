import React from "react";

interface ScrollCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  icon: React.ReactNode;
}

const ScrollCard: React.FC<ScrollCardProps> = ({ title, description, buttonLabel, icon }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between w-72 shadow-md">
      {/* 上部分内容区域 */}
      <div className="bg-gray-700 rounded mb-4 flex-grow h-32">
        <div className="flex items-center justify-center h-full text-white text-lg">{icon}</div>
      </div>

      {/* 下部分文字和按钮 */}
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white hover:bg-gray-600">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ScrollCard;