import React from "react";
import "../assets/styles/CardPresentation.css"

const CardPresentation = (props) => {
    const { name, profession , number, img, instagram} = props
    return(
        <React.Fragment>
            <div className="card-presentational_container">
                <div className="card-presentational_container__left">
                    <h1>{name}</h1>
                    <img src={img}></img>
                </div>
                <div className="card-presentational_container__right">
                    <h1>Información del contacto</h1>
                    <h2>Profesión: {profession}</h2>
                    <h2>Número: {number}</h2>
                    <a href={instagram}>
                        <button>Instagram</button>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CardPresentation;