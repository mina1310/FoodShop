
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import Chekout from "./Chekout/chekout";
import Success from "./Success";
import React, { ReactNode } from "react";
import { RootState } from "../store";


interface ModalProbs{
    children?:ReactNode;
}
const Modal:React.FC<ModalProbs>=  ({children})=>{
    const content=useSelector((state:RootState)=>state.modal.contentModal)
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
    
    const modalComponent:{[key:string]:React.FC|undefined}={
        cart:Cart,
        chekout:Chekout,
        success:Success
    }
   const RenderContent=content?modalComponent[content]:undefined;
    
    return (
     
     <div className="modal" >
     {RenderContent? <RenderContent />:<p>not found</p>}
     
     {children}
     </div>
     
    
    );

}
export default Modal;