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
        { path: "/info/:id", element: <FoodDetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
