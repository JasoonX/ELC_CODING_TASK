import React from "react";
import Search from "../Search";

const MenuView = ({ links, onSearch }) => {
  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            {links.map((link) => (
              <a href="#" className="nav-item" key={link}>
                {link}
              </a>
            ))}

            <Search onSearch={onSearch} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MenuView;
