import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/SearchSlice";
import searchResultsReducer from "../components/SearchResults/SearchResultsSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
