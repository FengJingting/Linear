interface SectionTitleProps {
    smallTitle: string;
    mainTitle: string;
    description: string;
  }
  
  const SectionTitle: React.FC<SectionTitleProps> = ({
    smallTitle,
    mainTitle,
    description,
  }) => {
    return (
      <div className="mb-8">
        <p className="text-gray-400 text-sm font-medium mb-4">{smallTitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{mainTitle}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  };
  
  export default SectionTitle;