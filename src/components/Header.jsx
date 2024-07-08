import React from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    // <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <Link to={"/"}>Lammie</Link>
      </div>
      <input
        type="text"
        placeholder="🔍 Search among 1000+ products"
        className="hidden sm:block border p-2 rounded-md w-1/3 bg-[#D9D9D9]"
      />
      <div className="flex items-center space-x-4 font-bold">
        <span className="font-bold hidden sm:block">ENG</span>

        <button className="bg-[#2D16BB] flex items-center bg-opacity-50 px-2.5 py-1.5 rounded-md text-[#2D16BB]">
          <span className="mr-3 hidden sm:block">Wishlist</span>
          <HeartIcon className="h-6 w-6" />
        </button>
        <Link to="/cart" className="relative">
          <button className="bg-[#2D16BB] flex items-center bg-opacity-50 px-2.5 py-1.5 rounded-md text-[#2D16BB]">
            <span className="mr-3">Cart</span>
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full px-2 text-xs">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="flex items-center">
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
