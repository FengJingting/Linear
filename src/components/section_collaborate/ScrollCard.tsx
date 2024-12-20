import React from "react";
import SubHeading from "../fonts/SubHeading";

interface ScrollCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  image?: string; // 图片路径
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  title,
  description,
  buttonLabel,
  image,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-start bg-gray-900 rounded-lg shadow-lg cursor-pointer text-gray-300"
      style={{
        height: "469px",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
    >
      {/* 图片部分 */}
      <div className="relative bg-gray-800 rounded-lg overflow-hidden h-[469px] w-[336px]">
        <img
          src={image}
          alt={title}
          className="block flex-shrink-0 cursor-pointer box-border"
        />
      </div>


      <div
        className="flex flex-row justify-between items-end w-[272px] h-[69px] gap-[24px] cursor-pointer text-gray-300"
      >
        {/* 中间的内容 */}
        <div className="flex flex-col justify-end items-start gap-1.5 w-full max-w-[360px]">
          {/* 标题 */}
          <SubHeading lines={[title]} />
          
          {/* 描述 */}
          <p className="text-[#f7f8f8] inline-block text-[16px] font-normal leading-[24px] tracking-[-0.16px]">
            {description}
          </p>
        </div>

        {/* 按钮 */}
        <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ScrollCard;