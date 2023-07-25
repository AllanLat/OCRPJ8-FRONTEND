import React from 'react';

import './iframe-components.css';

export default function IframeComponent({ links }) {
  return (
    <div className='iframe-container is-hidden-mobile'>
      <iframe src={links} title="Iframe Example" width={"100%"}></iframe>
    </div>
  );
}


