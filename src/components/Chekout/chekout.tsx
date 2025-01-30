import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { modalActions } from "../../store/modal";
import Buttons from "../Buttons";
import React, { useState } from "react";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { foodActions } from "../../store/food-slice";
import { Form } from "react-router-dom";
import classes from "./chekout.module.css";
import { sendData } from "../../store/order-slice";

const Chekout: React.FC = () => {
  const [error, setError] = useState<string>("");
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
    if (
      !orderdata.name.trim() ||
      !orderdata.email.trim() ||
      !orderdata.street.trim() ||
      !orderdata.postal.trim() ||
      !orderdata.city.trim()
    ) {
      alert("Please fill in all the fields");
      return;
    }

    if (!orderdata.email.includes("@")) {
      setError("eeeeeee");
      return;
    }

    const postalPattern = /^[0-9]{5,}$/;
    if (!postalPattern.test(orderdata.postal)) {
      alert("The postal code must be at least 5 digits long.");
      console.log("Error state:", error);
      return;
    }

    dispatch(sendData(orderdata));
    dispatch(modalActions.setContentModal("success"));
  };

  // const submit=()=>{

  // }
  return (
    <div className={classes["chekout"]}>
      <p className={classes["chekout__total"]}>
        total Amount : ${Number(totalAmount).toFixed(2)}
      </p>
      <Form onSubmit={submitHandler} className={classes["chekout__inputs"]}>
        <Input
          inline={false}
          label="FullName"
          type="text"
          id="fullName"
          name="name"
        />
        <Input
          inline={false}
          label="E-mailAddress"
          type="email"
          id="emailAddress"
          name="email"
        />
        {error && <p>{error}</p>}
        <Input
          inline={false}
          label="Street"
          type="text"
          id="street"
          name="street"
        />
        <Input
          inline={false}
          label="PostalCode"
          type="text"
          id="postalCode"
          name="postal"
          minLength={5}
        />
        <Input inline={false} label="City" type="text" id="city" name="city" />
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
export default Chekout;
