import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isLoading, userInfo } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  if (!userInfo?.email) {
    return <Navigate to="/login" />;
  }
  return <>{children} </>;
};

export default PrivateRoute;
