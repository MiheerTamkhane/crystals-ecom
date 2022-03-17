import React from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";
import { useNavContext } from "../../contexts/NavContext/NavContext";
function Heading() {
  const { isNav } = useNavContext();
  return (
    <div>
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

export default Heading;
