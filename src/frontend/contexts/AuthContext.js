import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const signinHandler = async (e, user) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      setAuth(true);
      navigate("/productsPage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signinHandler }}>
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
