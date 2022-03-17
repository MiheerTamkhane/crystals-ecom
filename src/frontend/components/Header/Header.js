import React from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export { Header };
