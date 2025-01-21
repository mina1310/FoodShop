import { useDispatch } from "react-redux";
import Buttons from "./Buttons";
import { modalActions } from "../store/modal";

const Success=()=>{
    const dispatch=useDispatch();
    const close=()=>{
        dispatch(modalActions.hideModal());
    }
    return(
        <div>
            <h1>Success</h1>
            <p> Your order was submitted successfully we will get back to you with more details via Email</p>
            <Buttons  onClick={close}   label='okay' />
        </div>
    )

}
export default Success;