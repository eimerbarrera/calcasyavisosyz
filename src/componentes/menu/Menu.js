import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css';

class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		    <NavLink to="/" className="navbar-brand"><img src={process.env.PUBLIC_URL + 'images/logo.png'} width='90' alt="logo" class="logo "/></NavLink>
			
		    <button className="navbar-toggler menu-hover" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon "></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link enlace ">Inicio </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link enlace">Nosotros</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link enlace">Servicios</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/listaprecios" className="nav-link enlace">Lista de precios</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link enlace">Contacto </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2 borde-buscar" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-outline-success my-2 my-sm-0 btn-mod" type="submit">Buscar</button>
			    </form>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;