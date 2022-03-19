import React from "react";
import { MobileNavbar } from "../index";
import { Navbar } from "../index";
function Header() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export { Header };
