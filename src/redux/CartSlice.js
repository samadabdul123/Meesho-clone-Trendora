import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((p) => p.id === item.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }

      state.totalQty += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((p) => p.id === id);
      if (!item) return;

      state.totalQty -= item.qty;
      state.totalAmount -= item.price * item.qty;

      state.items = state.items.filter((p) => p.id !== id);
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((p) => p.id === id);

      if (item) {
        item.qty += 1;
        state.totalQty += 1;
        state.totalAmount += item.price;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((p) => p.id === id);

      if (item.qty === 1) return;

      item.qty -= 1;
      state.totalQty -= 1;
      state.totalAmount -= item.price;
    },

    // ⭐ NEW → CLEAR CART
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
