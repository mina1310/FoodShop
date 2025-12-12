import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal";
import foodSlice from "./food-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    food: foodSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
