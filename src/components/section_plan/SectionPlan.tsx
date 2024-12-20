import React from "react";
import CustomHeading from "../fonts/CustomHeading";

const SectionPlan: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* 左侧内容 */}
        <CustomHeading
        lines={[
          "Plan the present.",
          "Build the future.",
        ]}
        />

        {/* 右侧按钮 */}
        <div className="flex space-x-4">
          <button className="bg-gray-100 text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition">
            Get started
          </button>
          <button className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionPlan;