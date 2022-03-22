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
} from "./frontend/contexts/contextExport";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <NavProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NavProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
