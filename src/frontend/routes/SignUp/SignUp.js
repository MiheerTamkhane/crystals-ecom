import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="form-container">
      <form className="ct-form">
        <h2>Sign up</h2>
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
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Confirm Password..."
            required
          />
        </div>
        <div className="ct-checkbox-div">
          <input type="checkbox" id="checkbox" required />
          <label for="checkbox">I accept all Terms & Conditions.</label>
        </div>

        <button className="ct-form-btn ct-violet-btn" type="submit">
          CREATE NEW ACCOUNT
        </button>
        <NavLink to="/routes/Login/Login" className="login-link">
          Already have an account
          <span className="material-icons">chevron_right</span>
        </NavLink>
      </form>
    </main>
  );
};

export { SignUp };
