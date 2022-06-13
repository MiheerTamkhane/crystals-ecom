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
            background: "#6d28d9",
            color: "#f7f7f7",
          },
        }}
      />
    </div>
  );
};

export default App;
