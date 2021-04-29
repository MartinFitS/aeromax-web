import React from "react";
import "../assets/styles/CatalogueItem.css";

const CatalogueItem = (props) =>{
    const {name, price, type, img, pieces} = props;
    return(
        <div className="card-container"> 
            <h1>{name}</h1>
            <div className="card-img_container">
                <img src={img} alt="productImage"></img>
            </div>
            <div className="body-card">
                <div className="body-card_specs">
                    <h2>Tipo: {type}</h2>
                    <h2>Precio: {price}$</h2>
                    <h2>Piezas: {pieces}</h2>
                </div>
                <div className="container-button">
                    <button>Enviar WhatsApp</button>
                </div>
            </div>
        </div>
    )
};

export default CatalogueItem;