import React from "react";
import ManageSectionHeader from "./ManageSectionHeader";
import ManageProjectOverview from "./ManageProjectOverview";
import ManageProjectUpdates from "./ManageProjectUpdates";

interface ManageSectionProps {
  leftTitle: string;
  leftDescription: string;
  rightTitle: string;
  rightDescription: string;
}

const ManageSection: React.FC<ManageSectionProps> = ({
  leftTitle,
  leftDescription,
  rightTitle,
  rightDescription,
}) => {
  return (
    <div className="grid bg-black grid-cols-1 md:grid-cols-2">
      {/* 左侧列：标题 + 概览 */}
      <div className="border-t-[1px] border-r-[1px] border-gray-800 p-10"
      >
        <ManageSectionHeader title={leftTitle} description={leftDescription} />
        
      </div>

      {/* 右侧列：项目更新 */}
      <div className="border-t-[1px] border-gray-800 p-10">
        <ManageSectionHeader title={rightTitle} description={rightDescription} />
        
      </div>
    </div>
  );
};

export default ManageSection;