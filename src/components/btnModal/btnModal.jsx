import React from "react";

export default function btnModal({idMymodal, text}) {
    return (
        <button id={idMymodal} className="button is-primary" data-target={idMymodal} aria-haspopup="true">{text}</button>
    )
}