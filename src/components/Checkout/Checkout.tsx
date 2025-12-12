import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { Buttons } from "../Buttons";
import React, { useState } from "react";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { foodActions } from "../../store/food-slice";
import { Form } from "react-router-dom";
import classes from "./checkout.module.css";
import { Input } from "../Input";
import {
  checkoutData,
  checkoutValidation,
} from "../../utils/checkoutValidation";

export const Checkout: React.FC = () => {
  const [errors, setErrors] = useState<
    Partial<Record<keyof checkoutData, string>>
  >({});
  const dispatch = useDispatch<AppDispatch>();
  const { totalAmount } = useSelector((state: RootState) => state.food);
  const handleCloseChekout = () => {
    dispatch(foodActions.resetSelectedFoods());
    dispatch(modalActions.setContentModal("cart"));
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget) return;
    const formData = new FormData(event.currentTarget);
    const orderdata = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      street: formData.get("street") as string,
      postal: formData.get("postal") as string,
      city: formData.get("city") as string,
    };
    const validationError = checkoutValidation(orderdata);
    setErrors(validationError);
    if (Object.keys(validationError).length > 0) return;
    dispatch(modalActions.setContentModal("success"));
  };

  return (
    <div className={classes["chekout"]}>
      <p className={classes["chekout__total"]}>
        total Amount : ${Number(totalAmount).toFixed(2)}
      </p>
      <Form
        onSubmit={submitHandler}
        className={classes["chekout__inputs"]}
        noValidate
      >
        <Input
          inline={false}
          label="FullName"
          type="text"
          id="fullName"
          name="name"
        />
        {errors.name && (
          <p className={classes["chekout__inputs-error"]}>{errors.name}</p>
        )}
        <Input
          inline={false}
          label="E-mailAddress"
          type="email"
          id="emailAddress"
          name="email"
        />
        {errors.email && (
          <p className={classes["chekout__inputs-error"]}>{errors.email}</p>
        )}
        <Input
          inline={false}
          label="Street"
          type="text"
          id="street"
          name="street"
        />
        {errors.street && (
          <p className={classes["chekout__inputs-error"]}>{errors.street}</p>
        )}
        <Input
          inline={false}
          label="PostalCode"
          type="text"
          id="postalCode"
          name="postal"
          minLength={5}
        />
        {errors.postal && (
          <p className={classes["chekout__inputs-error"]}>{errors.postal}</p>
        )}
        <Input inline={false} label="City" type="text" id="city" name="city" />
        {errors.city && (
          <p className={classes["chekout__inputs-error"]}>{errors.city}</p>
        )}
        <div className={classes["chekout__actions"]}>
          <Buttons
            className={classes["chekout__actions-closer"]}
            onClick={handleCloseChekout}
            label="close"
          />
          <Buttons
            className={classes["chekout__actions-submitter"]}
            label="submitOrder"
          />
        </div>
      </Form>
    </div>
  );
};
