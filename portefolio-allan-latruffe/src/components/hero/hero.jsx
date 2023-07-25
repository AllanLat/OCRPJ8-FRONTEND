import React from "react";

export default function Hero(props) {
    const { children } = props;
    return (
        <div className="hero is-info is-medium">
            <div className="hero-body">
                <div className="description">
                    {children}
                </div>
            </div>
        </div>
    )
}