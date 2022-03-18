import React from "react";
import { NavLink } from "react-router-dom";
import { useAccordion } from "../../contexts/AccordionContext/AccordionContext";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import "./MobileNavbar.css";
function MobileNavbar() {
  const { isNav, setIsNav } = useNavContext();
  const { setIsMobileFilter } = useAccordion();
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
          to="/routes/ProductsPage/ProductsPage"
          className="mobile-nav-link"
          onClick={() => {
            setIsNav(false);
            setIsMobileFilter(false);
          }}
        >
          <span>Porducts</span>
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
          <span>Cart</span>
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
      </ul>
    </div>
  );
}

export default MobileNavbar;
