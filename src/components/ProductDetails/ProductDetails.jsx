// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  console.log(product);
  const { name, inStock, price, img, details, discount, category } = product;
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://harry-shop-server.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="h-screen section-container flex flex-col items-center">
      <h1 className="text-center text-4xl font-semibold py-5">Details</h1>
      <div className="mx-auto bg-white shadow-md overflow-hidden">
        <div className="md:grid grid-cols-12">
          <div className="col-span-6">
            <img className="w-full object-cover" src={img} alt={name} />
          </div>
          <div className="col-span-6 p-8 flex items-center">
            <div className="">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <div className="badge badge-secondary">
                  {inStock} products in stock
                </div>
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                {name}
              </h1>
              <div className="mt-4">
                <span className="text-xl font-bold text-gray-900">
                  ${price}
                </span>
                {discount && (
                  <span className="ml-2 text-sm text-red-500">
                    ({discount}% OFF)
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  Details:
                </h2>
                <p className="text-gray-600">{details}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  Category:
                </h2>
                {category}
              </div>
              <div className="pt-10">
                <Link
                  className="btn bg-[#f50963]  text-gray-100 hover:bg-[#ca004d] hover;text-gray-50 btn-outline border-0 px-10"
                  to="/"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
