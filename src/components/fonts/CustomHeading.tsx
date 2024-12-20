import React from "react";

interface HeadingProps {
  lines: string[]; // 接收多个字符串作为内容行
}

const CustomHeading: React.FC<HeadingProps> = ({ lines }) => {
  return (
    <h1
      className="text-[56px] font-[538] leading-none tracking-[-1.82px] inline-block text-[#f7f8f8] filter blur-0"
      style={{
        fontFamily:
          'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        fontFeatureSettings: '"cv01", "ss03"',
        fontVariationSettings: '"opsz" 28',
        colorScheme: "dark",
      }}
    >
      {lines.map((line, index) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
};

export default CustomHeading;