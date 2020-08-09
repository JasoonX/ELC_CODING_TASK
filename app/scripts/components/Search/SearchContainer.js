import React, { useState } from "react";
import debounce from "../../utils/debounce";
import SearchView from "./SearchView.js";
import { useDispatch, useSelector } from "react-redux";
import { set, selectSearch } from "./SearchSlice.js";

const SearchContainer = ({ onSearch, onClose }) => {
  const searchedValue = useSelector(selectSearch);
  const dispatch = useDispatch();

  const [showingSearch, setShowingSearch] = useState(false);

  const toggleSearch = (e) => {
    setShowingSearch(!showingSearch);
    if (onClose) {
      onClose(e);
    }
  };

  const onInput = (e) => {
    const value = e.target.value;

    dispatch(set(value));

    debounce(onSearch, 300)(value);
  };

  return (
    <SearchView
      onInput={onInput}
      toggleSearch={toggleSearch}
      searchedValue={searchedValue}
      showingSearch={showingSearch}
    />
  );
};

module.exports = SearchContainer;
