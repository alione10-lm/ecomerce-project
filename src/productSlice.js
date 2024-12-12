import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },

    addToCart(state, action) {
      state.cart.push(action.payload);
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, isInCart: true }
          : product
      );
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, isInCart: false }
          : product
      );
    },
  },
});

export default productSlice.reducer;
export const { removeFromCart, addToCart, getProducts } = productSlice.actions;
