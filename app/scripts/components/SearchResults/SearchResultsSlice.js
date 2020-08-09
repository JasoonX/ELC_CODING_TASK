import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsService from "../../services/ProductsService";

export const getSearchResults = createAsyncThunk(
  "searchResults/getSearchResults",
  async (value) => {
    const response = await ProductsService.search(value);
    return response.data;
  }
);

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    value: [],
    status: "idle",
    error: null,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [getSearchResults.pending]: (state) => {
      state.status = "loading";
    },
    [getSearchResults.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.value = action.payload;
    },
    [getSearchResults.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { set } = searchResultsSlice.actions;

export const selectSearchResults = (state) => {
  return state.searchResults.value;
};
export const selectSearchResultsStatus = (state) => {
  return state.searchResults.status;
};
export default searchResultsSlice.reducer;
