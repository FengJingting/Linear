import React from "react";
import CustomHeading from "./CustomHeading"

interface SectionItemProps {
  linkHref: string; // 超链接地址
  linkText: string; // 链接文本内容
  headingText: string[]; // 主标题内容（数组形式，适配 CustomHeading）
  iconColor?: string; // 图标颜色，可选，默认为绿色
}

const SectionItem: React.FC<SectionItemProps> = ({
  linkHref,
  linkText,
  headingText,
  iconColor = "#68cc58", // 默认绿色
}) => {
  return (
    <div>
      {/* 小标题部分 */}
      <a
        href={linkHref}
        className="flex items-center gap-x-2 mb-2 text-[#d0d6e0] text-[14px] font-[510] leading-[21px] tracking-[-0.18px] cursor-pointer"
        style={{
          fontFamily:
            'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        }}
      >
        {/* 图标 */}
        <div
          className="w-[14px] h-[8px] rounded-full cursor-pointer box-border"
          style={{
            backgroundColor: iconColor, // 动态设置背景颜色
          }}
        ></div>

        {/* 文本内容 */}
        <span className="flex items-center">{linkText}</span>

        {/* 右箭头 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#d0d6e0]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* 主标题 */}
      <CustomHeading lines={headingText} />
    </div>
  );
};

export default SectionItem;