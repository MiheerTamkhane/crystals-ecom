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
        </div>
      </div>

      <div className="footer-right">
        <div className="quick-links">
          <h2>Quick links</h2>
          <ul>
            <li>Search</li>
            <li>About Us</li>
            <li>Shipping</li>
            <li>Refunds & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>1077 Regents Park Nasik Road, Nasik</p>
          <p>+919733148796</p>
          <p>ghefukat@crystals.com</p>
        </div>
        <div className="contact-us">
          <h2>Developer</h2>
          <p>code By Miheer</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
