import React from "react";
import { Toaster } from "react-hot-toast";
import { MyRoutes } from "./frontend/routes/MyRoutes";
import { Header, Footer } from "./frontend/index";
const App = () => {
  return (
    <div className="app">
      <Header />
      <MyRoutes />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgb(109 40 217)",
            color: "rgb(237 233 254)",
          },
        }}
      />
    </div>
  );
};

export default App;
