import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cloneElement } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    status: "",
    cartChanged: "false",
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
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

// // POST ALBUM THUNK
// export const addItem = createAsyncThunk("addItem", async (cart) => {
//   const response = await fetch(
//     "https://radevich7-f924f-default-rtdb.firebaseio.com/cart.json",
//     {
//       method: "POST",
//       header: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(cart),
//     }
//   ).then((data) => data.json());
//   if (!response) {
//     throw new Error("Sending cart data failed");
//   }
//   return cart;
// });
// // item{title, id, quantity, totalPrice, price}
