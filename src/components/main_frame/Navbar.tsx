import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-2 mx-48 z-50 flex justify-between items-center px-8 py-2 bg-transparent text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="logo-light.png" // 替换成你的Logo路径
          alt="Logo"
          className="h-6 mr-2"
        />
        <span className="font-bold text-lg">Linear</span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 items-center justify-center">
        {["Features", "Changelog", "Pricing", "Company", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-gray-400 transition-colors duration-200 flex-1 text-center"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Button Section */}
      <div className="flex flex-1 items-center justify-center gap-4">
        <button className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
          Log in
        </button>
        <button className="bg-white text-black font-bold text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;