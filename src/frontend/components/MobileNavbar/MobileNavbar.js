import React from "react";
import { NavLink } from "react-router-dom";
import {
  useFilter,
  useNavContext,
  useAuth,
} from "../../contexts/contextExport";
import "./MobileNavbar.css";
function MobileNavbar() {
  const { isNav, setIsNav, logoutHandler } = useNavContext();
  const { setIsMobileFilter } = useFilter();
  const { auth } = useAuth();
  return (
    <div
      className={isNav ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}
    >
      <div className="navbar-head">
        <NavLink
          to="/"
          className="mobile-nav-link-heading"
          onClick={() => setIsNav(false)}
        >
          <h1>CrystalKart</h1>
        </NavLink>
        <span
          className="material-icons"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          close
        </span>
      </div>
      <ul className="navbar-body">
        <NavLink
          to="/productspage"
          className="mobile-nav-link"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          <span>Products</span>
          <span className="material-icons">navigate_next</span>
        </NavLink>
        <NavLink
          to="/cart"
          className="mobile-nav-link"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          <span>Cart</span>
          <span className="material-icons">navigate_next</span>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="mobile-nav-link"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          <span>Wishlist</span>
          <span className="material-icons">navigate_next</span>
        </NavLink>
        {!auth.status ? (
          <>
            <NavLink
              to="/signup"
              className="mobile-nav-link"
              onClick={() => {
                setIsNav(false);
                setIsMobileFilter(false);
              }}
            >
              <span>Sign-up</span>
              <span className="material-icons">navigate_next</span>
            </NavLink>
            <NavLink
              to="/Login"
              className="mobile-nav-link"
              onClick={() => {
                setIsNav(false);
                setIsMobileFilter(false);
              }}
            >
              <span>Login</span>
              <span className="material-icons">navigate_next</span>
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className="mobile-nav-link"
            onClick={() => {
              setIsNav(false);
              setIsMobileFilter(false);
              logoutHandler();
            }}
          >
            <span>Logout</span>
            <span className="material-icons">navigate_next</span>
          </NavLink>
        )}
      </ul>
    </div>
  );
}

export { MobileNavbar };
