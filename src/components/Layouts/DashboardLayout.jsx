import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logout Success!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-base-200 flex flex-col fixed h-full">
        <h1 className="text-3xl font-bold m-5 text-center">DASHBOARD</h1>
        <ul className="menu p-4 w-80 min-h-full text-base-content">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="all-products">All Products</Link>
          </li>
          <li>
            <Link to="add-product">Add Product</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <ToastContainer />
      </div>
      <div className="col-span-10 py-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
