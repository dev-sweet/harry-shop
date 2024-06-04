import DashboardProduct from "./DashboardProduct";
import { useEffect, useState } from "react";

const DashboardAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="text-center">
      <h2 className="text-5xl my-5 text-center font-bold">All Products</h2>

      {products.length > 0 && (
        <h2 className="text-2xl my-5 text-center font-bold">
          Your total products : {products.length}
        </h2>
      )}
      {products.map((product) => (
        <DashboardProduct key={product._id} product={product} />
      ))}
    </div>
  );
};

export default DashboardAllProducts;
