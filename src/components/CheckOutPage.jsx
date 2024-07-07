import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCreditCard,
//   faPaypal,
//   faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex justify-between">
        <div className="w-2/3">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-bold">{product.name}</h3>
                <p>Size: {product.size}</p>
                <div className="flex items-center">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={product.quantity}
                    readOnly
                    className="border p-1 w-16"
                  />
                </div>
                <p>Total Price: ${product.price * product.quantity}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => navigate("/")}
            className="mt-4 p-2 bg-gray-500 text-white rounded flex items-center"
          >
            {/* <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> */}
            Continue Shopping
          </button>
        </div>
        <div className="w-1/3 p-4 border rounded">
          <h2 className="font-bold mb-4">Payment Info</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="payment-method" className="block mb-1">
                Payment Method
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  value="Credit Card"
                />
                <label htmlFor="credit-card" className="ml-2 flex items-center">
                  {/* <FontAwesomeIcon icon={faCreditCard} className="mr-2" />{" "} */}
                  Credit Card
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  value="Paypal"
                />
                <label htmlFor="paypal" className="ml-2 flex items-center">
                  {/* <FontAwesomeIcon icon={faPaypal} className="mr-2" /> Paypal */}
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name on Card
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="border p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
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
