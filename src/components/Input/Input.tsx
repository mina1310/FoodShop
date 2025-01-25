import { InputHTMLAttributes } from "react";
import classes from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id:string;
  type:string;
  label:string;
  inline?:boolean;
};
const Input:React.FC<InputProps>=({id,type,label,inline=false,...props})=>{
    return(
        <div className={inline? classes['container-inline']:classes['container-block']}>
            <label  htmlFor={id}>{label}</label>
            <input id={id} type={type} {...props} /> 
        </div>
    )

}
export default Input;