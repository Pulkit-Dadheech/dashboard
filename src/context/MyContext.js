import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children, initialToken = null }) => {
  const [value, setValue] = useState([]);
  const [token, setToken] = useState(initialToken);

  return (
    <MyContext.Provider value={{ value, setValue, token, setToken }}>
      {children}
    </MyContext.Provider>
  );
};