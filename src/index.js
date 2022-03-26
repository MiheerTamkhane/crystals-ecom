import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  NavProvider,
  ProductsProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
} from "./frontend/contexts/contextExport";
import { Cart } from "./frontend";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductsProvider>
              <NavProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </NavProvider>
            </ProductsProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
