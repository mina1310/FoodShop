import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./orders.module.css";
import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons";
export const Orders: React.FC = () => {
  const navigate = useNavigate();
  const { selectedFoods } = useSelector((state: RootState) => state.food);
  const content =
    "Your order list is empty, Let’s add some delicious dishes to it !";
  return (
    <div className={classes["orders"]}>
      {selectedFoods.length > 0 ? (
        <div className={classes["orders__items"]}>
          <h2>your orders</h2>
          {selectedFoods.map((item) => (
            <li key={item.id}>
              <div className={classes["orders__item"]}>
                <img
                  className={classes["orders__item-image"]}
                  src={`http://localhost:3000/${item.image}`}
                  alt={item.name}
                />
                <div>
                  <span className={classes["orders__item-label"]}>name : </span>
                  <span className={classes["orders__item-value"]}>
                    {item.name}
                  </span>
                </div>
                <div>
                  <span className={classes["orders__item-label"]}>
                    Quantity :{" "}
                  </span>
                  <span className={classes["orders__item-value"]}>
                    {item.quantity}
                  </span>
                </div>
                <div>
                  <div className={classes["orders__item-label"]}>
                    What’s special about this food ?
                  </div>
                  <div className={classes["orders__item-value"]}>
                    {item.description}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      ) : (
        <div className={classes["orders__empty"]}>
          <p className={classes["orders__empty-txt"]}>{content}</p>
          <Buttons
            className={classes["orders__empty-btn"]}
            label="Explore Menu"
            onClick={() => navigate("/")}
          />
        </div>
      )}
    </div>
  );
};
