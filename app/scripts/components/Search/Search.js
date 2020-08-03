import React, { useState } from "react";
import debounce from "../../../utils/debounce";

const Search = ({ onSearch, onClose }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [showingSearch, setShowingSearch] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setShowingSearch(!showingSearch);
    if (onClose) {
      onClose(e);
    }
  };
  const debouncedSearch = (...args) => debounce(onSearch, 300)(...args);

  return (
    <>
      <a href="#" onClick={(e) => toggleSearch(e)}>
        <i className="material-icons search">search</i>
      </a>
      <div className={(showingSearch ? "showing " : "") + "search-container"}>
        <input
          type="text"
          value={searchedValue}
          onChange={(e) => {
            setSearchedValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
        <a href="#" onClick={(e) => toggleSearch(e)}>
          <i className="search-close material-icons close">close</i>
        </a>
      </div>
    </>
  );
};

module.exports = Search;
