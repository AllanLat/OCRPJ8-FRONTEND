import React from "react";

import "./menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <nav>
                <img src="./public/imag/logo.jpeg" alt="Logo de Allan Latruffe" srcset="" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}