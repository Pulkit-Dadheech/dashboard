import React, { lazy, Suspense, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { HvProvider } from "@hitachivantara/uikit-react-core";
import { SidebarProvider } from "./context/SidebarContext";
import { MyProvider } from "./context/MyContext";
import { AlertProvider } from "./context/AlertContext.js";
import { AuthProvider } from "./context/AuthContext.js";

// Lazy-loaded pages
const Dashboard = lazy(() => import("./components/Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

// Map entry URLs to components
const routeComponentMap = {
  "/": Dashboard,
  dashboard: Dashboard,
  // Add more routes if needed
};

const DynamicComponent = ({ entryUrl, queryParam }) => {
  const MatchedComponent = useMemo(() => {
    return routeComponentMap[entryUrl?.toLowerCase()] || Dashboard;
  }, [entryUrl]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MatchedComponent param={queryParam} />
    </Suspense>
  );
};

const AppInnerContent = ({ entryUrl, queryParam }) => {
  const location = useLocation();

  return (
    <>
      {entryUrl && location.pathname === "/" ? (
        <Routes>
          <Route
            path="*"
            element={<DynamicComponent entryUrl={entryUrl} queryParam={queryParam} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const AppContent = (props) => {
  const token = props?.keycloak?.token || null;

  return (
    <SidebarProvider>
      <HvProvider>
        <AlertProvider>
          <MyProvider initialToken={token}>
            <Router basename={props?.basename || "/"}>
              <AppInnerContent
                entryUrl={props?.entryUrl}
                queryParam={props?.queryParam}
              />
            </Router>
          </MyProvider>
        </AlertProvider>
      </HvProvider>
    </SidebarProvider>
  );
};

const App = (props) => {
  return props?.keycloak ? (
    <AuthProvider keycloak={props.keycloak}>
      <AppContent {...props} />
    </AuthProvider>
  ) : (
    <AppContent {...props} />
  );
};

export default App;
