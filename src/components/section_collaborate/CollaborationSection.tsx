import React from "react";

import SectionItem from "../fonts/SectionItem";

const CollaborationSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="fkex flex-row max-w-6xl mx-auto">
        {/* 标题部分 */}
        <div className="flex flex-row justify-between items-end gap-12 mb-12">
        {/* 左侧部分 */}
        <div className="flex-1">
          <SectionItem
            linkHref="#"
            linkText="Workflows and integrations"
            headingText={["Collaborate across", " tools and teams"]}
            iconColor="rgb(181, 154, 255)"
          />
        </div>

        {/* 右侧部分 */}
        <div className="flex-1">
        <p className="text-gray-400 max-w-full ml-24">
          Expand the capabilities of the Linear system with a wide variety of ntegrations that keep everyone in your organization aligned and focused.
        </p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default CollaborationSection;