import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavContext } from "../../contexts/NavContext/NavContext";
function Navbar() {
  const { setIsNav } = useNavContext();
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <NavLink to="/" className="logo">
          <img src="/assets/images/Crystals.png" alt="logo" />
          <h1>Crystals</h1>
        </NavLink>
      </div>
      <div className="ct-right-nav">
        <div className="hamburger nav-icon basic-badge">
          <span className="material-icons" onClick={() => setIsNav(true)}>
            menu
          </span>
        </div>
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
              {/* <img src="/assets/svg/cart.svg" alt="cart" /> */}
              <span className="material-icons">shopping_bag</span>
              <small className="badge-pop badge">7</small>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              {/* <img src="/assets/svg/user.svg" alt="account" /> */}
              <span className="material-icons">person</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
