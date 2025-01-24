import { useDispatch } from "react-redux";
import Buttons from "../Buttons";
import { foodActions } from "../../store/food-slice"; 
import { FoodItem } from "../../store/food-slice-type"; 
import classes from './food.module.css'

const Food:React.FC<FoodItem>=({id,image,name,price,description})=>{
    const dispath=useDispatch();
     const addMealFood=()=>{
        dispath(foodActions.addFood({
            id,name,price
        }))
    }

    return(
        <article className={classes['food__item']}>
            <img   src={`http://localhost:3000/${image}`} alt={description}/>
            <main>
            <h3 >{name}</h3>
            <p className={classes['food__item-price']}>{price}</p>
            <p className={classes['food__item-description']}>{description}</p>
            <Buttons  className={classes['food__item-action']} onClick={addMealFood} label='Add to Cart'/>
            </main>


        </article>

    )
}
export default Food;