import { useContext, createContext, useState } from "react";

const NavContext = createContext();

const useNavContext = () => {
  const context = useContext(NavContext);

  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavProvider");
  }

  return context;
};

const NavProvider = ({ children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <NavContext.Provider value={{ isNav, setIsNav }}>
      {children}
    </NavContext.Provider>
  );
};

export { useNavContext, NavProvider };
