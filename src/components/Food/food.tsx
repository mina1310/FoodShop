import { useDispatch } from "react-redux";
import Buttons from "./Buttons";
import { foodActions } from "../store/food-slice";
import { FoodItem } from "../store/food-slice-type";

const Food:React.FC<FoodItem>=({id,image,name,price,description})=>{
    const dispath=useDispatch();
     const addMealFood=()=>{
        dispath(foodActions.addFood({
            id,name,price
        }))
    }

    return(
        <article>
            <header>
            <img  src={`http://localhost:3000/${image}`} alt={description}/>
            </header>
            <main>
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <Buttons onClick={addMealFood} label='Add to Cart'/>
            </main>


        </article>

    )
}
export default Food;