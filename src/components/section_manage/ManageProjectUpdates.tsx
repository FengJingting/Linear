import React from "react";

const ManageProjectUpdates: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
        <p className="text-green-400 font-bold mb-2">On track</p>
        <p className="text-white">We are ready to launch next Thursday</p>
        <p className="text-gray-400 text-sm mt-2">Sep 8</p>
      </div>
    </div>
  );
};

export default ManageProjectUpdates;