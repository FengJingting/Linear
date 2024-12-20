import React from "react";

interface SubHeadingProps {
  lines: string[]; // 接收文本内容的数组，每个元素代表一行
  color?: string;  // 字体颜色，可选，默认为灰色
}

const SubHeading: React.FC<SubHeadingProps> = ({ lines, color = "#8a8f98" }) => {
  return (
    <div>
      {lines.map((line, index) => (
        <h3
          key={index} // 使用索引作为每一行的唯一标识
          className="block text-[13px] font-[510] leading-[19px] tracking-[-0.12px] cursor-pointer select-none"
          style={{
            color: color,
            fontFamily:
              'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            textAlign: 'left',
            boxSizing: 'border-box',
            WebkitFontSmoothing: 'antialiased',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          {line}
        </h3>
      ))}
    </div>
  );
};

export default SubHeading;