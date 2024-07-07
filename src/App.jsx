import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckOutPage";
import { CartContext } from "./context/CartContext";
import Root from "./pages/root";

const appRouter = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/cart", element: <CartPage /> },
]);

const App = () => {
  // const { cart } = useContext(CartContext);

  return (
    <div>
      {/* <Header cartCount={cart.length} /> */}
      <RouterProvider router={appRouter} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
