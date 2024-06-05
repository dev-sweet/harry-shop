import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Google__G__logo.svg.png";
import facebook from "../../assets/facebook.png";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginWithGooglePopUp, loginWithEmailAndPass, userInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // handle the form data when something changed
  const handleChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  //   login with email and password
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    loginWithEmailAndPass(user.email, user.password)
      .then(() => {
        if (userInfo?.email) {
          toast("Login Success!");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  //   login with google popup
  const handleLoginWithGoogle = () => {
    loginWithGooglePopUp().then(() => {
      if (userInfo?.email) {
        toast("Login Success!");
        navigate("/");
      }
    });
  };

  return (
    <div className="py-10 my-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl py-5 font-bold text-center">Login</h2>
      <form
        action=""
        onSubmit={handleLoginWithEmail}
        className="md:w-2/5 w-4/5"
      >
        <div className="py-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="py-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="grow"
              placeholder="Password"
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn w-full btn bg-[#f50963]  text-gray-100 hover:bg-[#ca004d] hover;text-gray-50 btn-outline border-0 px-10"
        >
          Login
        </button>
      </form>
      <div className="md:w-2/5 w-4/5">
        <div className="divider mt-4">OR</div>
        <button className="btn w-full" onClick={handleLoginWithGoogle}>
          <img className="w-6" src={google} alt="" />
          Login with Google
        </button>
        <button className="btn w-full  mt-3" onClick={handleLoginWithGoogle}>
          <img className="w-6" src={facebook} alt="" />
          Login with Facebook
        </button>
        <p className="mt-2 text-center">
          Don not have an account?{" "}
          <Link to="/register" className="text-[#f50963] hover:text-[#ca004d]">
            Register Here
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
