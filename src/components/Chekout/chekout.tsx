import { useDispatch } from "react-redux";
import Input from "../Input/Input";
import { modalActions } from "../../store/modal";
import Buttons from "../Buttons";
import React from "react";
import { AppDispatch } from "../../store";
import classes from './chekout.module.css'

const Chekout:React.FC=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const handleCloseChekout=()=>{
        dispatch(modalActions.hideModal())
    }
    const submit=()=>{
        dispatch(modalActions.setContentModal('success'))
    }
    return(
        <div className={classes['chekout']}>
       <p>total Amount:</p>
        <form>
        <div>
        <Input inline={false} label='FullName' type='text' id='fullName' name='name'/>
        </div>
        <div>
        <Input inline={false} label='E-mailAddress' type='email' id='emailAddress' name='email'/>
        </div>
        <div>
        <Input inline={false} label='Street' type='text' id='street' name='street'/>
        </div>
         <div>
         <Input inline={false} label='PostalCode' type='text' id='postalCode' name='postal'/>
         <Input inline={false} label='City' type='text' id='city' name='city'/>
         </div>
        </form>
        <div>
            <Buttons onClick={handleCloseChekout} label='close'  />
            <Buttons onClick={submit}   label='submitOrder'  /> 
        </div>
        </div>
    )

}
export default Chekout;