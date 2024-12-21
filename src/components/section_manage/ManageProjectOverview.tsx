import React from "react";



const ManageProjectOverview: React.FC = () => {
  const data = [
    { color: "rgb(145, 149, 156)", label: "Scope" },
    { color: "rgb(222, 185, 73)", label: "Started" },
    { color: "rgb(103, 113, 197)", label: "Completed" },
  ];

  return (
    
    <div className="p-6">
      {/* Placeholder for graph or data */}
      <div className="p-6 text-[#f7f8f8] border border-1px border-gray-800 rounded-xl text-base leading-6 font-normal pointer-events-none"
        style={{
          fontFeatureSettings: '"cv01", "ss03"',
          lineHeight: "24px",
          maskComposite: "intersect, intersect",
          maskImage:
            "linear-gradient(rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 80%), linear-gradient(to right, rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 90%)",
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        }}>
        <h3
          className="text-gray-300 text-[15px] font-semibold leading-[23px] tracking-[-0.16px] font-[510] antialiased"
          style={{
            fontFeatureSettings: '"cv01", "ss03"',
            fontVariationSettings: "normal",
            pointerEvents: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          Cycle 55
        </h3>
        <ul className="flex flex-row text-gray-400 text-sm mt-2">
          {data.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-400 mr-2">{item.label}</span>
          </li>
          ))}
        </ul>
        <img className="mt-5" src="./public/section_manage_0.jpg"></img>
      </div>
    </div>
  );
};

export default ManageProjectOverview;