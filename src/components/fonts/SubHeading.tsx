import React from "react";

interface SubHeadingProps {
  lines: string; // 接收文本内容的数组，每个元素代表一行
  color?: string;  // 字体颜色，可选，默认为灰色
}

const SubHeading: React.FC<SubHeadingProps> = ({ lines }) => {
  return (
    <div>
        <h3
          className="
          mt-10 w-80 
          block 
          text-[13px] font-[510] 
          leading-[19px] tracking-[-0.12px] 
          text-gray-500 
          cursor-pointer 
          select-none 
          antialiased
        " style={{
          color: "rgb(138, 143, 152)", // 确保颜色匹配
          lineHeight: "23px", // 行高
          letterSpacing: "-0.16px", // 字母间距
        }}>
          {lines}
        </h3>
    </div>
  );
};

export default SubHeading;