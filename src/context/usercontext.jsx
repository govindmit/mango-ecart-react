import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();


  export const  UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [addressId, setAddressId] = useState(null);
    const [addresses, setAddresses] = useState([])

  return (
    <UserContext.Provider value={{ user,setUser,addressId,setAddressId,addresses,setAddresses}}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => {
    return useContext(UserContext);
  }