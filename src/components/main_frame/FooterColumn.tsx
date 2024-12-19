import React from "react";

const FooterColumn: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  return (
    <div className="min-w-0">
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-400 truncate mb-2 hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;