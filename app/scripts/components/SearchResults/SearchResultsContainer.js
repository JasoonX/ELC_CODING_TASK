import React from "react";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchResultsStatus,
} from "./SearchResultsSlice";
import SearchResultsView from "./SearchResultsView";
const currentCurrency = "$";

const SearchResultsContainer = () => {
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectSearchResultsStatus);
  return (
    <SearchResultsView
      searchResults={searchResults}
      currentCurrency={currentCurrency}
      searchStatus={status}
    />
  );
};
module.exports = SearchResultsContainer;
