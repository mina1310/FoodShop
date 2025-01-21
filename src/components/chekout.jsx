import { useDispatch } from "react-redux";
import Input from "./Input";
import { modalActions } from "../store/modal";
import Buttons from "./Buttons";

const Chekout=()=>{
    const dispatch=useDispatch();
    const handleCloseChekout=()=>{
        dispatch(modalActions.hideModal())
    }
    const submit=()=>{
        dispatch(modalActions.setContentModal('success'))
    }
    return(
        <div>
       <p>total Amount:</p>
        <form>
        <div>
        <Input label='FullName' type='text' id='fullName' name='name'/>
        <Input  label='EmailAddress' type='email' id='emailAddress' name='email'/>
        <Input  label='Street' type='text' id='street' name='street'/>
         </div>
         <span>
         <Input  label='PostalCode' type='text' id='postalCode' name='postal'/>
         <Input  label='City' type='text' id='city' name='city'/>
         </span>
        </form>
        <div>
            <Buttons onClick={handleCloseChekout} label='close'  />
            <Buttons onClick={submit}   label='submitOrder'  /> 
        </div>
        </div>
    )

}
export default Chekout;