import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Home.css"
import Search from "../components/Search"
import Item from "../components/Item";
import CatalogueItem from "../components/CatalogueItem";


const Home = ({items,productSearch,memorys,keyboards,headphones}) =>{

let validation = productSearch.productSearch != undefined;

let nameCap =validation?productSearch.productSearch.toUpperCase():null;

let key = true; 

let filterCategory = memorys.filter((i)=>{
  return i.type === nameCap
});

if(filterCategory == 0){
  filterCategory = keyboards.filter((i)=>{
    return i.type === nameCap
  })
}

if(filterCategory == 0){
  filterCategory = headphones.filter((i)=>{
    return i.type === nameCap
  })
}

if(filterCategory == 0){
  key = false;
}

    return(
        <div className="App">
              <Search/>
              {
                productSearch.productSearch != undefined && key === true
                ?
                <h1 className="resultOfH1">Resultados para: {nameCap}</h1>
                :
                null
              }
             
              {
                productSearch.productSearch != undefined
                ?
                filterCategory.map(item=>
                  <CatalogueItem
                    key={item.id}
                    {...item}
                  />  
                )
                :
                null
              }

              {
                  productSearch.productSearch !== undefined && key === false
                ?
                <h1 className="notResultForH1">
                  No se encuentran resultados para: {nameCap} :(       
                </h1>
                :
                null
              }

              {
                  productSearch.productSearch !== undefined && key === false
                  ?
                  <p className="youCanTry">
                    Puedes intentar con estas palabras clave: {memorys[0].type},{keyboards[0].type},{headphones[0].type} 
                  </p>
                  :
                  null
              }
             
              <div className="title">
                <h1>Conoce más</h1>
              </div>
            
                <div className="containerItem">
                {
                  items.map(
                    item=><Item key={item.id} {...item}/>
                    )
                  }
                </div>                
          </div>
  )  
}  
const mapStateToProps = state => {
  return{
    items: state.items,
    productSearch: state.productSearch,
    memorys: state.memorys,
    keyboards: state.keyboards,
    headphones: state.headphones,
  }
}

export default connect(mapStateToProps, null)(Home);
