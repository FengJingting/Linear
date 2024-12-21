import React from "react";
import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";

const Footer: React.FC = () => {
  const footerData = [
    {
      title: "Features",
      items: ["Plan", "Build", "Insights", "Customer Requests", "Linear Asks", "Security", "Mobile"],
    },
    {
      title: "Product",
      items: ["Pricing", "Method", "Integrations", "Changelog", "Documentation", "Download", "Switch"],
    },
    {
      title: "Company",
      items: ["About", "Customers", "Careers", "Blog", "README", "Brand"],
    },
    {
      title: "Resources",
      items: ["API", "Status", "Startups", "Report issue", "DPA", "Privacy", "Terms"],
    },
    {
      title: "Connect",
      items: ["Contact us", "Community", "X (Twitter)", "GitHub", "YouTube"],
    },
  ];

  return (
    <footer className="bg-black border-t border-1px border-gray-900 py-12 px-6 w-full">
      <div className="mx-[187px] px-[32px] max-w-[1088px] grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
        {/* Logo */}
        <FooterLogo />

        {/* Footer Columns */}
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;