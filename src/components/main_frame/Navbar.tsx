import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="border border-1px border-gray-800 flex fixed top-2 z-50 w-full max-w-screen-lg items-center px-8 py-2 bg-black/75 rounded-full text-white shadow-lg">
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
      <li className="list-none Header_loginItem__lJvVx Header_buttonItem__crtcc Header_item__a2E_K" data-hide="logged-in">
        <a
        draggable="false"
        type="button"
        className="
          flex items-center justify-center 
          bg-gray-800 text-white 
          text-sm font-medium
          h-8 px-4 
          rounded-lg 
          shadow-[rgba(0,0,0,0.11)_0px_-1px_1px_0px_inset,_rgba(0,0,0,0)_0px_8px_2px_0px,_rgba(0,0,0,0.01)_0px_5px_2px_0px,_rgba(0,0,0,0.04)_0px_3px_2px_0px,_rgba(0,0,0,0.07)_0px_1px_1px_0px,_rgba(0,0,0,0.08)_0px_0px_1px_0px] 
          transition-colors duration-200 
          hover:bg-gray-700 
          whitespace-nowrap
        "
        rel="noopener"
        href="/login"
      >
          Log in<kbd className="ml-2 bg-gray-700 text-gray-300 px-1 rounded">L</kbd>
        </a>
      </li>
      <li
        className="
          h-8
          bg-gray-200 
          text-black 
          font-medium 
          text-sm 
          ml-4
          px-4 
          py-2 
          rounded-md 
          shadow-[rgba(0,0,0,0.11)_0px_-1px_1px_0px_inset,_rgba(0,0,0,0)_0px_8px_2px_0px,_rgba(0,0,0,0.01)_0px_5px_2px_0px,_rgba(0,0,0,0.04)_0px_3px_2px_0px,_rgba(0,0,0,0.07)_0px_1px_1px_0px,_rgba(0,0,0,0.08)_0px_0px_1px_0px] 
          flex 
          items-center 
          justify-center 
          cursor-pointer 
          hover:bg-gray-300 
          transition-all 
          duration-200"
      >
        <a
          href="/signup"
          className="
            w-full 
            text-center 
            text-black 
            font-medium 
            tracking-tight
          "
          draggable="false"
          rel="noopener noreferrer"
        >
          Sign up
        </a>
      </li>
    </nav>
  );
};

export default Navbar;