import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex fixed top-2 left-0 right-0 mx-auto z-50 w-full max-w-screen-lg items-center px-8 py-2 bg-black/75 rounded-full text-white shadow-lg">
      {/* Logo Section */}
      <a href="#" className="flex items-center justify-center flex-1 text-lg font-bold">
        <img
          src="logo-light.png" // 替换成你的Logo路径
          alt="Logo"
          className="h-6 mr-2"
        />
        Linear
      </a>

      {/* Navigation Links */}
      {["Features", "Method", "Customers", "Changelog", "Pricing", "Company", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="flex items-center justify-center flex-1 text-sm hover:text-gray-400 transition-colors duration-200"
        >
          {item}
        </a>
      ))}

      {/* Button Section */}
      <button className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap mx-2 max-w-xs">
        Log in
      </button>
      <button className="bg-white text-black font-bold text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap mx-2 max-w-xs">
        Sign up
      </button>
    </nav>
  );
};

export default Navbar;