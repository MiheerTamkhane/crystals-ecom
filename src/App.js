import React from "react";

import { MyRoutes } from "./frontend/routes/MyRoutes";
import { Header, Footer } from "./frontend/index";
const App = () => {
  return (
    <div className="app">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
};

export default App;
