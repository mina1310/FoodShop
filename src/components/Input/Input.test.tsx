import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import classes from "./input.module.css";
import { vitest } from "vitest";

describe("test Input component", () => {
  test("render lable and input", () => {
    render(<Input id="userName" type="text" label="userName" />);
    const inputElement = screen.getByLabelText("userName");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", "userName");
  });
  test("label should connect to input with htmlFor", () => {
    render(<Input id="userName" type="text" label="userName" />);

    const label = screen.getByText("userName");
    expect(label).toHaveAttribute("for", "userName");
  });
  test("inline class", () => {
    const { container } = render(
      <Input id="userName" type="text" label="userName" inline />
    );
    expect(container.firstChild).toHaveClass(classes["container-inline"]);
  });
  test("calls onChange handler when typing", () => {
    const handleChange = vitest.fn();
    render(
      <Input
        id="userName"
        type="text"
        label="userName"
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText("userName");
    fireEvent.change(inputElement, { target: { value: "my name is mina" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
