interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          description={feature.description}
          hasBorder={index === 0} // 仅第一个元素有边框
        />
      ))}
    </div>
  );
};

interface FeatureItemProps extends Feature {
  hasBorder: boolean; // 是否显示边框
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, hasBorder }) => {
  return (
    <div
      className={`flex flex-row items-start justify-between pt-4 ${
        hasBorder ? "border-t border-gray-800" : ""
      }`}
    >
      <div>
         {/* 左侧标题，禁止换行 */}
        <h3
          className="block text-[#f7f8f8] text-[14px] font-[510] leading-[21px] tracking-[-0.18px] box-border"
        >
          {title}
        </h3>
        
      </div>
     
      {/* 右侧描述 */}
      <p
        className="w-44 text-[#8a8f98] text-[14px] font-normal leading-[21px] tracking-[-0.18px] box-border block"
        style={{
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureList;