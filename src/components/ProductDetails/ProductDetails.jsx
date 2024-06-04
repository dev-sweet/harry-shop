// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { product } = useLoaderData();
  console.log(product);
  const {
    name,
    brand,
    price,
    img,
    details,
    discount,
    watchType,
    shortDetails,
  } = product;
  return (
    <div className="h-screen px-12">
      <h1 className="text-center text-4xl font-semibold py-5">Details</h1>
      <div className="w-4/5 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="w-100 object-cover" src={img} alt={name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {brand}
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {name}
            </h1>
            <p className="mt-2 text-gray-500">{shortDetails}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-900">${price}</span>
              {discount && (
                <span className="ml-2 text-sm text-red-500">
                  ({discount}% OFF)
                </span>
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">Details:</h2>
              <p className="text-gray-600">{details}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">Type:</h2>
              <p className="text-gray-600">{watchType}</p>
            </div>
            <div>
              <button className="btn btn-primary mt-8 w-1/5">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
