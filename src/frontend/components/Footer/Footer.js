import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="ct-nav-logo">
          <NavLink to="/" className="logo">
            <img src="/assets/images/Crystals.png" alt="" />
            <h1>CrystalKart</h1>
          </NavLink>
          <small>CrystalKart © 2013 - 2022</small>
          <div className="social-div">
            <a href="https://github.com/MiheerTamkhane">
              <img
                src="/assets/svg/github.svg"
                alt="github"
                className="social-links"
              />
            </a>
            <a href="https://www.linkedin.com/in/miheer-tamkhane-19417b19a/">
              <img
                src="/assets/svg/linkedin.svg"
                alt="linkedin"
                className="social-links"
              />
            </a>
            <a href="https://twitter.com/MiheerTamkhane">
              <img
                src="/assets/svg/twitter.svg"
                alt="twitter"
                className="social-links"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <h3>TO MORE INFO</h3>
          <p>SEARCH</p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>REFUND & RETURN</p>
          <p>PRIVACY</p>
        </div>
        <div className="footer-links">
          <h3>SITEMAP</h3>
          <NavLink to="/Home" className="footer-link">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/productspage" className="footer-link">
            <p>PRODUCTS</p>
          </NavLink>
        </div>
        <div className="footer-links">
          <h3>DEVELOPER</h3>
          <p>CODE BY MIHEER</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
