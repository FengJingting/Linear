import React from "react";

const InsightsSection: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      {/* 容器布局 */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 左侧文字部分 */}
        <div className="space-y-6">
          {/* 主标题 */}
          <h2 className="text-3xl font-bold tracking-tight">
            Linear Insights
          </h2>
          {/* 副标题 */}
          <p className="text-lg text-gray-400">
            Take the guesswork out of product planning with realtime, actionable
            data analytics.
          </p>
          {/* 按钮 */}
          <button className="px-6 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600">
            Learn more
          </button>
        </div>

        {/* 右侧图表部分 */}
        <div className="relative">
            <img
                src="/images/insights-chart.png"
                alt="Insights chart"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;