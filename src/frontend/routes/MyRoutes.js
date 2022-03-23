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
import { useAuth } from "../contexts/contextExport";
const MyRoutes = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      {/*👇 passing the SignUp and Login page to user only if he/she is not authorised 
      else unmounting or not showing it to use  */}
      {!auth.status && (
        <>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </>
      )}

      {/*👇 Protected routes for Cart and Wishlist components, only show when user is authorised */}
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
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};

export { MyRoutes };
