import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-2 h-[95px] text-[#f7f8f8] text-[16px] font-normal leading-[24px]">
      {/* 图标和标题 */}
      <div className="flex items-center gap-2">
        {/* 图标 */}
        <div className="text-white text-2xl">{icon}</div>

        {/* 标题 */}
        <h3
          className="block text-[#d0d6e0] text-[14px] whitespace-nowrap font-[510] leading-[24px] tracking-[-0.18px] h-[24px] w-[123.766px]"
        >
          {title}
        </h3>
      </div>

      {/* 描述 */}
      <p
        className="text-[#8a8f98] text-[14px] font-normal leading-[21px] tracking-[-0.18px]"
      >
        {description}
      </p>
    </div>
  );
};

const SectionInit: React.FC = () => {
  return (
    <div className="bg-black py-12 px-6">
      {/* 新的 div */}
    <div
    className="my-10 w-full h-[1px] bg-gray-600 opacity-30"
  ></div>

      <div className="flex flex-row gap-6 max-w-screen-lg mx-auto">
        <FeatureCard
          icon={<span>🌟</span>} // 替换为实际图标
          title="Initiatives"
          description="Coordinate strategic product efforts."
        />
        <FeatureCard
          icon={<span>🔗</span>} // 替换为实际图标
          title="Cross-team projects"
          description="Collaborate across teams and departments."
        />
        <FeatureCard
          icon={<span>♦️</span>} // 替换为实际图标
          title="Milestones"
          description="Break projects down into concrete phases."
        />
        <FeatureCard
          icon={<span>📊</span>} // 替换为实际图标
          title="Progress insights"
          description="Track scope, velocity, and progress over time."
        />
      </div>
    </div>
  );
};

export default SectionInit;