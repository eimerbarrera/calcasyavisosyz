/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Importamos estilos y js de bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Páginas del Sitio Web
import Home from './componentes/home/Home';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Listaprecios from './componentes/listaprecios/Listaprecios';
import Contacto from './componentes/contacto/Contacto';


// Configuración de la rutas del Sitio Web 
ReactDOM.render( 
    <Router>
      <div>
        <Switch> 
          { /* Paginas */} 
          <Route exact path = '/'component = { Home }/> 
          <Route path = '/nosotros'component = { Nosotros }/> 
          <Route path = '/servicios'component = { Servicios }/> 
          <Route path = '/listaprecios'component = { Listaprecios }/> 
          <Route path = '/contacto'component = { Contacto }/> 
        </Switch> 
      </div> 
    </Router>,
    document.getElementById('root')
);
