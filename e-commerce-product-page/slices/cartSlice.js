import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      const { id, amount } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      existingProduct
        ? (existingProduct.amount += amount)
        : state.push(action.payload);
    },
    removeProductFromCart(state, action) {
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      existingProduct.amount === 1
        ? (state = state.filter((product) => product.id !== id))
        : existingProduct.amount--;
      return state;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
