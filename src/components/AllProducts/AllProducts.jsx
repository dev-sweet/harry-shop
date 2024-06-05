import { useEffect, useState } from "react";
import SingleProduct from "../Home/SingleProduct/SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://harry-shop-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="section-container md:mt-16">
        <div className="py-8">
          <h1 className="text-4xl font-bold">All Products</h1>
          <div className="py-10 grid md:grid-cols-4 gap-5">
            {products.map((product) => (
              <SingleProduct key={product.img} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
