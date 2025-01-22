import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id:string;
  type:string;
  label:string;
};
const Input:React.FC<InputProps>=({id,type,label,...props})=>{
    return(
        <>
            <label  htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props} /> 
        </>
    )

}
export default Input;