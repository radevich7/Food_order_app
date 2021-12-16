import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    status: "",
    cartChanged: "false",
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem);
    },
  },
  // extraReducers: {
  //   // GET ALBUMS
  //   [addItem.pending]: (state) => {
  //     state.loading = true;
  //     console.log("pending");
  //   },
  //   [addItem.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.albums = payload;
  //     console.log("fulfilled");
  //   },
  //   [addItem.rejected]: (state) => {
  //     state.loading = false;
  //     console.log("rejected");
  //   },
  // },
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
