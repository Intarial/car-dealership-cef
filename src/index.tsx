import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/stylesheet.css'
import {Dealership} from "./Dealership";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dealership/>
  </React.StrictMode>
);
