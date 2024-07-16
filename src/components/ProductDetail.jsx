import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const img_base_url = "https://api.timbu.cloud/images/";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Fetch the product directly by ID
        const productResponse = await fetch(
          `/api/products/${id}?organization_id=6ee49d8f96e64d368c9ca1c7e09a6eb5&Appid=${
            import.meta.env.VITE_APPID
          }&Apikey=${import.meta.env.VITE_APIKEY}`
        );
        const productData = await productResponse.json();
        setProduct(productData);
        console.log(productData);

        // Fetch the page to get similar products
        const response = await fetch(
          `/api/products?organization_id=6ee49d8f96e64d368c9ca1c7e09a6eb5&reverse_sort=false&page=1&size=10&Appid=${
            import.meta.env.VITE_APPID
          }&Apikey=${import.meta.env.VITE_APIKEY}`
        );

        const data = await response.json();
        setSimilarProducts(data.items.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-3xl h-dvh text-red-500 text-center flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Safely access the price value
  const price = product.current_price;

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <div className="flex flex-col items-center lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src={`${img_base_url}${product.photos[0].url}`}
            alt={product.name}
            className="w-full h-auto sm:w-96 sm:h-96 rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            {price ? `$${price}` : "Price not available"}
          </p>
          <div className="flex items-center mb-4">
            <span className="mr-2">Color:</span>
            {product.colors?.map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full border-2 border-gray-300 mr-2`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          <div className="mb-4">
            <span className="mr-2">Size:</span>
            {product.sizes?.map((size, index) => (
              <button key={index} className="border px-3 py-1 rounded-md mr-2">
                {size}
              </button>
            ))}
          </div>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="bg-[#2D16BB] text-white px-6 py-2 rounded-md mb-4"
          >
            Add to Cart
          </button>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Product Detail</h2>
            <ul className="list-disc list-inside">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Material</h2>
            <p>Cotton 100%, Polythene 20%</p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Brand</h2>
            <p>Lammie Amaris</p>
          </div>
          <Link to="/" className="mt-4 text-blue-600 underline">
            &larr; Back to catalog
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">You might also like</h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2"
          >
            &lt;
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
          >
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct.id} className="flex-shrink-0 w-60">
                <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  to={`/product/${similarProduct.id}`}
                >
                  <div className="border p-4 rounded-lg">
                    <img
                      src={`${img_base_url}${similarProduct.photos[0].url}`}
                      alt={similarProduct.name}
                      className="w-full h-48 object-contain mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-bold text-center">
                      {similarProduct.name}
                    </h3>
                    <p className="text-gray-500 font-bold text-center">
                      {similarProduct.current_price?.[0]?.NGN?.[0]
                        ? `₦${similarProduct.current_price[0].NGN[0]}`
                        : "Price not available"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full shadow-md p-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
