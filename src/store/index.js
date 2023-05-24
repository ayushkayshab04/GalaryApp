import { configureStore } from "@reduxjs/toolkit";
import PageSlice from "./pageSlice";

const store = configureStore({
  reducer: {
    pageCounter: PageSlice.reducer,
  },
});

export const pageActions = PageSlice.actions;

export default store;
