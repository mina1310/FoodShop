import { ButtonProps } from "./Buttons.type";

export const Buttons = ({ label, children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {label}
      {children}
    </button>
  );
};
