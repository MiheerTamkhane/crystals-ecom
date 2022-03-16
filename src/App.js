import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoCart from "./components/DemoCart";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer/Footer";
import Home from "./frontend/routes/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./frontend/routes/ProductsPage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/Wishlist" element={<Wishlist />} />
        <Route path="/components/DemoCart" element={<DemoCart />} />
        <Route path="/routes/Products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
