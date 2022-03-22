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
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/mock" element={<Mockman />} />

      <Route
        path="/DemoCart"
        element={
          <ProtectedRoute>
            <DemoCart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export { MyRoutes };
