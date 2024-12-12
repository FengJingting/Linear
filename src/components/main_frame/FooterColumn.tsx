import React from "react";

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-white font-bold mb-4">{title}</h3>
      <ul className="text-gray-400 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="hover:text-white transition">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;