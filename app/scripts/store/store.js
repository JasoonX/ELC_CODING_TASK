import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/SearchSlice";
import searchResultsReducer from "../components/SearchResults/SearchResultsSlice";

let store = configureStore({
  reducer: {
    search: searchReducer,
    searchResults: searchResultsReducer,
  },
});

module.exports = store;
