import React from "react";

// Router
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/home";
import Contact from "../../pages/contact/contact";

export default function Chemins() {
  return (
    <Router basename="/OCRPJ8-FRONTEND">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
