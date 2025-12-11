// import { useDispatch, useSelector } from "react-redux";
// import { modalActions } from "../../store/modal";
// import React from "react";
// import { RootState } from "../../store";

// export const Header: React.FC = () => {
//   const selectedQuantity = useSelector(
//     (state: RootState) => state.food.totalQuantity
//   );
//   const dispatch = useDispatch();
//   function handleCart() {
//     dispatch(modalActions.setContentModal("cart"));
//     dispatch(modalActions.toggleModal());
//   }

//   return (
//     <header id="main-header">
//       <nav>
//         <button onClick={handleCart}>cart({selectedQuantity})</button>
//       </nav>
//     </header>
//   );
// };
