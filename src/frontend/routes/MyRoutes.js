import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Wishlist, Cart, ProductsPage, SignUp, Login } from "../index";
import Mockman from "mockman-js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { useAuth } from "../contexts/contextExport";
const MyRoutes = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productspage" element={<ProductsPage />} />
      {/*👇 passing the SignUp and Login page to user only if he/she is not authorised 
      else unmounting or not showing it to use  */}
      {!auth.status && (
        <>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      {/*👇 Protected routes for Cart and Wishlist components, only show when user is authorised */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
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
