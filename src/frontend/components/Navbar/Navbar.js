import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <NavLink to="/" className="logo">
          <img src="/assets/images/Crystals.png" alt="" />
          <h1>Crystals</h1>
        </NavLink>
      </div>
      <div className="ct-right-nav">
        <div className="ct-nav-user">
          <div className="ct-nav-icons ">
            <NavLink
              to="./routes/Cart/DemoCart"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <img src="/assets/svg/cart.svg" alt="cart" />
              {/* <span className="badge-pop badge">7</span> */}
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <img src="/assets/svg/user.svg" alt="account" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
