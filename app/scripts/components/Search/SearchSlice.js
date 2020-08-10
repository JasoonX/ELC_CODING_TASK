import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: null,
    touched: false,
    showSearch: false,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      state.touched = true;
    },
    toggle: (state, action) => {
      if (state.showSearch) {
        state.value = null;
      }

      state.showSearch = !state.showSearch;
    },
  },
});

export const { set, toggle } = searchSlice.actions;

export const selectSearch = (state) => state.search.value;

export const selectSearchTouched = (state) => state.search.touched;

export const selectShowSearch = (state) => state.search.showSearch;

export default searchSlice.reducer;
