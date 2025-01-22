import { useDispatch } from "react-redux";
import Buttons from "./Buttons";
import { modalActions } from "../store/modal";
import React from "react";
import { AppDispatch } from "../store";

const Success:React.FC=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const close=()=>{
        dispatch(modalActions.hideModal());
    }
    return(
        <div>
            <h1>Success</h1>
            <p> Your order was submitted successfully we will get back to you with more details via Email</p>
            <Buttons  onClick={close}   label='okay' />
        </div>
    )

}
export default Success;