import React from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";
const Login = () => {
  return (
    <main className="form-container">
      <form className="ct-form">
        <h2>Login</h2>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
          />
        </div>

        <div className="ct-checkbox-div">
          <label for="checkbox" className="login-check-input">
            <input type="checkbox" id="checkbox" required />
            <span>Remember me</span>
          </label>
          <a href="####">Forgot your password?</a>
        </div>
        <button className="ct-form-btn ct-violet-btn" type="submit">
          LOGIN
        </button>
        <NavLink to="/routes/SignUp/SignUp" className="login-link">
          Create new account
          <span className="material-icons">chevron_right</span>
        </NavLink>
      </form>
    </main>
  );
};

export { Login };
