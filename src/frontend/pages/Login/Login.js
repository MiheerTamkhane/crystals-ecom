import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";

import "./Form.css";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { loginHandler } = useAuth();
  return (
    <main className="form-container">
      <form className="ct-form" onSubmit={(e) => loginHandler(e, userLogin)}>
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
          onClick={(e) =>
            loginHandler(e, {
              email: "johndoe@gmail.com",
              password: "johnDoe123",
            })
          }
        >
          LOGIN AS GUEST
        </button>
        <NavLink to="/SignUp" className="form-link">
          Create new account
          <span className="material-icons">chevron_right</span>
        </NavLink>
      </form>
    </main>
  );
};

export { Login };
