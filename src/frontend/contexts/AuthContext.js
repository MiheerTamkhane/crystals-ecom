import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const loginHandler = async (e, { email, password }) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      setAuth(true);
      navigate("/productsPage");
    } catch (err) {
      console.error(err);
    }
  };
  const signupHandler = async (e, { firstName, lastName, email, password }) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      setAuth(true);
      navigate("/productsPage");
    } catch (err) {
      console.error(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    setAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, loginHandler, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { useAuth, AuthProvider };
