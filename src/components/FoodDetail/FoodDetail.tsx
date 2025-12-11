import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classes from "./FoodDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getData } from "../../store/food-slice";

export const FoodDetail: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const location = useLocation();
  const { name, description } = location.state || {};
  const foods = useSelector((state: RootState) => state.food.foods);
  const food = foods.find((items) => items.id === params.id);
  useEffect(() => {
    if (foods.length === 0) dispatch(getData());
  }, [foods.length, dispatch]);

  return (
    <div className={classes["fooddetail"]}>
      <h1>How It’s Made</h1>
      {(name || food?.name) && <h2>{name || food?.name}</h2>}
      <p className={classes["fooddetail__description"]}>
        {description || food?.description}
      </p>
      <p className={classes["fooddetail__action"]}>
        <Link to={"/"}>BACK</Link>
      </p>
    </div>
  );
};
