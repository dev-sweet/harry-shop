import DashboardProduct from "./DashboardProduct";
import { useEffect, useState } from "react";

const DashboardAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://harry-shop-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="text-center">
      <h2 className="text-3xl my-5 text-center font-bold">
        All Products: {products.length}
      </h2>
      {products.map((product) => (
        <DashboardProduct key={product._id} product={product} />
      ))}
    </div>
  );
};

export default DashboardAllProducts;
