import React from "react";

import Hero from "../../components/hero/hero.jsx";
import Cards from "../../components/cards/cards.jsx";
import Carousel from "../../components/slider/slider.jsx";
import ContactForm from "../../components/formulaire/formulaire.jsx";

export default function Home() {
    return (
        <>
            <main>
                <Hero> 
                <h3 className="title is-is-family-sans-serif has-text-light">Hello !</h3>
                <p className="has-text-light">
                Je suis un développeur passionné avec 6 ans d'expérience en tant que freelance, spécialisé dans le développement web avec React. J'ai également été webmaster pendant plusieurs années et j'ai occupé un poste de direction de projet dans une PME. 
                </p>
                &nbsp;
                <p className="has-text-light">
                Polyvalent, je suis à l'aise aussi bien en front-end qu'en back-end. J'ai acquis de solides compétences techniques, mais aussi des soft skills essentielles, telles que la communication et la gestion de projet. Toujours avide d'apprendre et de relever de nouveaux défis, je suis à la recherche de projets stimulants où je pourrai mettre à profit mon expertise pour créer des solutions web innovantes.
                 <br />
                 <br />
                 Découvrez l'ensemble de mes compétences et diplômes en me contactant par email ou en consultant mon profil LinkedIn. 
                </p>

                </Hero>
                
                <Cards />
                
                <Carousel />

                <Hero>
                    <h3 className="title is-is-family-sans-serif has-text-centered has-text-light">Prenons Contact</h3>
                    <p className="has-text-centered mb-5 has-text-light"> Si vous avez des questions, des opportunités de collaboration ou simplement envie de discuter, n'hésitez pas à me contacter. Je serais ravi d'échanger avec vous et d'en apprendre davantage sur vos projets.</p>

                    <ContactForm />

                </Hero>
            </main>
      
        </>
    );
}