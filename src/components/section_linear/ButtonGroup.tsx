import React from "react";

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <button className="bg-white text-black py-3 px-6 rounded font-bold hover:bg-gray-100 transition">
        Start building
      </button>
      <button className="text-white py-3 px-6 border border-gray-500 rounded font-bold hover:border-white transition">
        Make the switch →
      </button>
    </div>
  );
};

export default ButtonGroup;