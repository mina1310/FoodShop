import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/food-slice";
import Food from "./food";
import { AppDispatch, RootState } from "../store";

const MealFood:React.FC=()=>{
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getData())
        
    },[dispatch])
    const mealFoods=useSelector((state:RootState)=>state.food.foods)
    
    return(
        <div>
            <ul>
                {mealFoods.map((items)=>(<li key={items.id}> 
                    <Food 
                    id={items.id}
                    image={items.image}
                    name={items.name}
                    price={items.price}
                    description={items.description}

                    /> 
                     </li>
                )
                )}

            </ul>
        </div>
        
    );

}
export default MealFood;