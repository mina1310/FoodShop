import { useDispatch ,useSelector} from "react-redux";
import Input from "../Input/Input";
import { modalActions } from "../../store/modal";
import Buttons from "../Buttons";
import React from "react";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { foodActions } from "../../store/food-slice";
import classes from './chekout.module.css'

const Chekout:React.FC=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const {totalAmount}=useSelector((state:RootState)=>state.food);
    const handleCloseChekout=()=>{
        dispatch(foodActions.resetSelectedFoods());
     dispatch(modalActions.setContentModal('cart'))
    }
    const submit=()=>{
        dispatch(modalActions.setContentModal('success'))
    }
    return(
        <div className={classes['chekout']}>
       <p className={classes['chekout__total']}>total Amount : ${Number(totalAmount).toFixed(2)}</p>
        <form className={classes['chekout__inputs']}>
        <Input inline={false} label='FullName' type='text' id='fullName' name='name'/>
        <Input inline={false} label='E-mailAddress' type='email' id='emailAddress' name='email'/>
        <Input inline={false} label='Street' type='text' id='street' name='street'/>
        <Input inline={false} label='PostalCode' type='text' id='postalCode' name='postal'/>
        <Input inline={false} label='City' type='text' id='city' name='city'/>
        </form>
        <div className={classes['chekout__actions']} >
            <Buttons className={classes['chekout__actions-closer']} onClick={handleCloseChekout} label='close'  />
            <Buttons  className={classes['chekout__actions-submitter']}onClick={submit}   label='submitOrder'  /> 
        </div>
        </div>
        
    )

}
export default Chekout;