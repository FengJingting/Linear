import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {/* 图标 */}
      <div className="text-white text-2xl">{icon}</div>

      {/* 标题 */}
      <h3 className="text-white font-semibold text-lg">{title}</h3>

      {/* 描述 */}
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const SectionInit: React.FC = () => {
  return (
    <div className="bg-black py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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