import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoCart from "./frontend/routes/Cart/DemoCart";
import Wishlist from "./frontend/routes/Wishlist/Wishlist";
import Footer from "./frontend/components/Footer/Footer";
import Home from "./frontend/routes/Home/Home";
import Header from "./frontend/components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
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
