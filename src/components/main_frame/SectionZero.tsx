import React from "react";
import SectionItem from "../fonts/SectionItem";

interface SectionZeroProps {
  linkHref: string;
  linkText: string;
  iconColor?: string;
  headingText: string[];
  subHeading: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const SectionZero: React.FC<SectionZeroProps> = ({
  linkHref,
  linkText,
  iconColor,
  headingText,
  subHeading,
  description,
  imageSrc,
  imageAlt = "Preview",
}) => {
  return (
    <div className="mb-12">
      {/* 小标题部分 */}
      <SectionItem
        linkHref={linkHref}
        linkText={linkText}
        headingText={headingText}
        iconColor={iconColor}
      />

      {/* 副标题 */}
      <p className="mt-10 text-[#8a8f98] text-[17px] font-[510] leading-[24.5px] w-[275.078px] h-[98px] break-words">
        <span className="inline text-[#f7f8f8] font-[510] text-[17px] leading-[24.5px] font-bold">
          {subHeading}
        </span>
        {description}
      </p>

      {/* 图片展示 */}
      <div
        className="flex flex-col items-center justify-center w-[801px] h-[721.906px] relative mt-10 md:mt-0 pointer-events-none"
        style={{
          color: "rgb(247, 248, 248)",
          fontFamily:
            'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          fontFeatureSettings: '"cv01", "ss03"',
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <img
          src={imageSrc} // 动态图片路径
          alt={imageAlt}
          className="w-[1600px] h-[810px] max-w-[1600px] rounded-lg shadow-lg aspect-[3200/1620] pointer-events-none overflow-hidden"
          style={{
            maskImage:
              "radial-gradient(57% 57% at 50% 35%, rgb(217, 217, 217) 0px, rgba(115, 115, 115, 0) 100%)",
            WebkitMaskImage:
              "radial-gradient(57% 57% at 50% 35%, rgb(217, 217, 217) 0px, rgba(115, 115, 115, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default SectionZero;