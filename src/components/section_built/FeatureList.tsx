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
      <div className="border-t border-gray-600 pt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    );
  };
  
  export default FeatureList;