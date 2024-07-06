import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Lammie</div>
      <input
        type="text"
        placeholder="Search among 1000+ products"
        className="border p-2 rounded w-1/3"
      />
      <div className="flex items-center space-x-4">
        <span className="font-bold">ENG</span>

        <button className="bg-[#2D16BB] px-3 py-1 rounded-sm text-blue-800 font-semibold">
          <span className="mr-2">Wishlist</span>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <span className="mr-2">Your Cart ({cartCount})</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <div className="text-xl font-bold">Lammie</div>
//       <input
//         type="text"
//         placeholder="Search among 1000+ products"
//         className="border p-2 rounded w-1/3"
//       />
//       <div className="flex items-center space-x-4">
//         <span>ENG</span>
//         <button className="p-2">Wishlist</button>
//         <button className="p-2">Your Cart</button>
//         <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//       </div>
//     </header>
//   );
// };
