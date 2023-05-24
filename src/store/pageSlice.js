import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
  name: "page",
  initialState: {
    pageNumber: 1,
    query: "mountain",
  },
  reducers: {
    setPage(state, action) {
      state.pageNumber = action.payload;
    },
    setQuery(state, action) {
      state.pageNumber = 1;
      state.query = action.payload;
    },
  },
});

export default PageSlice;
