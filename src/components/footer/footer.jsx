import React from "react";

import './footer.css';
import 'bulma/css/bulma.css';

import Listooter from "../list-footer/list-footer";

export default function Footer() {

    const Colonne1 = [
        { href: '/OCRPJ8-FRONTEND/', text: 'Home' },
        { href: '/OCRPJ8-FRONTEND/#about', text: 'A propos' },
        { href: '/OCRPJ8-FRONTEND/#realisations', text: 'Réalisation' },
        { href: '/OCRPJ8-FRONTEND/#contact', text: 'Contact' },
      ];

    const Colonne2 = [
        { href: 'https://github.com/AllanLat', text: 'Github' },
        { href: 'https://www.linkedin.com/in/allan-latruffe', text: 'Linkedin' },
        { href: 'https://awen-developpement.fr', text: 'Awen Developpement' },
        { href: 'mailto:allan.latruffe@gmail.com', text: 'Mail' }
    ];
      




    return (
        <div className="footer">
            <div className="columns">
                <div className="column is-centered">
                    <figure className="image is-128x128 is-centered">
                        <img src="img/logo-footer.gif" alt="Allan Latruffe developper" className="is-rounded"/>
                    </figure>
                </div>
                <div className="column">
                    <Listooter ArrayLink={Colonne1} titre="Navigation" />
                </div>
                <div className="column">
                    <Listooter ArrayLink={Colonne2} titre="Contact" />
                </div>
                <div className="column is-justify-content-center">
                    <div itemScope itemType="https://schema.org/Organization">
                        <h2 itemProp="name" className="has-text-centered has-text-left-mobile">Allan Latruffe EI</h2>

                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                           <p className="has-text-centered has-text-left-mobile">
                            <span itemProp="streetAddress" className="has-text-centered has-text-left-mobile">16 Rue Émile Le Taillandier </span>
                            <br />
                            <span itemProp="addressLocality" className="has-text-centered has-text-left-mobile">Lannion</span> 
                            <span itemProp="postalCode"  className="has-text-centered has-text-left-mobile">22300</span>
                            </p>
                        </div>

                        <p itemProp="telephone" className="has-text-centered has-text-left-mobile">0631352781</p>
                        <p itemProp="email" className="has-text-centered has-text-left-mobile">allan.latruffe@gmail.com</p>
                        </div>
                </div>
            </div>
        </div>
    );
}