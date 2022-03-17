import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./frontend/contexts/NavContext/NavContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavProvider>
        <App />
      </NavProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
