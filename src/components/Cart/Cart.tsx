import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import Buttons from "../Buttons";
import { foodActions } from "../../store/food-slice";
import React from "react";
import { AppDispatch, RootState } from "../../store";
import { FoodItem } from "../../store/food-slice-type";
import classes from './Cart.module.css'

const Cart:React.FC=()=>{
const dispatch=useDispatch<AppDispatch>();
const {selectedFoods,totalAmount}=useSelector((state:RootState)=>state.food);
const showCheckout=()=>{
    dispatch(modalActions.setContentModal('chekout'));
}
const closeCart=()=>{
    dispatch(modalActions.hideModal());
}
const addMealFood=(items:FoodItem)=>{
    dispatch(foodActions.addFood(items))
    
}
const removeMealFood=(id:string)=>{
    dispatch(foodActions.removeFood(id))
}

    return(
    <div className={classes['cart']}>
        <div className={classes['cart__content']} >
        <h2>Your Cart</h2>
        <div>
            {selectedFoods.map((items)=>( <li key={items.id}>  
            <div className={classes['cart__item']}>
                <span className={classes['cart__item-description']}>
                {items.name} - {items.quantity} * ${items.price}
                </span>
                <span className={classes['cart__item-controls']}>
              
                <Buttons className={classes['cart__item-actions']} onClick={()=>removeMealFood(items.id)}   label='-' />
                <span> {items.quantity}</span>
                <Buttons  className={classes['cart__item-actions']} onClick={()=>addMealFood(items)}  label='+' />
        
               </span>
        
            
            </div>
            </li>
          
            ))}
            
        </div>
   
    <p className={classes['cart__total']}>total:${Number(totalAmount).toFixed(2)}  </p>
    <div className={classes['cart__actions']}>
        
     <Buttons  className={classes['cart__actions-closer']} onClick={closeCart} label='close' />
     <Buttons className={classes['cart__actions-checker']} onClick={showCheckout}  label='GO TO CHEKOUT' />
       
    </div>
    </div>
    </div>
    );
}
export default Cart;