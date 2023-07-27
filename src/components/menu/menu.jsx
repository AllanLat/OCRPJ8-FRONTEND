import React, { useState } from "react";
//import { Link } from "react-router-dom";

import "./menu.css";


export default function Menu() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <h1 className="title is-size-5">Allan Latruffe</h1>
    </a>

    <button className={`navbar-burger ${isPopupOpen ? "is-active" : ""}`} aria-label="menu" aria-expanded={isPopupOpen ? "true" : "false"} data-target="navbarBasicExample" href="#" onClick={() => setIsPopupOpen(!isPopupOpen)}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isPopupOpen ? "is-active" : ""}`}>
    <div className="navbar-end">
      <a className="navbar-item" href="/">
        Home
      </a>

      <a className="navbar-item" href="/#about">
        About
      </a>

      <a className="navbar-item" href="/#realisations">
        Réalisation
      </a>

       <a className="navbar-item" href="/contact">
        Contact
      </a> 

    </div>

      

    
  </div>
</nav>
  );


}