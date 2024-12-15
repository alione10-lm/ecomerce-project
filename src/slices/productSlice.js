import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    getCategories(state, action) {
      state.categories = action.payload;
    },

    addToCart(state, action) {
      state.cart.push(action.payload);

      // if (state.cart.length === 0) state.cart.push(action.payload);
      // state.cart.map((el) =>
      //   el.id === action.payload.id
      //     ? state.cart
      //     : state.cart.push(action.payload)
      // );
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      // state.products = state.products.map((product) =>
      //   product.id === action.payload.id
      //     ? { ...product, isInCart: false }
      //     : product
      // );
    },
    increaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity++;
      product.totalPrice = product.quantity * product.price;
    },
    decreaseProductQuantity(state, action) {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity--;
      product.totalPrice = product.quantity * product.price;

      if (product.quantity === 0)
        productSlice.caseReducers.removeFromCart(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default productSlice.reducer;
export const {
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
  removeFromCart,
  addToCart,
  getProducts,
  getCategories,
} = productSlice.actions;
