import { useSelector } from "react-redux";
import { Cart } from "../Cart";
import { Chekout } from "../Chekout";
import Success from "../Success/Success";
import React from "react";
import { RootState } from "../../store";
import classes from "./modal.module.css";
import { ModalProbs } from "./Modal.type";

export const Modal: React.FC<ModalProbs> = ({ children }) => {
  const content = useSelector((state: RootState) => state.modal.contentModal);

  const modalComponent: { [key: string]: React.FC | undefined } = {
    cart: Cart,
    chekout: Chekout,
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
