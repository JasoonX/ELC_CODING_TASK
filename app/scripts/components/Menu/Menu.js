import axios from "axios";
import React, { useState, useContext } from "react";
import Store from "../../../store/store";
import Search from "../Search/Search";
const links = [
  "HOLIDAY",
  "WHAT'S NEW",
  "PRODUCTS",
  "BESTSELLERS",
  "GOODBYES",
  "STORES",
  "INSPIRATION",
];

const Menu = () => {
  const { dispatch } = useContext(Store);

  const onSearch = (inputValue) => {
    axios
      .get(`http://localhost:3035/search/${inputValue}`)
      .then(({ data: searchResults }) => {
        if (searchResults && searchResults.data) {
          dispatch("SEARCH_RESULTS:SET", searchResults.data);
        }
      })
      .catch((error) => {
        dispatch("ERROR:SET", searchResults.data);
      });
  };

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

module.exports = Menu;
