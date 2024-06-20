import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/logo-black.de19b08e.svg";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = ({ handleSearch, handleBlur, searchText }) => {
  const { userInfo, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const navItems = [
    { id: "nav-item1", menu: "Home", path: "/" },
    { id: "nav-item2", menu: "Shop", path: "/products" },
    { id: "nav-item3", menu: "About", path: "/about" },
    { id: "nav-item4", menu: "Contacts", path: "/contacts" },
    { id: "nav-item5", menu: "Dashboard", path: "/dashboard" },
  ];

  const handleLogout = () => {
    logOut().then(() => {
      toast("Logout Success!");
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 section-container bg-base-100 shadow-sm">
        <div className="navbar m-0 p-0">
          <div className="flex-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems.map((item) => (
                  <li key={item.id + "1"}>
                    <Link to={item.path}>{item.menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <a className="bg-gray-10">
              <img src={logo} className="w-3/4" alt="" />
            </a>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className={pathname === item.path && "active"}
                      to={item.path}
                    >
                      {item.menu}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                onBlur={handleBlur}
                value={searchText}
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <ToastContainer />
            {userInfo?.email ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        userInfo?.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between" to={"/dashboard"}>
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="btn" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
