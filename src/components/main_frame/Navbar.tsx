import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 2rem",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="logo.svg" // 替换成你的Logo路径
          alt="Logo"
          style={{ height: "24px", marginRight: "0.5rem" }}
        />
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Linear</span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {["Features", "Changelog", "Pricing", "Company", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#9f9f9f";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#ffffff";
              }}
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Button Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          style={{
            backgroundColor: "#2c2c2c",
            color: "#ffffff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#3a3a3a";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#2c2c2c";
          }}
        >
          Log in
        </button>
        <button
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#ffffff";
          }}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;