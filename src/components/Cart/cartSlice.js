// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getCartsFromLocal, removeCartsFromLocal, setCarts } from "../../hooks/localStorage";

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal() || [],
  },
  reducers: {
    setToCarts: (state, action) => {
      const isExist = state.carts.find((cart) => cart._id === action.payload._id);
      if (!isExist) {
        state.carts.push(action.payload);
      } else {
        state.carts = state.carts.map((cart) =>
          cart._id === action.payload._id ? action.payload : cart
        );
      }
      setCarts(state.carts);
    },

    // Action to remove a specific cart item
    removeCartItem: (state, action) => {
      if (action.payload && action.payload._id) {
        // Remove from local storage
        removeCartsFromLocal(action.payload._id);

        // Remove from state
        state.carts = state.carts.filter((cart) => cart._id !== action.payload._id);
        
        // Update local storage
        setCarts(state.carts);
      } else {
        console.error("No _id found in payload");
      }
    },

    // Action to clear all cart items
    clearCarts: (state) => {
      state.carts = [];
      setCarts(state.carts);
    },
  },
});

export const { removeCartItem, clearCarts, setToCarts } = cartSlice.actions;

