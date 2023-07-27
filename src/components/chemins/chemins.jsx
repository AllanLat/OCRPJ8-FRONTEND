import React from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/home";
import Contact from "../../pages/contact/contact";

export default function Chemins() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
    
}