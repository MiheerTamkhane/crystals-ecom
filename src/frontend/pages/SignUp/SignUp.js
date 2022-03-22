import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/contextExport";

const SignUp = () => {
  const { signupHandler } = useAuth();
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <main className="form-container">
      <form className="ct-form" onSubmit={(e) => signupHandler(e, userSignup)}>
        <h2>Sign up</h2>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="First Name..."
            value={userSignup.firstName}
            onChange={(e) =>
              setUserSignup({ ...userSignup, firstName: e.target.value })
            }
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="Last Name..."
            value={userSignup.lastName}
            onChange={(e) =>
              setUserSignup({ ...userSignup, lastName: e.target.value })
            }
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            value={userSignup.email}
            onChange={(e) =>
              setUserSignup({ ...userSignup, email: e.target.value })
            }
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            value={userSignup.password}
            onChange={(e) =>
              setUserSignup({ ...userSignup, password: e.target.value })
            }
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
