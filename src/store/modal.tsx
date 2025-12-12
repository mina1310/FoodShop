import { createSlice } from "@reduxjs/toolkit";
export type ModalKey = "cart" | "checkout" | "success";
interface modalState {
  contentModal: ModalKey;
  showModal: boolean;
}
const initialState: modalState = {
  contentModal: "cart",
  showModal: false,
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
    },
    setContentModal(state, action) {
      state.contentModal = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
