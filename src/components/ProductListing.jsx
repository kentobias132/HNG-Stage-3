import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";

const ProductListing = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/products?organization_id=6ee49d8f96e64d368c9ca1c7e09a6eb5&reverse_sort=false&page=${currentPage}&size=${pageSize}&Appid=${
            import.meta.env.VITE_APPID
          }&Apikey=${import.meta.env.VITE_APIKEY}`
        );
        const data = await response.json();
        setProducts((prevProducts) => ({
          ...prevProducts,
          [currentPage]: data.items,
        }));
        console.log(data.items);

        setTotalPages(Math.ceil(data.total / pageSize));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [currentPage]);

  if (loading) {
    return (
      <div className="text-3xl h-dvh text-red-500 text-center flex justify-center items-center">
        Loading...
      </div>
    );
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex font-semibold py-20 p-6">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="py-7">
          <span className="flex items-center">
            <HomeIcon className="h-6 w-6" />
            <button className="hover:text-blue-800 ml-1">Mainpage</button>
            <ChevronRightIcon className="h-4 w-4" />
            <button className="hover:text-blue-800 text-gray-500">
              Category
            </button>
            <ChevronRightIcon className="h-4 w-4" />
            <button className="hover:text-blue-800 text-gray-500">Dress</button>
          </span>
        </div>

        <div>
          <h1 className="font-bold text-2xl p-4">Dress</h1>
          <div className="flex px-4 flex-wrap">
            <button className="hover:bg-[#2D16BB] hover:bg-opacity-50 bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              Midi
            </button>
            <button className="hover:bg-[#2D16BB] hover:bg-opacity-50 bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              Black
            </button>
            <button className="hover:bg-[#2D16BB] hover:bg-opacity-50 bg-gray-300 text-gray-500 py-0.5 px-3.5 mr-2 mb-2 rounded-md">
              XXL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-4 justify-center items-center">
          {products[currentPage]?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              pageNum={currentPage}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mr-2 px-4 py-2 border rounded ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`ml-2 px-4 py-2 border rounded ${
              currentPage === totalPages ? "cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
