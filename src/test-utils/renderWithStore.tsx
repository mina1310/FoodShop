import { configureStore } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import foodSlice from "../store/food-slice";
import modalSlice from "../store/modal";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import orderSlice from "../store/order-slice";

interface RenderOptions {
  preloadedState?: any;
  store?: ReturnType<typeof configureStore>;
}

export function renderWithStore(
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        food: foodSlice.reducer,
        modal: modalSlice.reducer,
        order: orderSlice.reducer,
      } as any,
      preloadedState,
    }),
  }: RenderOptions = {}
) {
  type TestRootState = ReturnType<typeof store.getState>;
  return {
    store,
    getState: () => store.getState() as TestRootState,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
