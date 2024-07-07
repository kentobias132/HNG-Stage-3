import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const Root = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Header cartCount={cart.length} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
