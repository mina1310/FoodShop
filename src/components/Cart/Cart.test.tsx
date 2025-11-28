import { renderWithStore } from "../../test-utils/renderWithStore";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { configureStore } from "@reduxjs/toolkit";

describe("complete test", () => {
  const mockFood = [
    { id: "1", name: "Pizza", price: 10, quantity: 2 },
    { id: "2", name: "Burger", price: 5, quantity: 1 },
  ];
  test("render cart title and totalAmount", () => {
    renderWithStore(<Cart />, {
      preloadedState: {
        food: { selectedFoods: mockFood, totalAmount: 25 },
      },
    });
    const title = screen.getByRole("heading", { level: 2, name: /Your Cart/i });
    expect(title).toBeInTheDocument();

    const total = screen.getByText(/total:\s*\$25\.00/i);
    expect(total).toBeInTheDocument();

    const pizza = screen.getByText(/pizza\s*-\s*2\s*\*\s*\$\s*10/i);
    expect(pizza).toBeInTheDocument();

    const burger = screen.getByText(/burger\s*-\s*1\s*\*\s*\$\s*5/i);
    expect(burger).toBeInTheDocument();
  });
  test("clicking + and - buttons dispatches addFood and removeFood actions ", () => {
    const { store } = renderWithStore(<Cart />, {
      preloadedState: {
        food: { selectedFoods: mockFood, totalAmount: 25 },
      },
    });
    const firstPlusButton = screen.getAllByText("+")[0];
    fireEvent.click(firstPlusButton);
    const firstState = store.getState() as any;
    expect(firstState.food.selectedFoods[0].quantity).toBe(3);

    const secondPlusButton = screen.getAllByText("+")[1];
    fireEvent.click(secondPlusButton);
    const secondState = store.getState() as any;
    expect(secondState.food.selectedFoods[1].quantity).toBe(2);

    const firstSubtractionButton = screen.getAllByText("-")[0];
    fireEvent.click(firstSubtractionButton);
    const firstSubState = store.getState() as any;
    expect(firstSubState.food.selectedFoods[0].quantity).toBe(2);

    const secondSubtractionButton = screen.getAllByText("-")[1];
    fireEvent.click(secondSubtractionButton);
    const secondSubState = store.getState() as any;
    expect(secondSubState.food.selectedFoods[1].quantity).toBe(1);
  });
  test("clicking GO TO CHEKOUT button dispatches setContentModal action", () => {
    const store = renderWithStore(<Cart />, {
      preloadedState: { modal: { contentModal: null } },
    });
    const checkoutButton = screen.getByText("GO TO CHEKOUT");
    fireEvent.click(checkoutButton);
    const state = store.getState() as any;
    expect(state.modal.contentModal).toBe("chekout");
  });
  test("clicking close button dispatches resetSelectedFoods action", () => {
    const { store } = renderWithStore(<Cart />, {
      preloadedState: { food: { selectedFoods: mockFood, totalAmount: 25 } },
    });
    const closeButton = screen.getByText("close");
    fireEvent.click(closeButton);
    const state = store.getState() as any;
    expect(state.food.selectedFoods).toEqual([]);
  });
});
