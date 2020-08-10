import React, { useState, useCallback, useEffect } from "react";
import SearchView from "./SearchView";
import { useDispatch, useSelector } from "react-redux";
import { set, toggle, selectSearch, selectShowSearch } from "./SearchSlice.js";
import { useDebounce } from "../../hooks";

const SearchContainer = ({ onSearch, onClose }) => {
  const searchedValue = useSelector(selectSearch);
  const showSearch = useSelector(selectShowSearch);

  const dispatch = useDispatch();

  const toggleSearch = (e) => {
    dispatch(toggle());

    if (onClose) {
      onClose(e);
    }
  };

  const onInput = (e) => {
    dispatch(set(e.target.value));
  };

  const debouncedSearchValue = useDebounce(searchedValue, 500);

  useEffect(() => {
    if (debouncedSearchValue !== null) {
      onSearch(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  return (
    <SearchView
      searchedValue={searchedValue}
      showingSearch={showSearch}
      toggleSearch={toggleSearch}
      onInput={onInput}
    />
  );
};

export default SearchContainer;
