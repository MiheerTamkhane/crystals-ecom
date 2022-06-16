import React from "react";
import "./Settings.css";
import { useAuth, useNavContext } from "../../contexts/contextExport";
import toast from "react-hot-toast";
const Settings = () => {
  const { logoutHandler } = useNavContext();
  const { setAuth } = useAuth();
  return (
    <div className="user-settings">
      <button
        onClick={() => {
          logoutHandler(setAuth);
          toast("See you again, Logged out!", { icon: "👋" });
        }}
        className="ct-btn ct-red"
      >
        Logout
      </button>
    </div>
  );
};

export { Settings };
