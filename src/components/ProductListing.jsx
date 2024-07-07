import React from "react";
import products from "../context/productData";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

const ProductListing = () => {
  return (
    <div className="flex flex-1 font-semibold">
      <Sidebar />
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default ProductListing;
