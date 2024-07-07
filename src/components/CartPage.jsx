import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { TrashIcon, HeartIcon, ArrowLeftIcon } from "@heroicons/react/outline";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {/* navigate back  */}
      <button
        onClick={() => navigate(-1)}
        className="p-2 bg-[#2D16BB] flex items-center bg-opacity-50 text-white rounded"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Go back
      </button>
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
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
                <p>Price: ${product.price}</p>
                <div className="flex items-center">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, Number(e.target.value))
                    }
                    className="border p-1 w-16"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 flex items-center"
                >
                  <TrashIcon className="h-5 w-5 mr-2" />
                  Remove
                </button>
                <button className="text-blue-500 flex items-center">
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Move to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 p-4 border rounded">
          <h2 className="font-bold mb-4">Order Summary</h2>
          <p>Items Subtotal: ${getTotal()}</p>
          <p>Tax: ${(getTotal() * 0.1).toFixed(2)}</p>
          <p>Total: ${(getTotal() * 1.1).toFixed(2)}</p>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
