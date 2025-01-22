
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Chekout from "./chekout";
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
    
    return createPortal(
     
     <div className="modal" >
     {RenderContent? <RenderContent />:<p>not found</p>}
     
     {children}
     </div>
     ,
     document.getElementById('modal') as HTMLElement
    
    );

}
export default Modal;