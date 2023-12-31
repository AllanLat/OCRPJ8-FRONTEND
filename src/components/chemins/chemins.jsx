import React from "react";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/home";

export default function Chemins() {
  return (
    <Router basename="/OCRPJ8-FRONTEND">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
