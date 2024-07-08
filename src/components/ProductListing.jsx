import React from "react";
import products from "../context/productData";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";

const ProductListing = () => {
  return (
    <div className="flex font-semibold py-20 p-6">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="py-7">
          <span className="flex items-center">
            <HomeIcon className="h-6 w-6" />
            <button  className="hover:text-blue-800 ml-1">Mainpage</button >
            <ChevronRightIcon className="h-4 w-4" />
            <button  className="hover:text-blue-800 text-gray-500">Category</button >
            <ChevronRightIcon className="h-4 w-4" />
            <button  className="hover:text-blue-800 text-gray-500">Dress</button >
          </span>
        </div>

        <div>
          <h1 className="font-bold text-2xl p-4">Dress</h1>
          <div className="flex px-4 flex-wrap">
            <button className=" hover:bg-[#2D16BB] hover:bg-opacity-50% bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              Midi
            </button>
            <button className="bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              Black
            </button>
            <button className="bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              XXL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4 justify-center items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
