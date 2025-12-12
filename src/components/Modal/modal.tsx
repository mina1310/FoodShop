import { useSelector } from "react-redux";
import { Cart } from "../Cart";
import { Checkout } from "../Checkout";
import { Success } from "../Success";
import React from "react";
import { RootState } from "../../store";
import classes from "./modal.module.css";
import { ModalProbs } from "./Modal.type";
import { ModalKey } from "../../store/modal";

export const Modal: React.FC<ModalProbs> = ({ children }) => {
  const content = useSelector((state: RootState) => state.modal.contentModal);
  const modalComponent: Record<ModalKey, React.FC> = {
    cart: Cart,
    checkout: Checkout,
    success: Success,
  };
  const RenderContent = content ? modalComponent[content] : undefined;

  return (
    <div className={classes.modal}>
      {RenderContent ? <RenderContent /> : <p>not found</p>}
      {children}
    </div>
  );
};
export default Modal;
