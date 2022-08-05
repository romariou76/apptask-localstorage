import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // el react.StricMode vuelve a ejecutar todo y como iniclamente lee un arreglo vacio pues lo establece, por ello lo quitaremos para que
  // no desaparesca las taras del localstorage
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);