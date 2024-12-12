import React from "react";

const ManageSectionHeader: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ManageSectionHeader;