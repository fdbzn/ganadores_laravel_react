import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logos from '../images/logos.png';

class Navbar extends React.Component {
  render() {
    return (
      <header >
          <img
            src={logos}
            alt="logo"
            className="logos"
          />

          <ul className="menu row" >
            <li className="menu_item col-6 col-sm-3">
              <Link className="" to="/">
                <span>¿Cómo <br/> participar?</span> 
              </Link>
            </li>
            <li className="menu_item col-6 col-sm-3">
              <Link className="" to="/premios">
                <span>Premios</span> 

              </Link>
             </li>
            <li className="menu_item col-6 col-sm-3">
              <Link className="" to="/ganadores">
                <span>Ganadores</span> 
              </Link>
            </li>
            <li className="menu_item col-6 col-sm-3">
              <Link className="" to="/terminos">
                <span>Consulta términos y condiciones</span> 
              </Link>
            </li>
          </ul>
      </header>
    );
  }
}

export default Navbar;
