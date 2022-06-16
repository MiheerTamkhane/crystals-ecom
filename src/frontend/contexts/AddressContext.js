import { createContext, useContext, useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
const AddressContext = createContext();
const initialState = {
  addresses: [],
  addId: null,
  mobNo: 9767656818,
};

const dummyAddress = {
  name: "Sarang Tamkhane",
  street: "Old kalwan road",
  city: "Dindori, Nasik",
  state: "Maharashtra",
  country: "India",
  zipCode: 422202,
  mobile: 9689565227,
};

const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADDRESS":
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
};

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialState
  );

  return (
    <AddressContext.Provider
      value={{
        addressState,
        addressDispatch,
        dummyAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error("useAddress must be used within AddressProvider");
  }
  return context;
};

export { useAddress, AddressProvider };
