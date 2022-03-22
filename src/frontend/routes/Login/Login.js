import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";

import "./Form.css";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signinHandler } = useAuth();
  return (
    <main className="form-container">
      <form className="ct-form" onSubmit={() => signinHandler(e, user)}>
        <h2>Login</h2>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
            signinHandler(e, {
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
