import React from "react";

const ManageProjectOverview: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
      <div className="text-gray-400 space-y-4">
        <div>
          <span className="font-bold text-white">Properties:</span> In Progress, ENG
        </div>
        <div>
          <span className="font-bold text-white">Resources:</span> Exploration, User interviews
        </div>
        <div>
          <span className="font-bold text-white">Milestones:</span>
          <ul className="ml-4 list-disc">
            <li>Design Review 100%</li>
            <li>Internal Alpha 100% of 10</li>
            <li>GA 25% of 53</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageProjectOverview;