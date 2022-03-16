import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoCart from "./frontend/routes/Cart/DemoCart";
import Wishlist from "./frontend/routes/Wishlist/Wishlist";
import Footer from "./frontend/components/Footer/Footer";
import Home from "./frontend/routes/Home/Home";
import Navbar from "./frontend/components/Navbar/Navbar";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes/Wishlist/Wishlist" element={<Wishlist />} />
        <Route path="/routes/Cart/DemoCart" element={<DemoCart />} />
        <Route path="/routes/Home/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
