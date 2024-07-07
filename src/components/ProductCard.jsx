import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="font-bold mt-2">{product.name}</h3>
      <Link to={"/cart"}>
        <p className="text-gray-500">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart({ ...product, quantity: 1 })}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
