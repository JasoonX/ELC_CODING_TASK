import React from "react";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchResultsStatus,
} from "./SearchResultsSlice";

import SearchResultsView from "./SearchResultsView";
import { selectSearchTouched, selectShowSearch } from "../Search/SearchSlice";
const currentCurrency = "$";

const SearchResultsContainer = () => {
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectSearchResultsStatus);
  const touched = useSelector(selectSearchTouched);
  const showSearch = useSelector(selectShowSearch);

  return (
    <SearchResultsView
      searchResults={searchResults}
      currentCurrency={currentCurrency}
      searchStatus={status}
      touched={touched}
      showSearch={showSearch}
    />
  );
};
export default SearchResultsContainer;
