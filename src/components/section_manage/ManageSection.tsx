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
    <div className="grid bg-pink-100 grid-cols-1 md:grid-cols-2 gap-8">
      {/* 左侧列：标题 + 概览 */}
      <div className="space-y-8">
        <ManageSectionHeader title={leftTitle} description={leftDescription} />
        <ManageProjectOverview />
      </div>

      {/* 右侧列：项目更新 */}
      <div className="space-y-8">
        <ManageSectionHeader title={rightTitle} description={rightDescription} />
        <ManageProjectUpdates />
      </div>
    </div>
  );
};

export default ManageSection;