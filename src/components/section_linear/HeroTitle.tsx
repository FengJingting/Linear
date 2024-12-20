import CustomHeading from "../fonts/CustomHeading";
const HeroTitle: React.FC = () => {
  return (
    <div className="text-white text-center md:text-left">
      <CustomHeading
        lines={[
          "Linear is a purpose-built tool for",
          "planning and building products",
        ]}
      />
      <p className="text-lg text-gray-400 my-6">
        <span className="block">Meet the system for modern software development. </span>
        <span className="block">Streamline issues,projects, and product roadmaps.</span>
        
      </p>
    </div>
  );
};

export default HeroTitle;