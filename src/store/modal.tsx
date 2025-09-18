import { createSlice } from "@reduxjs/toolkit";
interface modalState {
  showModal: boolean;
  contentModal: null;
}
const initialState: modalState = {
  showModal: false,
  contentModal: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    showModal(state) {
      state.showModal = true;
    },
    hideModal(state) {
      state.showModal = false;
      state.contentModal = null;
    },
    setContentModal(state, action) {
      state.contentModal = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
