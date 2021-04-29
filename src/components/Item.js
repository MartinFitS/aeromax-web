import React from "react"; 
import "../assets/styles/Item.css";
import {Link} from "react-router-dom";

const Item = (props) => {
    const { title, img , buttonTitle,direction} = props;
    return(
        <React.Fragment>          
        <div className="info">
            <h1>{title}</h1>

            <div className="map">
            <iframe title="ubicacion" src={img} width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>

        </div>
        <div className="boton">
            <Link to={direction}>
                <button>{buttonTitle}</button>
            </Link>
           
            
        </div>

        </div>
    </React.Fragment>
    )
};

export default Item;