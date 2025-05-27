import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard"; // Import the Dashboard component
import NotFound from "./NotFound"; // Add this line
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} /> {/* Show NotFound for unknown routes */}
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
