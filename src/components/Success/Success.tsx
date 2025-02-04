import { useDispatch } from "react-redux";
import { Buttons } from "../Buttons";
import { modalActions } from "../../store/modal";
import React from "react";
import { AppDispatch } from "../../store";
import { foodActions } from "../../store/food-slice";
import classes from "./success.module.css";

export const Success: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const close = () => {
    dispatch(foodActions.resetSelectedFoods());
    dispatch(modalActions.setContentModal("cart"));
  };
  return (
    <div className={classes["success"]}>
      <h2>Success!</h2>
      <p>
        {" "}
        Your order has been successfully placed.
        <br />
        We will deliver your order within the next hour.
        <br /> We hope you enjoy your meal!
      </p>
      <div className={classes["success__action"]}>
        <Buttons
          className={classes["success__action-closer"]}
          onClick={close}
          label="okay"
        />
      </div>
    </div>
  );
};
