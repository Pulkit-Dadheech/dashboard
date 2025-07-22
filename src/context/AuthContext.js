import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ keycloak, children }) => {
  const [token, setToken] = useState(keycloak?.token || null);

  useEffect(() => {
    if (keycloak) {
      keycloak.onTokenExpired = () =>
        keycloak.updateToken().then((newToken) => setToken(newToken));
    }
  }, [keycloak]);

  return (
    <AuthContext.Provider value={{ keycloak, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);