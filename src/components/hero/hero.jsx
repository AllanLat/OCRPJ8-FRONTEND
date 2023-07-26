import React from "react";

import './hero.css';

export default function Hero(props) {
    const { children } = props;
    return (
        <div className="hero is-blue is-medium">
            <div className="hero-body">
                <div className="description">
                    {children}
                </div>
            </div>
        </div>
    )
}