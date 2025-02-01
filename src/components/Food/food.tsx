import { useDispatch } from "react-redux";
import { Buttons } from "../Buttons";
import { foodActions } from "../../store/food-slice";
import { FoodItem } from "../../store/food-slice-type";
import classes from "./food.module.css";
import { Link } from "react-router-dom";
export const Food: React.FC<FoodItem> = ({
  id,
  image,
  name,
  price,
  description,
}) => {
  const dispath = useDispatch();
  const addMealFood = () => {
    dispath(
      foodActions.addFood({
        id,
        name,
        price,
        image,
        description,
      })
    );
  };

  return (
    <article className={classes["food__item"]}>
      <Link to={`/${description}`} state={{ name, description }}>
        {" "}
        <img src={`http://localhost:3000/${image}`} alt={description} />
      </Link>
      <Link to={`/${description}`} state={{ name, description }}>
        <h3 className={classes["food__item-name"]}>{name}</h3>
      </Link>
      <p className={classes["food__item-price"]}>${price}</p>
      <Buttons
        className={classes["food__item-action"]}
        onClick={addMealFood}
        label="Add to Cart"
      />
    </article>
  );
};
