import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Wishlist,
  Cart,
  ProductsPage,
  SignUp,
  Login,
  SingleProductPage,
  ProfilePage,
} from "../index";
import {
  ProfileCard,
  Addresses,
  Settings,
  UserOrders,
} from "../components/componentsExport";
import Mockman from "mockman-js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { useAuth } from "../contexts/contextExport";
import { Checkout } from "../pages/pagesExport";
const MyRoutes = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<SingleProductPage />} />
      {/*👇 passing the SignUp and Login page to user only if he/she is not authorised 
      else unmounting or not showing it to use  */}
      {!auth.status && (
        <>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </>
      )}

      {/*👇 Protected routes for Cart and Wishlist components, only show when user is authorised */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={<ProfilePage page={<ProfileCard />} />}
        />
        <Route
          path="/profile/addresses"
          element={<ProfilePage page={<Addresses />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProfilePage page={<UserOrders />} />}
        />
        <Route
          path="/profile/settings"
          element={<ProfilePage page={<Settings />} />}
        />
      </Route>
      <Route path="/mock" element={<Mockman />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export { MyRoutes };
