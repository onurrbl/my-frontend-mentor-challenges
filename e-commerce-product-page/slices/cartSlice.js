import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      const { id, image, title, price, amount } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.amount += amount;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
