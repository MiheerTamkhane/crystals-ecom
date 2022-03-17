import { useContext, createContext, useState } from "react";

const NavContext = createContext();

const useNavContext = () => useContext(NavContext);

const NavProvider = ({ children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <NavContext.Provider value={{ isNav, setIsNav }}>
      {children}
    </NavContext.Provider>
  );
};

export { useNavContext, NavProvider };
