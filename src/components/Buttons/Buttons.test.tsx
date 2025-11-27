import { fireEvent, render, screen } from "@testing-library/react";
import { Buttons } from "./Buttons";
import { vi } from "vitest";

describe("Buttons component test", () => {
  test("render button with label", () => {
    render(<Buttons label="CLICK ME" />);
    const propElement = screen.getByText("CLICK ME");
    expect(propElement).toBeInTheDocument();
  });
  test("render children in button", () => {
    render(
      <Buttons label="CLICK ME">
        <p>it is about my button test</p>
      </Buttons>
    );
    const childrenElement = screen.getByText("it is about my button test");
    expect(childrenElement).toBeInTheDocument();
  });
  test("checking onClick", () => {
    const handleClick = vi.fn(() => true);
    render(<Buttons label="CLICK ME" onClick={handleClick} />);
    const propElement = screen.getByText("CLICK ME");
    fireEvent.click(propElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveReturnedWith(true);
  });
});
