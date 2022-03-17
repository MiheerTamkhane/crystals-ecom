import React from "react";
import { Route, Routes } from "react-router-dom";
import { DemoCart } from "./frontend";
import { Wishlist } from "./frontend";
import { Footer } from "./frontend";
import { Home } from "./frontend";
import { Header } from "./frontend";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes/Wishlist/Wishlist" element={<Wishlist />} />
        <Route path="/routes/Cart/DemoCart" element={<DemoCart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
