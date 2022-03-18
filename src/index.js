import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./frontend/contexts/NavContext/NavContext";
import { ProductsProvider } from "./frontend/contexts/ProductContext/ProductContext";
import { AccordionProvider } from "./frontend/contexts/AccordionContext/AccordionContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <NavProvider>
          <AccordionProvider>
            <App />
          </AccordionProvider>
        </NavProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
