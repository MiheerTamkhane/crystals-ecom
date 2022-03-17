import React from "react";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import "./MobileNavbar.css";
function MobileNavbar() {
  const { isNav, setIsNav } = useNavContext();
  return (
    <div
      className={isNav ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}
    >
      <div className="navbar-head">
        <h1>Crystals</h1>
        <span className="material-icons" onClick={() => setIsNav(false)}>
          close
        </span>
      </div>
      <ul className="navbar-body">
        <li>
          <span> Porducts</span>
          <span className="material-icons">navigate_next</span>
        </li>
        <li>
          <span> Cart</span>
          <span className="material-icons">navigate_next</span>
        </li>
        <li>
          <span> Login</span>
          <span className="material-icons">navigate_next</span>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
