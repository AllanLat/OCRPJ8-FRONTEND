import React, { useEffect, useRef } from "react";
import  './header-content.css';
import Typed from 'typed.js';

const MonComposant = () => {
    const titreRef = useRef(null);
  const sousTitreRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Allan Latruffe"],
      typeSpeed: 75,
    };

    const typedTitre = new Typed(titreRef.current, options);
    const typedSousTitre = new Typed(sousTitreRef.current, {
      ...options,
      strings: ["React Developer et Webmaster"],
      startDelay: typedTitre.strings[0].length * options.typeSpeed + options.typeSpeed,
    });

    return () => {
      typedTitre.destroy();
      typedSousTitre.destroy();
    };
  }, []);

  return (
    <section className="hero is-bold">
      <div id="about" className="hero-body">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-two-fifths">
              <div className="has-text-right">
                <figure className="image is-128x128 is-pulled-right">
                  <img src="img/logo.jpeg" alt="Allan Latruffe profils" className="is-rounded" />
                </figure>
              </div>
            </div>
            <div className="column is-flex is-align-items-center is-nowrap">
              <div id="titre">
                <h1 className="title">
                  <span ref={titreRef}></span>
                </h1>
                <h2 className="subtitle">
                  <span ref={sousTitreRef}></span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonComposant;
