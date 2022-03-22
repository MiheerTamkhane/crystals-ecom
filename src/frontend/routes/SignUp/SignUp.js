import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="form-container">
      <form className="ct-form">
        <h2>Sign up</h2>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="First Name..."
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="Last Name..."
            required
          />
        </div>
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
          <input type="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">I accept all Terms & Conditions.</label>
        </div>

        <button className="ct-form-btn form-btn" type="submit">
          CREATE NEW ACCOUNT
        </button>
        <NavLink to="/Login" className="form-link">
          Already have an account
          <span className="material-icons">chevron_right</span>
        </NavLink>
      </form>
    </main>
  );
};

export { SignUp };
