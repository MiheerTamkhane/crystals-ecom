import React from "react";
import { Route, Routes } from "react-router-dom";
import { DemoCart } from "./frontend/index";
import { Wishlist } from "./frontend/index";
import { Footer } from "./frontend/index";
import { Home } from "./frontend/index";
import { Header } from "./frontend/index";
import { ProductsPage } from "./frontend/index";
import { SignUp } from "./frontend/index";
import { Login } from "./frontend/index";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes/Wishlist/Wishlist" element={<Wishlist />} />
        <Route path="/routes/Cart/DemoCart" element={<DemoCart />} />
        <Route
          path="/routes/ProductsPage/ProductsPage"
          element={<ProductsPage />}
        />
        <Route path="/routes/Wishlist/Wishlist" element={<Wishlist />} />
        <Route path="/routes/SignUp/SignUp" element={<SignUp />} />
        <Route path="/routes/Login/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
