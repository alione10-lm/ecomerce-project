import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/productSlice";
import UsersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: { products: ProductReducer, users: UsersReducer },
});
export default store;
