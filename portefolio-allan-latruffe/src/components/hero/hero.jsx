import React from "react";

export default function Hero(text) {
    return (
        <div className="hero is-info is-medium">
            <div className="hero-body">
                <div className="description">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}