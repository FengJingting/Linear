import React from "react";
import CustomHeading from "../fonts/CustomHeading";

const SectionPlan: React.FC = () => {
  return (
    <section className="py-20 mt-20"
    style={{
      background: 'linear-gradient(to top, rgb(20, 21, 22) 55.66%, transparent)',
    }}>

      <div className="mx-[187px] px-[32px] max-w-[1088px] flex md:flex-row items-end justify-between">
        {/* 左侧内容 */}
        <CustomHeading
        lines={ "Plan the present. Build the future."}
        width={"40%"}
        />

        {/* 右侧按钮 */}
        <div className="flex items-center gap-2 h-10 text-gray-100">
          <button
            className="flex items-center justify-center bg-gray-100 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition"
          >
            Get started
          </button>
          <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            Talk to sales
          </button>
      </div>
      </div>
    </section>
  );
};

export default SectionPlan;