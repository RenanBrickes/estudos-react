import React from 'react';
import './App.css';
import Rotas from './routes';
import {BrowserRouter} from 'react-router-dom'; /*Para tabalhar com Rotas no app*/
//import {BroswerRoutas} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Rotas/>
    </BrowserRouter>
  );
}

export default App;
