import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <main className="hero">
        <div className="hero-container">
          <h1>CRYSTALS</h1>
          <p>Curated Collections / Ethically Conscious</p>
          <button className="ct-btn  main-cta">
            <NavLink to="/" className="banner-link">
              SHOP HERE
            </NavLink>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Banner;
