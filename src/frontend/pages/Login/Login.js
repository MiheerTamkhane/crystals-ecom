import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";
import axios from "axios";
import "./Form.css";
const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { auth, setAuth } = useAuth();
  const loginHandler = async ({ email, password }, e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("authToken", response?.data?.encodedToken);
      localStorage.setItem("user", JSON.stringify(response?.data?.foundUser));
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: response.data.foundUser,
        status: true,
        authToken: response.data.encodedToken,
      }));
      navigate("/products");
      toast.success("Logged in successfully!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="form-container">
      <form
        className="ct-form"
        onSubmit={(e) => {
          loginHandler(userLogin, e);
        }}
      >
        <h2>Login</h2>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
        </div>

        <div className="ct-checkbox-div">
          <label htmlFor="checkbox" className="login-check-input">
            <input type="checkbox" id="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="####">Forgot your password?</a>
        </div>
        <button className="ct-form-btn  form-btn" type="submit">
          LOGIN
        </button>
        <button
          className="ct-btn ct-gray login-guest"
          type="submit"
          onClick={(e) => {
            loginHandler(
              {
                email: "miheer@gmail.com",
                password: "miheer123",
              },
              e
            );
          }}
        >
          LOGIN AS GUEST
        </button>
        {!auth.status && (
          <NavLink to="/signup" className="form-link">
            Create new account
            <span className="material-icons">chevron_right</span>
          </NavLink>
        )}
      </form>
    </main>
  );
};

export { Login };
