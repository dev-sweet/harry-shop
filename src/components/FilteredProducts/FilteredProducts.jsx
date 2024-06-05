import SingleProduct from "../Home/SingleProduct/SingleProduct";

const FilteredProducts = ({ filteredProducts }) => {
  return (
    <div className="section-container">
      <div className="py-8">
        <h1 className="text-3xl font-bold">Search Products</h1>
        <div className="py-10 grid md:grid-cols-4 gap-5 overflow-hidden">
          {filteredProducts?.map((filterProduct) => (
            <SingleProduct key={filterProduct._id} product={filterProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
