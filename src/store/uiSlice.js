import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showModal: false, notification: null },
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
