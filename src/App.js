import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';

import Chemins from './components/chemins/chemins';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return ( 
    <>
      <Header />
        <Chemins />
      <Footer />
    </>
  );
}

export default App;
