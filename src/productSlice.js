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
      // state.products = state.products.map((product) =>
      //   product.id === action.payload.id
      //     ? { ...product, isInCart: true }
      //     : product
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
} = productSlice.actions;
