import React from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Lammie</div>
      <input
        type="text"
        placeholder="🔍 Search among 1000+ products"
        className="border p-2 rounded-md w-1/3 bg-[#D9D9D9]"
      />
      <div className="flex items-center space-x-4 font-bold">
        <span className="font-bold">ENG</span>

        <button className="bg-[#2D16BB] flex items-center bg-opacity-50 px-2.5 py-1.5 rounded-md text-[#2D16BB]">
          <span className="mr-3">Wishlist</span>
          <HeartIcon className="h-6 w-6" />
        </button>
        <button className="bg-[#2D16BB] flex items-center bg-opacity-50 px-2.5 py-1.5 rounded-md text-[#2D16BB]">
          <span className="mr-3">Cart ({cartCount})</span>
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        {/* <Link to="/cart"></Link> */}
        <button className="flex items-center">
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
