import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg ">
      <Link
        to={`/product/${product.id}`}
        className="w-full"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
      </Link>
      <h3 className="font-bold mt-2">{product.name}</h3>
      <div className="flex  justify-between">
        <div>
          <p className="text-gray-500">Price</p>
          <p className="text-black font-bold">${product.price}</p>
        </div>

        <button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="mt-2 p-2 bg-[#2D16BB] hover:bg-opacity-50 text-black rounded"
        >
          <ShoppingCartIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
