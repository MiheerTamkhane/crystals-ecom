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
  AddressProvider,
  OrdersProvider,
} from "./frontend/contexts/contextExport";

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
                  <AddressProvider>
                    <OrdersProvider>
                      <App />
                    </OrdersProvider>
                  </AddressProvider>
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
