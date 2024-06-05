import { ToastContainer, toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const { userInfo, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast("Logout Success!");
    });
  };
  useEffect(() => {
    fetch(`http://localhost:3000/users/${userInfo?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center">Profile</h2>

      <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-end items-center">
          <Link to={`/dashboard/profile/edit`}>
            <FiEdit className="text-[#f50963] text-3xl" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 p-6">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={user.img}
            alt={`${user.name} profile`}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-4">
            <h3 className="text-gray-600 text-sm">Member since</h3>
            <p className="text-gray-800">{user.creationTime}</p>
          </div>
          <div className="text-center py-5">
            <button
              className="btn bg-[#f50963] text-white text-center mx-auto"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
