import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    shortDetails: "",
    watchType: "",
    img: "",
    price: "",
    discount: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = confirm("Do you want to add this product?");

    if (isConfirmed) {
      fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast("Your product added successfully!");
            setProduct({
              name: "",
              brand: "",
              shortDetails: "",
              watchType: "",
              img: "",
              price: "",
              discount: "",
              details: "",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setProduct((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl max-h-screen my-5 text-center font-bold">
        Add a Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Short Details:</label>
          <textarea
            name="shortDetails"
            value={product.shortDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Discount:</label>
          <input
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Watch Type:</label>
          <input
            type="text"
            name="watchType"
            value={product.watchType}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Details:</label>
          <textarea
            name="details"
            value={product.details}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          ADD
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddProduct;
