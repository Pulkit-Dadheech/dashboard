import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SidebarProvider } from "./context/SidebarContext";
import { MyProvider } from "./context/MyContext";
import { AlertProvider } from "./context/AlertContext.js";
import { AuthProvider } from "./context/AuthContext.js";
import { HvProvider } from "@hitachivantara/uikit-react-core";

import { Dashboard } from "./components/Dashboard";
import NotFound from "./NotFound";

const App = (props) => {
  const token = props?.keycloak?.token || null;

  const Wrapped = () => (
    <SidebarProvider>
      <HvProvider>
        <AlertProvider>
          <MyProvider initialToken={token}>
            <BrowserRouter basename={props?.basename || "/"}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </MyProvider>
        </AlertProvider>
      </HvProvider>
    </SidebarProvider>
  );

  return props?.keycloak
    ? <AuthProvider keycloak={props.keycloak}><Wrapped /></AuthProvider>
    : <Wrapped />;
};

export default App;
