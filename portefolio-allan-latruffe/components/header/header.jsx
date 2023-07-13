import React from "react";

import './header.css';

import Menu from "../menu/menu";

export default function Header() {
    return (
        <div className="header">
            <Menu></Menu>
        </div>
    );
}