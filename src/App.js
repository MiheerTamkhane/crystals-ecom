import React from "react";

import { Routers } from "./frontend/router/Routers";
import { Header, Footer } from "./frontend/index";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default App;
