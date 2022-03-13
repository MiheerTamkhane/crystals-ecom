import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoCart from "./components/DemoCart";
import DemoProds from "./components/DemoProds";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/DemoProds" element={<DemoProds />} />
        <Route path="/components/DemoCart" element={<DemoCart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
