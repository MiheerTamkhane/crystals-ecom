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
            <h1>Crystals</h1>
          </NavLink>
          <small>Crystals © 2013 - 2022</small>
          <div className="social-div">
            <img
              src="/assets/svg/github.svg"
              alt="github"
              className="social-links"
            />
            <img
              src="/assets/svg/linkedin.svg"
              alt="linkedin"
              className="social-links"
            />
            <img
              src="/assets/svg/twitter.svg"
              alt="twitter"
              className="social-links"
            />
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <p>SEARCH</p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>REFUND & RETURN</p>
          <p></p>
        </div>
        <div className="footer-links">
          <h3>SITEMAP</h3>
          <p>HOME</p>
          <p>PRODUCTS</p>
          <p>CART</p>
        </div>
        <div className="footer-links">
          <h3>DEVELOPER</h3>
          <p>CODE BY MIHEER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
