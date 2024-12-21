import CustomHeading from "../fonts/CustomHeading";
const FeatureHeaderText: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-end md:justify-between mb-12">
      {/* 左侧 h2 主标题 */}
      <CustomHeading
        lines={
          "Made for modern product teams"}
      />

      {/* 右侧 p 副标题 */}
      <p className="text-gray-400 md:max-w-lg self-end">
        Linear is shaped by the practices and principles that distinguish
        world-class product teams from the rest: relentless focus, fast
        execution, and a commitment to the quality of craft.{" "}
        <a href="#make-the-switch" className="text-white underline hover:text-gray-300">
          Make the switch →
        </a>
      </p>
    </div>
  );
};

export default FeatureHeaderText;