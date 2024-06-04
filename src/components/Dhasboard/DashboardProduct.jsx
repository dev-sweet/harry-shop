import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardProduct = ({ product }) => {
  const { _id, name, img, shortDetails, price, discount } = product;
  const handleDelete = (id) => {
    const userConfirmed = confirm("Do you want to delete this product?");
    if (userConfirmed) {
      fetch(`http://localhost:3000/products/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            toast.success("Your product deleted successfully!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-2/5 my-4 mx-auto bg-white shadow-md rounded-lg overflow-hidden flex">
        <img className="w-1/3 h-auto object-cover" src={img} alt={name} />
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <div className="font-bold text-2xl mb-2">{name}</div>
            <p className="text-gray-700 text-base mb-4">{shortDetails}</p>
            <div className="flex items-center">
              <span className="text-gray-900 font-bold text-xl">${price}</span>
              {discount && (
                <span className="text-red-500 text-sm ml-2">
                  ({discount}% off)
                </span>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-4">
            <Link
              to={`/products/${_id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View
            </Link>
            <Link
              to={`edit/${_id}`}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
