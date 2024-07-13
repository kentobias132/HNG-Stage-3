import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";
import { CheckCircleIcon, HomeIcon } from "@heroicons/react/outline";

const SuccessPage = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Success!</h1>
        <p className="text-gray-600 mt-2">
          Your order has been placed successfully.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
