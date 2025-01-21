import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logo.jpg'
import { modalActions } from '../store/modal';




const Header=()=>{
    const selectedQuantity=useSelector((state)=>state.food.totalQuantity);
    const dispatch=useDispatch();
    function handleCart(){
        console.log('button click')
        
        dispatch(modalActions.setContentModal('cart'))
        dispatch(modalActions.toggleModal())
       
    }

    return(
        <header id='main-header'>
    <div id="title">
        <img src={logo} alt="this is logo img"  />
    </div>
    <nav>
    <button onClick={handleCart}>cart({selectedQuantity})</button>
    </nav>
    </header>
    )
}
export default Header;