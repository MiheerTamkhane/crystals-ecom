import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <main className="hero">
        <div className="hero-container">
          <h1>Cristals</h1>
          <p>Curated Collections / Ethically Conscious</p>
          <button className="ct-btn ct-gray main-cta">
            <Link to="/routes/Products" className="banner-link">
              Shop Here
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Banner;
