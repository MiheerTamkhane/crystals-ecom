import React from "react";
import { NavLink } from "react-router-dom";
import {
  useFilter,
  useNavContext,
  useAuth,
} from "../../contexts/contextExport";
import "./MobileNavbar.css";
function MobileNavbar() {
  const { isNav, setIsNav } = useNavContext();
  const { setIsMobileFilter } = useFilter();
  const { auth, setAuth } = useAuth();
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
          <h1>Crystals</h1>
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
          to="/ProductsPage"
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
          to="/Cart"
          className="mobile-nav-link"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          <span>Cart</span>
          <span className="material-icons">navigate_next</span>
        </NavLink>
        {!auth ? (
          <>
            <NavLink
              to="/SignUp"
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
              to="/"
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
            to="/"
            className="mobile-nav-link"
            onClick={() => {
              setIsNav(false);
              setIsMobileFilter(false);
              setAuth((prevUser) => ({ ...prevUser, status: false }));
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
