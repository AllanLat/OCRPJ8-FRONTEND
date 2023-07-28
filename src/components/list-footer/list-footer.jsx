import React, { useState } from "react";

import "./list-footer.css";
import 'bulma/css/bulma.css';


export default function Listooter({ArrayLink, titre}) {

    const [linkss] = useState(ArrayLink);

   
    return (
        <div className="list-footer">
            <h3>{titre}</h3>
            <ul>
            {linkss.map((linkk, index) => (
                    <li key={index}>
                        <a href={linkk.href} target="_blank" rel="noreferrer">{linkk.text}</a>
                    </li>
                ))}
            </ul>
        </div>  
    );
}




