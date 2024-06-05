/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAuth from "../../hooks/hooks";
import { FacebookAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = useAuth();

  const loginWithGooglePopUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const loginWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  onAuthStateChanged(auth, (user) => {
    setUserInfo(user);
    setIsLoading(false);
  });

  return (
    <AuthContext.Provider
      value={{
        loginWithGooglePopUp,
        signUpWithEmailAndPassword,
        loginWithEmailAndPass,
        loginWithFacebook,
        logOut,
        isLoading,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
