import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.jpg";
import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { modalActions } from "../../store/modal";

const MainNavigation: React.FC = () => {
  const selectedQuantity = useSelector(
    (state: RootState) => state.food.totalQuantity
  );
  const dispatch = useDispatch();
  function handleCart() {
    console.log("button click");

    dispatch(modalActions.setContentModal("cart"));
    dispatch(modalActions.toggleModal());
  }

  return (
    <div className={classes.nav__header}>
      <div className={classes.nav__image}>
        <img src={logo} alt="this is logo img" />
      </div>
      <div className={classes.nav__menu}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          onClick={handleCart}
          to="/cart"
        >
          Cart<div className={classes.nav__menu_count}>{selectedQuantity}</div>
        </NavLink>
      </div>
    </div>
  );
};
export default MainNavigation;
