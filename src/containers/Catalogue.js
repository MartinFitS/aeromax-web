import React from "react";
import { connect } from "react-redux";
import CatalogueItem from "../components/CatalogueItem";
import "../assets/styles/Catalogue.css";

const Catalogue = ({memorys, keyboards, headphones}) => (
    <React.Fragment>

    
         <h1 className="principal-title">Lista de productos: </h1>
            <div className="containerCard">
                <h2 className="titles-categorys">Memorias USB y micro SD: </h2>
                {
                    memorys.map(
                        memory=> <CatalogueItem key={memory.id} {...memory}/>
                    )
                }
                <h2 className="titles-categorys">Teclados: </h2>
                {
                    keyboards.map(
                        keyboard=> <CatalogueItem key={keyboard.id} {...keyboard}/>
                    )
                }
                <h2 className="titles-categorys">Audifonos: </h2>
                {
                    headphones.map(
                        headphone=><CatalogueItem key={headphone.id} {...headphone}/>
                    )
                }
            </div>
    </React.Fragment>
   
);

const mapStateToProps = state =>{
    return{
        memorys: state.memorys,
        keyboards: state.keyboards,
        headphones: state.headphones,
     
    }
}

export default connect(mapStateToProps, null)(Catalogue);