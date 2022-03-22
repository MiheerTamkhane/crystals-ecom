import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavContext, useAuth } from "../../contexts/contextExport";
function Navbar() {
  const { setIsNav } = useNavContext();
  const { auth, logoutHandler } = useAuth();
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <NavLink to="/" className="logo">
          <img src="/assets/images/Crystals.png" alt="logo" />
          <h1>Crystals</h1>
        </NavLink>
      </div>
      {/* Search bar will come here  */}
      <div className="ct-right-nav">
        <div className="hamburger nav-icon basic-badge">
          <span className="material-icons" onClick={() => setIsNav(true)}>
            menu
          </span>
        </div>
        <div className="ct-nav-user">
          <div className="ct-nav-icons ">
            <NavLink
              to="/Wishlist"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <span className="material-icons">favorite</span>
              <small className="badge-pop badge">7</small>
            </NavLink>

            <NavLink
              to="/DemoCart"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <span className="material-icons">shopping_bag</span>
              <small className="badge-pop badge">7</small>
            </NavLink>

            {auth ? (
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "basic-badge nav-icon icon-selected"
                    : "basic-badge nav-icon icon"
                }
              >
                <span className="material-icons" onClick={logoutHandler}>
                  logout
                </span>
              </NavLink>
            ) : (
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "basic-badge nav-icon icon-selected"
                    : "basic-badge nav-icon icon"
                }
              >
                <span className="material-icons">login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
