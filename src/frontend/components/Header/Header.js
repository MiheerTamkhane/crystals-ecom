import React from "react";
import { MobileNavbar, Navbar } from "../index";

function Header() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export { Header };
