import React from "react";

import Hero from "../../components/hero/hero";
import Cards from "../../components/cards/cards";
import Carousel from "../../components/slider/slider";

export default function Home() {
    return (
        <>
            <main>
                <Hero> 
                <h3 className="title is-is-family-sans-serif">Hello !</h3>
                <p>
                Je suis un développeur passionné avec 6 ans d'expérience en tant que freelance, spécialisé dans le développement web avec React. J'ai également été webmaster pendant plusieurs années et j'ai occupé un poste de direction de projet dans une PME. 
                </p>
                &nbsp;
                <p>
                Polyvalent, je suis à l'aise aussi bien en front-end qu'en back-end. J'ai acquis de solides compétences techniques, mais aussi des soft skills essentielles, telles que la communication et la gestion de projet. Toujours avide d'apprendre et de relever de nouveaux défis, je suis à la recherche de projets stimulants où je pourrai mettre à profit mon expertise pour créer des solutions web innovantes.
                </p>

                </Hero>
                
                <Cards />
                
                <Carousel />

                <Hero>
                    <h3 className="title is-is-family-sans-serif has-text-centered">Prenons Contact</h3>
                    <p className="has-text-centered mb-5"> Si vous avez des questions, des opportunités de collaboration ou simplement envie de discuter, n'hésitez pas à me contacter. Je serais ravi d'échanger avec vous et d'en apprendre davantage sur vos projets.</p>
                    <div className="buttons is-centered">
                        <a className="button is-success" href="http://linkedin.com/in/allan-latruffe">Linkedin</a>
                        <button className="button is-secondary">Contact</button>
                    </div>

                </Hero>
            </main>
      
        </>
    );
}