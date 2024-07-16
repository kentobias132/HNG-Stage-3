import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  TrashIcon,
  HeartIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

const img_base_url = "https://api.timbu.cloud/images/";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((acc, product) => {
      const price = Array.isArray(product.current_price)
        ? product.current_price[0]?.NGN?.[0]
        : product.current_price;
      return acc + (price || 0) * product.quantity;
    }, 0);
  };

  const handleQuantityChange = (productId, delta) => {
    const product = cart.find((p) => p.id === productId);
    if (product) {
      const newQuantity = product.quantity + delta;
      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  return (
    <div className="p-8 py-20">
      <div className="flex items-center mb-6">
        <div className="py-2">
          <span className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="ml-1 font-bold text-lg"
            >
              Home
            </button>
            <ChevronRightIcon className="h-4 w-4" />
            <p className="text-[#2D16BB] text-lg font-bold">Cart</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full space-y-4 mb-14">
          {cart.map((product) => {
            const price = Array.isArray(product.current_price)
              ? product.current_price[0]?.NGN?.[0]
              : product.current_price;
            return (
              <div
                key={product.id}
                className="flex bg-[#D9D9D9] md:flex-row flex-col items-center p-4 border"
              >
                <img
                  src={`${img_base_url}${product.photos[0]?.url}`}
                  alt={product.name}
                  className="w-64 h-64 object-contain"
                />
                <div className="flex flex-col w-full px-3">
                  <div className="flex w-full justify-between">
                    <h3 className="text-lg py-3 font-bold">{product.name}</h3>
                    <p className="text-lg py-3 font-bold">
                      ${price || "Price not available"}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <p className="text-black font-bold py-3">
                      Color: {product.color}
                    </p>
                    <p className="text-black font-bold py-3">
                      Size: {product.size}
                    </p>

                    <div className="text-black font-bold py-3 flex items-center">
                      <span>Quantity:</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="ml-2 px-2 py-1 bg-gray-300 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-black border-b-2 pb-5 mb-10 border-black font-semibold py-3">
                      Delivered within 3–5 working days
                    </p>
                    <div className="flex mt-4 space-x-4">
                      <button className="text-blue-500 flex items-center">
                        <HeartIcon className="h-5 w-5 mr-1" />
                        <p className="hidden sm:block">Move to Wishlist</p>
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-500 flex items-center"
                      >
                        <TrashIcon className="h-5 w-5 mr-1" />
                        <p className="hidden sm:block">Remove</p>
                      </button>
                    </div>
                    <div className="flex-shrink-0"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
          <h2 className="font-bold text-xl mb-4">Order Summary</h2>
          <div className="bg-[#D9D9D9]">
            <div className="space-y-2 text-black font-bold">
              <div className="flex border-b border-black p-5 justify-between">
                <span>Items Subtotal:</span>
                <span>${getTotal()}</span>
              </div>
              <div className="flex border-b border-black p-5 justify-between">
                <span>Tax:</span>
                <span>${(getTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex border-b border-black p-5 justify-between">
                <span>Total:</span>
                <span>${(getTotal() * 1.1).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/cart/checkout", window.scroll(0, 0))}
              className="w-full mt-6 py-4 bg-[#2D16BB] text-white rounded"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
