import React from "react";

interface ScrollCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  image: string; // 图片路径
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      className="Carousel_item flex flex-col border border-gray-800 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: "0 0 calc(100% / 4.5)", // Dynamically adjust width to 1/4.5 of the container
        maxWidth: "calc(100% / 4.5)", // Prevent exceeding 1/4.5 width
      }}
    >
      {/* 渐变遮罩层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-1220s"></div>

      {/* 内容部分 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-6 bg-black bg-opacity-50">
        <div className="flex flex-row justify-between items-center">
          {/* 左侧文字部分 */}
          <div className="flex flex-col w-40">
            {/* 标题 */}
            <h3
              className="
              text-[13px] 
              text-gray-500 
              font-semibold 
              leading-[19px] 
              tracking-[-0.12px] 
              text-left 
              antialiased 
              mb-2
            "
            >
              {title}
            </h3>
            {/* 描述 */}
            <p
              className="
                text-[15px] 
                text-grsay-400 
                font-[510] 
                leading-[23px] 
                tracking-[-0.16px] 
                antialiased
              "
            >
              {description}
            </p>
          </div>

          {/* 右侧按钮部分 */}
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 hover:border-gray-600 focus:outline-none transition duration-150 ease-in-out"
            type="button"
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
    </div>
  );
};

export default ScrollCard;