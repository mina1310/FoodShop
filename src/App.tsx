// import { useSelector } from "react-redux";
// import Header from "./components/Header";
// import Modal from "./components/modal";
// import MealFood from "./components/MealFood";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import OrdersPage from "./pages/OrdersPage";
import CartPage from "./pages/CartPage";
import FoodDetailPage from "./pages/FoodDetailPage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/orders", element: <OrdersPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/:description", element: <FoodDetailPage /> },
      ],
    },
  ]);

  // const displayModal=useSelector(state=>state.modal.showModal)
  // console.log('this is:',displayModal)
  return (
    <RouterProvider router={router} />
    // <>
    //   <Header />
    //   {displayModal &&  <Modal />  }
    //   <MealFood />
    // </>
  );
};

export default App;
