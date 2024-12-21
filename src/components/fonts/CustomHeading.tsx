import React from "react";

interface HeadingProps {
  lines: string; // 接收内容
  width?: string; // 可选宽度属性
}

const CustomHeading: React.FC<HeadingProps> = ({ lines, width }) => {
  return (
    <h1
      className="text-[56px] font-[538] leading-none tracking-[-1.82px] inline-block text-[#f7f8f8] filter blur-0"
      style={{
        fontFamily:
          'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        fontFeatureSettings: '"cv01", "ss03"',
        fontVariationSettings: '"opsz" 28',
        colorScheme: "dark",
        width: width || "75%", // 如果未传入宽度，则默认使用 100%
      }}
    >
      {lines}
    </h1>
  );
};

export default CustomHeading;