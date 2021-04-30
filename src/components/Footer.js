import React from "react";
import {Link} from "react-router-dom"
import "../assets/styles/Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="item-footer content-one">
            <div className="item-footer--title">
                <h1>Contactame</h1>
            </div>
            <div className="content-footer-uno">
                <ul>
                    <li>instagram</li>
                    <li>facebook</li>
                    <li>YouTube</li>
                    <li>Gmail</li>
                </ul>
            </div>
        </div>
        <div className="item-footer">
            <div className="espacio"></div>

            <Link to="/aeromax-web">
                <div className="imgFooter"></div >
            </Link>
               
            <div className="page-name">
                <h1>Aero<span className="black">m@x</span></h1>
            </div>     
            
        </div>
        <div className="item-footer">
            <div className="derechos-autor">
                <h1>Información sobre los derechos de autor</h1>
            </div>   
            <div className="declaracion">
                <p className="blanco">
                    @Aero<span className="black">m@x2021</span>
                 </p>
                 <p className="blanco Mserna10">
                  @Mserna10
                 </p>
            </div>                
        </div>
    </footer>
);

export default Footer;