import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Quick links</h3>
        <ul>
          <li>Search</li>
          <li>About Us</li>
          <li>Shipping</li>
          <li>Refunds & Returns</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-right">
        <h2>Contact Us</h2>
        <p>1077 Regents Park Nasik Road, Nasik</p>
        <p>+91173314</p>
        <p>ghefukat@crystals.com</p>
      </div>
    </div>
  );
}

export default Footer;
