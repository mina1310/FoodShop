import { useDispatch } from "react-redux";
import Buttons from "../Buttons";
import { foodActions } from "../../store/food-slice"; 
import { FoodItem } from "../../store/food-slice-type"; 
import classes from './food.module.css'
import { Link } from "react-router-dom";
const Food:React.FC<FoodItem>=({id,image,name,price,description})=>{
    const dispath=useDispatch();
     const addMealFood=()=>{
        dispath(foodActions.addFood({
            id,name,price
        }))
    }

    return(
        <article className={classes['food__item']}>
          <Link to={`/${description}`} state={{name,description}}> <img   src={`http://localhost:3000/${image}`} alt={description}/></Link>
            <main>
            <Link to={`/${description}`} state={{name,description}}><h3 >{name}</h3></Link>
            <p className={classes['food__item-price']}>{price}</p>
            {/* <p className={classes['food__item-description']}>{description}</p> */}
            <Buttons  className={classes['food__item-action']} onClick={addMealFood} label='Add to Cart'/>
            </main>


        </article>

    )
}
export default Food;