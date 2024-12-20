import React from "react";

const ManageSectionHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <h2
        className="block text-[#f7f8f8] text-[21px] font-[510] leading-[28px] tracking-[-0.37px] mb-2"
      >
        {title}
      </h2>
      <p
        className="block text-[#8a8f98] text-[17px] font-normal leading-[24.5px] w-[304.5px] h-[73.5px]"
        style={{
          fontFamily:
            'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          fontFeatureSettings: '"cv01", "ss03"',
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ManageSectionHeader;