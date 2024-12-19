const HeroTitle: React.FC = () => {
  return (
    <div className="text-white text-center md:text-left">
      <h1 className="md:text-5xl font-bold mb-4 whitespace-nowrap">
        <span className="block">Linear is a purpose-built tool for</span>
        <span className="block">planning and building products</span>
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        <span className="block">Meet the system for modern software development. </span>
        <span className="block">Streamline issues,projects, and product roadmaps.</span>
        
      </p>
    </div>
  );
};

export default HeroTitle;