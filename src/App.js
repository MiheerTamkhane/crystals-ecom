import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoCart from "./components/DemoCart";
import DemoProds from "./components/DemoProds";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./routes/ProductsPage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/DemoProds" element={<DemoProds />} />
        <Route path="/components/DemoCart" element={<DemoCart />} />
        <Route path="/routes/Products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
