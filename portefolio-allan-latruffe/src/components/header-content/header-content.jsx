import React from "react";

export default function HeaderContent() {
  return (
    <section class="hero is-dark is-bold">

    <div class="hero-body">
        <div class="container">
        <div class="columns is-mobile">
            <div class="column is-two-fifths ">
                <div className="has-text-right">
                    <figure className="image is-128x128 is-pulled-right">
                        <img src="../img/logo.jpeg" alt="Allan Latruffe profils" className="is-rounded"/>
                    </figure>
                </div>
              
           
            </div>
            <div class="column is-flex is-align-items-center is-nowrap">
                <div>
                <h1 class="title">
                    Allan Latruffe
                </h1>
                <h2 class="subtitle">
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
