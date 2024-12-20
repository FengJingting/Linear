import React from "react";

const SectionIdeate: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-12 bg-black">
      {/* 左侧内容 */}
      <div className="flex flex-col space-y-4">
        {/* 主标题 */}
        <h2
          className="inline-block text-white text-[24px] font-[510] leading-[28px] tracking-[-0.47px] h-[56px] w-[224.328px] mb-0"
          style={{
            fontFamily:
              'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontFeatureSettings: '"cv01", "ss03"',
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Ideate and specify what to build next
        </h2>

        {/* 列表 */}
        <div
  role="group"
  dir="ltr"
  className="space-y-2"
  style={{ outline: "none" }}
  tabIndex={0}
>
  {/* Collaborative documents */}
  <button
    type="button"
    role="radio"
    aria-checked="true"
    className="flex items-center gap-2 text-white font-medium"
    tabIndex={0}
    data-state="on"
  >
    <div className="w-1 h-6 bg-green-400"></div>
    Collaborative documents
  </button>

  {/* Inline comments */}
  <button
    type="button"
    role="radio"
    aria-checked="false"
    className="flex items-center gap-2 text-gray-400"
    tabIndex={-1}
    data-state="off"
  >
    <div className="w-1 h-6" style={{ backgroundColor: "rgb(35, 35, 38)" }}></div>
    Inline comments
  </button>

  {/* Text-to-issue commands */}
  <button
    type="button"
    role="radio"
    aria-checked="false"
    className="flex items-center gap-2 text-gray-400"
    tabIndex={-1}
    data-state="off"
  >
    <div className="w-1 h-6" style={{ backgroundColor: "rgb(35, 35, 38)" }}></div>
    Text-to-issue commands
  </button>
</div>
      </div>

      {/* 右侧内容 */}
      <div className="flex flex-col bg-gray-900 rounded-lg p-6 w-full max-w-lg">
       <img src="./public/section_ideate_0.jpg"></img>
      </div>
    </div>
  );
};

export default SectionIdeate;