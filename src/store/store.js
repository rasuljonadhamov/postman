import { configureStore } from "@reduxjs/toolkit";
import postmanSlice from "./postmanSlice";

const store = configureStore({
  reducer: postmanSlice,
});

export default store;
