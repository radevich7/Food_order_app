import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cloneElement } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    cartChanged: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        // For new item push into items array:
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
        // Total Amount
        state.totalAmount = newItem.quantity * newItem.price;
        // Quantity
        state.totalQuantity = state.totalQuantity + newItem.quantity;
      } else {
        // For existing items:
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
        state.totalAmount =
          state.totalAmount + newItem.price * newItem.quantity;
        state.totalQuantity = state.totalQuantity + newItem.quantity;
      }
      state.cartChanged = true;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        // if there is only one element in the items array
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        // more than 1 element in items array
        state.totalAmount = state.totalAmount - existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.cartChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

// // POST ALBUM THUNK
