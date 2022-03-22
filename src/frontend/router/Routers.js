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
import Mockman from "mockman-js";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/DemoCart" element={<DemoCart />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};

export { Routers };
