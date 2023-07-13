import React from "react";

import "./header.css";
import 'bulma/css/bulma.css';
import Menu from "../menu/menu";
import HeaderContent from "../header-content/header-content";

export default function Header() {
    return (
        <header>
            <Menu />
            
                <HeaderContent />
     


        </header>
    );
}