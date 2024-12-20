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
          <FeatureItem key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    );
  };
  const FeatureItem: React.FC<Feature> = ({ title, description }) => {
    return (
      <div className="flex flex-row items-start justify-between border-t border-gray-600 pt-4">
      {/* 左侧标题，禁止换行 */}
      <h3
      className="block text-[#f7f8f8] text-[14px] font-[510] leading-[21px] tracking-[-0.18px] box-border"
      style={{
        fontFamily:
          'Linear, "SF Pro Display", -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        height: '168px',
        width: '187.547px',
        WebkitFontSmoothing: 'antialiased',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        textRendering: 'optimizeLegibility',
        textSizeAdjust: '100%',
        unicodeBidi: 'isolate',
      }}
    >
      {title}
    </h3>
      {/* 右侧描述 */}
      <p
          className="text-[#8a8f98] text-[14px] font-normal leading-[21px] tracking-[-0.18px] box-border block"
          style={{
            height: '168px',
            width: '83.7031px',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {description}
        </p>
    </div>
    );
  };
  
  
  export default FeatureList;