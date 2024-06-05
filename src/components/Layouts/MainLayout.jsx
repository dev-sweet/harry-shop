import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import SingleProduct from "../Home/SingleProduct/SingleProduct";
import FilteredProducts from "../FilteredProducts/FilteredProducts";

const MainLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchText(search);
    const result = products.filter((product) => product.name.includes(search));
    setFilteredProducts(result);
  };
  const handleBlur = () => {
    setFilteredProducts([]);
  };
  useEffect(() => {
    fetch("https://harry-shop-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navbar
        handleSearch={handleSearch}
        handleBlur={handleBlur}
        searchText={searchText}
      />
      <div>
        {filteredProducts.length > 0 && (
          <FilteredProducts filteredProducts={filteredProducts} />
        )}
        {!filteredProducts.length && (
          <>
            <Outlet />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
