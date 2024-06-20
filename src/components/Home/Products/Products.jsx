import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://harry-shop-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="section-container z-0">
      <div className="py-8">
        <h1 className="text-3xl font-bold">Popular Products</h1>
        <div className="py-10 grid md:grid-cols-4 gap-8 overflow-hidden">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-end pt-10">
          <Link
            className="btn bg-[#f50963]  text-gray-100 hover:bg-[#ca004d] hover:text-gray-50 btn-outline border-0 px-10"
            to="/products"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
