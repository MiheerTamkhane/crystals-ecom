import React from "react";
import { MobileNavbar, Navbar } from "../componentsExport";

function Header() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export { Header };
