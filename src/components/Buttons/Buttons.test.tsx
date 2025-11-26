import { render, screen } from "@testing-library/react";
import { Buttons } from "./Buttons";

describe("Buttons component test", () => {
  test("render button with label", () => {
    render(<Buttons label="CLICK ME" />);
    const propElement = screen.getByText("CLICK ME");
    expect(propElement).toBeInTheDocument();
  });
});
