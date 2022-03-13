import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <Link to="/" className="logo">
          <h1>Navbar</h1>
        </Link>
      </div>
      {/* <div class="ct-input-div input">
        <input
          type="search"
          id="ct-input"
          class="ct-input"
          placeholder="Search..."
        />
      </div> */}
      <div className="ct-right-nav">
        <div className="ct-nav-user">
          <div className="ct-nav-icons ">
            <div className="basic-badge nav-icon">
              <Link to="./components/DemoProds">
                <img src="/assets/svg/wishlist.svg" alt="" />
                <span className="badge-pop badge">7</span>
              </Link>
            </div>
            <div className="basic-badge nav-icon">
              <Link to="./components/DemoCart">
                <img src="/assets/svg/cart.svg" alt="" />
                <span className="badge-pop badge">7</span>
              </Link>
            </div>
            <div className="basic-badge nav-icon">
              <Link to="./components/DemoProds">
                <img src="/assets/svg/user.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
