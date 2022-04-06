import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/contextExport";
import axios from "axios";
const SignUp = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const signupHandler = async ({ firstName, lastName, email, password }) => {
    try {
      const request = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      localStorage.setItem("authToken", request.data.encodedToken);
      localStorage.setItem("user", request.data.createdUser.firstName);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: request.data.createdUser.firstName,
        status: true,
        authToken: request.data.encodedToken,
      }));
      navigate("/productspage");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="form-container">
      <form
        className="ct-form"
        onSubmit={(e) => {
          e.preventDefault();
          signupHandler(userSignup);
        }}
      >
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

        <NavLink to="/" className="form-link">
          Already have an account
          <span className="material-icons">chevron_right</span>
        </NavLink>
      </form>
    </main>
  );
};

export { SignUp };
