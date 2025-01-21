
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Chekout from "./chekout";
import Success from "./Success";



const Modal=  ({children})=>{
    const content=useSelector(state=>state.modal.contentModal)
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
    
    const modalComponent={
        cart:Cart,
        chekout:Chekout,
        success:Success
    }
   const RenderContent=modalComponent[content]
    
    return createPortal(
     
     <div className="modal" >
     {RenderContent? <RenderContent />:<p>not found</p>}
     
     {children}
     </div>
     ,
     document.getElementById('modal')
    
    );

}
export default Modal;