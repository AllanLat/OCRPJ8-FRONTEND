import React from "react";

import './header-content.css';

export default function HeaderContent() {
  return (
    <section className="hero is-bold">

    <div id="about" className="hero-body">
        <div className="container">
        <div className="columns is-mobile">
            <div className="column is-two-fifths ">
                <div className="has-text-right">
                    <figure className="image is-128x128 is-pulled-right">
                        <img src="../img/logo.jpeg" alt="Allan Latruffe profils" className="is-rounded"/>
                    </figure>
                </div>
              
           
            </div>
            <div className="column is-flex is-align-items-center is-nowrap">
                <div>
                <h1 className="title">
                    Allan Latruffe
                </h1>
                <h2 className="subtitle">
                    React Developper & Webmaster
                </h2> 
                </div>
           
            </div>
            
        </div>
        </div>
    </div>

</section>
  )  
};
