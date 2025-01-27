import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from './orders.module.css'
const Orders:React.FC=()=>{
   const{selectedFoods}=useSelector((state:RootState)=>state.food)
   console.log("Selected Foods in State:", selectedFoods); 
   const content='Your cart is empty, go pick a delicious meal!'
return(
    <div className={classes['orders']}>
    {selectedFoods.length > 0 ? (
      <div className={classes['orders__item']}>
        {selectedFoods.map((item) => (
          <li key={item.id}>
            <div>
              <img className={classes['orders__item-image']} src={`http://localhost:3000/${item.image}`} alt={item.name} />
              <div>name:{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>What’s special about this food?<br/>:{item.description}</div>
            </div>
          </li>
        ))}
      </div>
    ) : (
      <p>{content}</p>
    )}
  </div>
);;
}
export default Orders;