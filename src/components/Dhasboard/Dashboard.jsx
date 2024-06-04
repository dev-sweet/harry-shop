import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const { userInfo, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast("Logout Success!");
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-center">Dashboard</h2>
      <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4 p-6">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={userInfo.photoURL}
            alt={`${userInfo.displayName} profile`}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {userInfo.displayName}
            </h2>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-4">
            <h3 className="text-gray-600 text-sm">Member since</h3>
            <p className="text-gray-800">{userInfo.creationTime}</p>
            {console.log(userInfo)}
          </div>
          <div className="text-center py-5">
            <button
              className="btn btn-red-100 text-center mx-auto"
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
