import classes from "./input.module.css";
import { InputProps } from "./Input.type";

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  inline = false,
  ...props
}) => {
  return (
    <div
      className={
        inline ? classes["container-inline"] : classes["container-block"]
      }
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </div>
  );
};
