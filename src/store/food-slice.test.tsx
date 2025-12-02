import store from ".";
import foodSlice, { foodActions } from "./food-slice";

describe("store test", () => {
  const initialState = foodSlice.getInitialState();
  const foodReducer = foodSlice.reducer;
  test("should return initial state when @@INIT", () => {
    const result = foodReducer(undefined, { type: "@@INIT" });
    expect(result).toEqual(initialState);
  });
  test("setFoods reducer sets foods", () => {
    const mockFood = [
      {
        id: "1",
        name: "pizza",
        price: 1000,
        quantity: 5,
        image: "abs",
        description: "it is made of chickhen and...",
      },
    ];
    const result = foodReducer(initialState, foodActions.setFoods(mockFood));
    expect(result.foods).toEqual(mockFood);
  });
  test("addFood reducer add food when item does not exist", () => {
    const mockFood = {
      id: "2",
      name: "chicken soap",
      price: 2500,
      quantity: 1,
      image: "abs",
      description: "it is made of chickhen and vegtables..",
    };
    const result = foodReducer(initialState, foodActions.addFood(mockFood));
    expect(result.selectedFoods).toEqual([mockFood]);
    expect(result.totalAmount).toBe(2500);
    expect(result.selectedFoods[0].quantity).toBe(1);
  });
  test("addFood reducer increase quantity when item exsit", () => {
    const prevState = {
      ...initialState,
      selectedFoods: [
        {
          id: "2",
          name: "chicken soap",
          price: 2500,
          quantity: 1,
          image: "abs",
          description: "it is made of chickhen and vegtables..",
        },
      ],
      totalAmount: 2500,
      totalQuantity: 1,
    };
    const mockFood = {
      id: "2",
      name: "chicken soap",
      price: 2500,
      quantity: 1,
      image: "abs",
      description: "it is made of chickhen and vegtables..",
    };
    const result = foodReducer(prevState, foodActions.addFood(mockFood));
    expect(result.selectedFoods[0].quantity).toBe(2);
    expect(result.totalAmount).toBe(5000);
    expect(result.totalQuantity).toBe(2);
  });

  test("removeFood should decrease quantity or remove item", () => {
    const previous = {
      ...initialState,
      selectedFoods: [
        {
          id: "2",
          name: "chicken soap",
          price: 2500,
          quantity: 1,
          image: "abs",
          description: "it is made of chickhen and vegtables..",
        },
      ],
      totalAmount: 2500,
      totalQuantity: 1,
    };

    const result = foodReducer(previous, foodActions.removeFood("2"));

    expect(result.selectedFoods.length).toBe(0);
    expect(result.totalQuantity).toBe(0);
    expect(result.totalAmount).toBe(0);
  });
  test("resetSelectedFoods  empty selected foods", () => {
    const previous = {
      ...initialState,
      selectedFoods: [
        {
          id: "2",
          name: "chicken soap",
          price: 2500,
          quantity: 1,
          image: "abs",
          description: "it is made of chickhen and vegtables..",
        },
      ],
      totalAmount: 2500,
      totalquantity: 5,
    };

    const result = foodReducer(previous, foodActions.resetSelectedFoods());

    expect(result.selectedFoods).toEqual([]);
    expect(result.totalQuantity).toBe(0);
    expect(result.totalAmount).toBe(0);
  });

  test("setLoading should set status to loading", () => {
    const result = foodReducer(initialState, foodActions.setLoading());
    expect(result.status).toBe("loading");
  });
  test("setError should set error message", () => {
    const result = foodReducer(initialState, foodActions.setError("error"));

    expect(result.error).toBe("error");
  });
});
