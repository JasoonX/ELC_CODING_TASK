import React from "react";

const SearchView = ({
  showingSearch,
  searchedValue,
  onInput,
  toggleSearch,
}) => {
  return (
    <>
      <button href="#" onClick={(e) => toggleSearch(e)}>
        <i className="material-icons search">search</i>
      </button>
      <div className={(showingSearch ? "showing " : "") + "search-container"}>
        <input type="text" value={searchedValue} onChange={onInput} />
        <button href="#" onClick={(e) => toggleSearch(e)}>
          <i className="search-close material-icons close">close</i>
        </button>
      </div>
    </>
  );
};

module.exports = SearchView;
