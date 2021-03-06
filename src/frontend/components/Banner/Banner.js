import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <main className="hero">
        <div className="hero-container">
          <h1>CRYSTALKART</h1>
          <p>Curated Collections / Ethically Conscious</p>
          <button className="ct-btn  main-cta">
            <Link to="/products" className="banner-link">
              SHOP HERE
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export { Banner };
