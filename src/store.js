import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";

const store = configureStore({
  reducer: ProductReducer,
});
export default store;
