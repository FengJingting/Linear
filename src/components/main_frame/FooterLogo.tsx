import React from "react";

const FooterLogo: React.FC = () => {
  return (
    <div className="mb-6 md:mb-0">
      <img
        src="/path/to/logo.svg" // 替换为实际的 logo 路径
        alt="Logo"
        className="h-8 w-8"
      />
    </div>
  );
};

export default FooterLogo;