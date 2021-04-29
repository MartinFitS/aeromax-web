import React, {useState} from "react";
import { connect  } from "react-redux";
import "../assets/styles/Search.css";
import {searchProduct} from "../actions";

const Search = props => {
    const [busqueda, setValues] = useState(null);

    const handleInput = event =>{
        setValues({
            ...busqueda,
            [event.target.name]: event.target.value,
            id: 0
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.searchProduct(busqueda);
        console.log(busqueda);
    }

    return(
        <React.Fragment>
            <div className="container-banner">
               <div className="banner-search__title">
                   <h1>¿Buscas algo en especial?</h1>
               </div>
    
               <div className="container-nav">
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Busca el nombre del producto....."
                    name="productSearch"
                    onChange={handleInput}
                    />
                    <a href="#search">
                        <button>Buscar</button>
                    </a>
                       
                   <h2 className="keywords-of_search">Puedes probar con estas palabras: Memorias, Teclados, Audifonos</h2> 
                     
                </form>  
               </div>
    
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = state =>{
    return{
        products: state.products
    }
}

const mapDispatchToProps = {
    searchProduct,
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);