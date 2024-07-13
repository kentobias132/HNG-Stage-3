import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckOutPage";
import MainView from "./components/MainView";
import PageView from "./components/PageView";
import ProductDetail from "./components/ProductDetail";
import ProductView from "./components/ProductView";
import SuccessPage from "./components/SuccessPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
  },
  {
    path: "product",
    element: <ProductView />,
    children: [
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/cart",
    element: <PageView />,
    children: [
      { path: "", element: <CartPage /> },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      { path: "checkout/success", element: <SuccessPage /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
