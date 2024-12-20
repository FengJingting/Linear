import SectionItem from "../fonts/SectionItem";
import SubHeading from "../fonts/SubHeading";

interface SectionTitleProps {
  smallTitle: string;
  mainTitle: string[]; // 将 mainTitle 改为字符串数组
  description: string[];
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  smallTitle,
  mainTitle,
  description,
}) => {
  return (
    <div className="mb-8">
      <SectionItem
        linkHref="#"
        linkText={smallTitle}
        headingText={mainTitle}
        iconColor="rgba(0, 0, 0, 0)" // 红色图标
      />

      {/* 描述 */}
      <SubHeading
        lines={description}
      />
    </div>
  );
};

export default SectionTitle;