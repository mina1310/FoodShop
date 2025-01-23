import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/food-slice";
import Food from "../food";
import { AppDispatch, RootState } from "../../store";
import classes from './MealFood.module.css';


const MealFood:React.FC=()=>{
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(getData())
        
    },[dispatch])
    const mealFoods=useSelector((state:RootState)=>state.food.foods)
    
    return(
        <div className={classes['meal-food']}>
            <div  className={classes['meal-food__list']}>
                {mealFoods.map((items)=>(<div className={classes['meal-food__item']} key={items.id}> 
                    <Food 
                    id={items.id}
                    image={items.image}
                    name={items.name}
                    price={items.price}
                    description={items.description}

                    /> 
                     </div>
                )
                )}

            </div>
        </div>
        
    );

}
export default MealFood;



// className={meal-food__list}
// className={meal-food__item}