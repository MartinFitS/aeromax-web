import React from "react";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/static/Logo.png";

const Header = () => (
    <header className="header">
        <Link to="/">
          <img className ="logo" src={Logo}/>
        </Link>

        <div className="menu">
            <ul>
                <Link to="/Catalogo">
                    <li>Catálogo</li>
                </Link>
                <Link to="/Contactos">
                    <li>Contactos</li>
                </Link>      
            </ul>
        </div>
    </header>
);

export default Header;