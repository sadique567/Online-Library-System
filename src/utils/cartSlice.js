import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
  name: "carnpmmmt",
  initialState: {
    items: ["book1" , "book2" , "Book3"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
