import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import './cards.css';

export default function Cards() {
  const [realisations, setRealisations] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setRealisations(data.realisations))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className='ml-5 pl-5 mt-5 pt-5'>
        <h2 className='title is-is-family-sans-serif'>Mes réalisations</h2>
          <small>site vitrine et e-commerce, autres réalisations sur mon <a href="https://github.com/AllanLat" target="_blank" rel="noreferrer">GitHub</a></small>
      </div>
      
      <div id='realisations' className="cards m-4 p-5">
        
        {realisations.map((realisation, index) => (
          <Card
            key={index}
            description={realisation.description}
            problematic={realisation.problematic}
            solution={realisation.solution}
            skills={realisation.skills}
            url={realisation.url}
            company={realisation.company}
            date={realisation.date}
          />
        ))}
      </div>
    </div>
  );
}


