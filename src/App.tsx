// import { useSelector } from "react-redux";
// import Header from "./components/Header";
// import Modal from "./components/modal";
// import MealFood from "./components/MealFood";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";


const App:React.FC =() =>{
  const router=createBrowserRouter ([
    {path:'/' ,
    element:<RootLayout />,
    children:[
      {index:true, element:<Home />},
      {path:'/orders', element:<Orders />},
      {path:'/cart', element:<Cart />}
      ]
    },

  ])
    
  
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
}

export default App;
