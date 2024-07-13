import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/outline";
const img_base_url = "https://api.timbu.cloud/images/";

const CheckoutPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.current_price * item.quantity,
    0
  );

  return (
    <div className="px-4 py-20 sm:pt-24 sm:p-8 bg-[#D9D9D9]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
        <div className="col-span-2 p-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`${img_base_url}${item.photos[0].url}`}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h2 className="hidden sm:block font-semibold">{item.name}</h2>
                  <div className="hidden sm:block">Size: {item.size}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  className="border p-2 rounded"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <div>${item.current_price * item.quantity}</div>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <TrashIcon className="h-6 w-6 text-red-500" />
                </button>
              </div>
            </div>
          ))}

          <div className="block py-3 sm:flex sm:flex-row-reverse justify-between">
            <div className="flex justify-end mt-4">
              <div>
                <div className="text-lg py-1 font-semibold">
                  Sub Total:{" "}
                  <span className="ml-10 text-left">${totalPrice}</span>
                </div>
                <div className="text-lg flex justify-between py-1 font-semibold">
                  Shipping Fee: <span>Free</span>
                </div>
                <div className="text-xl pt-3 flex justify-between border-t border-black mt-5 font-bold">
                  <p>Total:</p> <span className="">${totalPrice}</span>
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="text-black py-8 sm:py-0 flex items-center font-bold text-lg mt-auto"
            >
              <ChevronLeftIcon className="h-4 w-4 text-blue-800" />
              <p>Continue Shopping</p>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payment Info</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Payment Method</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    className="mr-2"
                  />
                  Paypal
                </label>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Name on Card</label>
              <input type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Card Number</label>
              <input type="text" className="border p-2 rounded w-full" />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block font-semibold mb-1">
                  Expiration Date
                </label>
                <input type="text" className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block font-semibold mb-1">CVV</label>
                <input type="text" className=" mb-8 p-2 rounded w-full" />
              </div>
            </div>
            <button
              // type="submit"
              onClick={() =>
                navigate("/cart/checkout/success", window.scroll(0, 0))
              }
              className="w-full bg-[#2D16BB]  text-white p-4 rounded"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
