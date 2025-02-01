import { useSelector } from "react-redux";
import { Cart } from "../Cart";
import { Chekout } from "../Chekout";
import Success from "../Success/Success";
import React, { ReactNode } from "react";
import { RootState } from "../../store";
import classes from "./modal.module.css";

interface ModalProbs {
  children?: ReactNode;
}
const Modal: React.FC<ModalProbs> = ({ children }) => {
  const content = useSelector((state: RootState) => state.modal.contentModal);
  //     const renderContent=()=>{
  //         if(content==='cart'){
  //      return <Cart />
  //     }if (content==='chekout'){
  //         return <Chekout />
  //     }if (content==='success'){
  //         return <Success />
  //     }
  //     return null;
  // };

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
