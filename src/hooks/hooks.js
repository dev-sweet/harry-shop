import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const useAuth = () => {
  return getAuth(app);
};
export default useAuth;
