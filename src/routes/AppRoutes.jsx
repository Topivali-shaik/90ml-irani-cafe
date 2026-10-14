import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Home";
import AboutFounder from "../components/About_Pages/AboutFounder";
import AboutDeveloper from "../components/About_Pages/AboutDeveloper";
import GetFranchise from "../components/About_Pages/GetFranchise";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about-founder"
        element={<AboutFounder />}
      />

      <Route
        path="/about-developer"
        element={<AboutDeveloper />}
      />

      {/* Redirect the old Home URL */}
      <Route
        path="/Home"
        element={<Navigate to="/" replace />}
      />

      {/* Unknown URLs go back to the homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path="/get-franchise" element={<GetFranchise />} />

    </Routes>

    
  );
}

export default AppRoutes;
