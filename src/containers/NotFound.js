import React from "react"; 
import "../assets/styles/NotFound.css";
import {Link} from "react-router-dom"
import Logo from "../assets/static/Logo.png";

const NotFound = () => (
    
    <React.Fragment>
        <div className="container-404">
            <div className="container-img_404">
                <Link to="/aeromax-web">
                    <img src={Logo}></img>
                </Link> 
               
            </div>

            <div className="container-info_404">
                    <h1>Ups ha ocurrido un error :(</h1>
                    <p>Error 404 no pudimos encontrar lo que buscaba, para regresar de click en el botón </p>
                    <Link to="/aeromax-web">
                        <button>Regresar al home</button>
                    </Link>
                 
            </div>
        </div>
    </React.Fragment>
)
    


export default NotFound;