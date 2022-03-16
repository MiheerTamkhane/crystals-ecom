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
          <button className="ct-btn ct-gray main-cta">
            <NavLink to="/" className="banner-link">
              Shop Here
            </NavLink>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Banner;
