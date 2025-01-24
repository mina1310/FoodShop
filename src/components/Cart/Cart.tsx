import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import Buttons from "../Buttons";
import { foodActions } from "../../store/food-slice";
import React from "react";
import { AppDispatch, RootState } from "../../store";
import { FoodItem } from "../../store/food-slice-type";

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
    <div >
        
        <h1>You'r Cart</h1>
        <ul>
            
            {selectedFoods.map((items)=>( <li key={items.id}>
                
            <span>{items.name}-{items.quantity}*${items.price}
              <span>
            <Buttons onClick={()=>removeMealFood(items.id)}   label='-' />
        </span>
        <span> {items.quantity}</span>
        <span>
            <Buttons onClick={()=>addMealFood(items)}  label='+' />
        </span>
        
            
            </span>
            </li>
          
            ))}
            
        </ul>
   
    <p>total:${Number(totalAmount).toFixed(2)}  </p>
    <div>
        <span>
            <Buttons onClick={closeCart} label='close' />
        </span>
        <span>
            <Buttons onClick={showCheckout}  label='GO TO CHEKOUT' />
        </span>
    </div>

    </div>
    );
}
export default Cart;