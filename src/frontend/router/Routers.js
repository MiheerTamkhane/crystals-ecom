import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Wishlist,
  DemoCart,
  ProductsPage,
  SignUp,
  Login,
} from "../index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/DemoCart" element={<DemoCart />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export { Routers };
