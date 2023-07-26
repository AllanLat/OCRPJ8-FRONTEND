import React from "react";

import './card.css';
import IframeComponent from "../iframe-components/iframe-components";


export default function Card({
  description,
  problematic,
  solution,
  skills,
  url,
  company,
  date,
}) {
  return (
    <div className="card">
	
		<IframeComponent links={url}  />
      <div className="card-content">
      
        <p className="title has-text-info mb-5 is-size-4">{description}</p>
        <p className="subtitle"><strong>Entreprise</strong> : {company}</p>
        <p><strong>Technologie utiliser</strong>: {skills.join(", ")}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <a href={url} target="_blank" rel="noreferrer">Vers le site</a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>{date}</span>
        </p>
      </footer>
    </div>
  );
}
