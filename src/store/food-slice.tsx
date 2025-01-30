import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import { FoodItem } from "./food-slice-type";

interface FoodState {
  foods: FoodItem[];
  selectedFoods: FoodItem[];
  status: "loading" | "finish" | null;
  error: string | null;
  totalQuantity: number;
  totalAmount: number;
}
const initialState: FoodState = {
  foods: [],
  selectedFoods: [],
  status: null,
  error: null,
  totalQuantity: 0,
  totalAmount: 0,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoods(state, action: PayloadAction<FoodItem[]>) {
      state.foods = action.payload;
    },
    setLoading(state) {
      state.status = "loading";
    },
    setDone(state) {
      state.status = "finish";
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    addFood(state, action: PayloadAction<FoodItem>) {
      const newItem = action.payload;
      state.totalQuantity++;
      const exsistenseIndex = state.selectedFoods.findIndex(
        (items) => items.id === newItem.id
      );
      if (exsistenseIndex > -1) {
        state.selectedFoods[exsistenseIndex].quantity!++;
      } else {
        state.selectedFoods.push({
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          id: newItem.id,
          image: newItem.image /*جدید اضافه شد*/,
          description: newItem.description,
        });
      }
      state.totalAmount = state.totalAmount + Number(newItem.price);
    },
    removeFood(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.totalQuantity--;
      const item = state.selectedFoods.find((items) => items.id === id);
      if (item!.quantity === 1) {
        item!.quantity--;
        const indexItem = state.selectedFoods.findIndex(
          (items) => items.id === id
        );
        state.selectedFoods.splice(indexItem, 1);
      } else {
        item!.quantity!--;
      }

      state.totalAmount = state.totalAmount - Number(item!.price);
    },
    resetSelectedFoods(state) {
      state.selectedFoods = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});
export const getData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(foodActions.setLoading());

    const fetchDate = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("getting data failed");
        }
        const data = await response.json();
        dispatch(foodActions.setDone());
        console.log(data);
        dispatch(foodActions.setFoods(data));
      } catch {
        dispatch(foodActions.setError("error"));
      }
    };
    fetchDate();
  };
};

export const foodActions = foodSlice.actions;
export default foodSlice;
