import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  children?: ReactNode;
}

const Buttons = ({ label, children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {label}
      {children}
    </button>
  );
};
export default Buttons;
