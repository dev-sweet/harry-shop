import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = () => {
  const product = {
    name: "ViewSonic Professional Monitor",
    category: "Computers Monitor & Laptop",
    price: 281.06,
    img: "https://i.ibb.co/ZT9XtYT/watch1.jpg",
    tags: ["ViewSonic", "Monitor", "Computer"],
    discount: 6,
    inStock: 22,
  };
  const { name, price, img, _id } = product;
  return (
    <div className="card w-full shadow-xl border-md border-red-100">
      <figure>
        <img src={img} alt="name" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">${price}</p>
        <div className="justify-center">
          <Link to={`/products/${_id}`} className="btn btn-outline mt-3 w-full">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
