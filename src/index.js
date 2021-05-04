import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers"
import App from '../src/routes/App';

const initialState = {
    "productSearch":[],
    "contacts":[
      {
        "id": "223c2323ucd",
        "name": "José Martín Serna Valdeolivar",
        "profession": "Software Enginner",
        "number": 3141435050,
        "img":"",
        "instagram": "none"
      },
      {
        "id": "caeuq8q8823v283",
        "name": "Martín Serna Díaz",
        "profession": "Student",
        "number": 3143386885,
        "img":"",
        "instagram": "mserna10"
      }
    ],
    "items":[
      {
        "id": "12asd323124242sad4242423fdfasd4425657",
        "title": "¿Donde nos encontramos?",
        "img":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2850497721156!2d-104.31763598562353!3d19.051200857703396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d509f90cb583%3A0x84426d814f53a2fe!2sCiber%20Aeromax%20computadoras!5e0!3m2!1ses!2smx!4v1618252227662!5m2!1ses!2smx",
        "buttonTitle": "Ir a Google Maps",
        "direction": "https://www.google.com.mx/maps/place/Ciber+Aeromax+computadoras/@19.0512009,-104.317636,17z/data=!3m1!4b1!4m5!3m4!1s0x8424d509f90cb583:0x84426d814f53a2fe!8m2!3d19.0511958!4d-104.3154473"
      },
      {
        "id":"Wfd72asd323124242sad4242423fdfasd4425657",
        "title": "Producto del día",
        "img":"https://image.freepik.com/vector-gratis/banner-promocion-2x1_52683-50845.jpg",
        "buttonTitle": "Ir a verlo",
        "direction": "/Catalogo",
      },
    ],
    "memorys":[
      {
        "id": "1MADS2asd32312ad4242423fdfasd44asa25657",
        "name": "Memoria 16gb sandisk",
        "price": 80,
        "type": "MEMORIAS",
        "img": "https://www.radioshack.com.mx/medias/67221.gif-1200ftw?context=bWFzdGVyfHJvb3R8MTI2NTg0fGltYWdlL2dpZnxoOGUvaGQ3Lzg3OTY1OTMyMjU3NTguZ2lmfDQzYWQ2ODk2NDc0ODBmYzU3NWMwNTYzNDQ4MThhMjdhNGY1MGFhMjI0NzZkMjMwYjJiYmE1YmNkMjM1MDg3YzE",
        "pieces": 13
      },
      {
        "id": "POASMADS2asd32312ad4242423fdfasd44asa25657",
        "name": "Memoria 32gb sandisk",
        "type":"MEMORIAS",
        "price": 125,
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659171797.jpg",
        "pieces": 15
      },
      {
        "id": "Pmas2132193Nkasksdm",
        "name": "Memoria 64gb sandisk",
        "type":"MEMORIAS",
        "price": 200,
        "img": "https://resources.claroshop.com/medios-plazavip/mkt/5fcaa1b93026f_sandisk-negrajpg.jpg",
        "pieces": 8
      },
      {
        "id": "poqs28312saSadd",
        "name": "Memoria 128gb sandisk",
        "type":"MEMORIAS",
        "price": 300,
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ny9ZobhhL._AC_SY741_.jpg",
        "pieces": 8
      },
      {
        "id": "Dasl231231290masdlasdk2",
        "name": "Memoria 16gb sandisk",
        "price": 80,
        "type": "MEMORIAS",
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134648.jpg",
        "pieces": 23
      },
      {
        "id": "msdoasdo1283219nsadsa",
        "name": "Memoria 32gb sandisk",
        "type":"MEMORIAS",
        "price": 125,
        "img": "https://cdn1.coppel.com/images/catalog/pm/2827193-1.jpg",
        "pieces": 11
      },
      {
        "id": "ñasdaskasdjasd213213",
        "name": "Memoria 64gb sandisk",
        "type":"MEMORIAS",
        "price": 200,
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134846.jpg",
        "pieces": 10
      },
      {
        "id": "SAKkskdas2332042301",
        "name": "Memoria 128gb sandisk",
        "type":"MEMORIAS",
        "price": 300,
        "img": "https://www.cyberpuerta.mx/img/product/L/CP-SANDISK-SDSQUAR-128G-GN6MA-10.jpg",
        "pieces": 8
      }
      
    ],
    "keyboards":[
      {
        "id":"asdasd928392321312",
        "name": "Teclado Vorago 102",
        "price": 125,
        "type": "TECLADOS",
        "img": "https://http2.mlstatic.com/D_NQ_NP_961359-MLM31222080882_062019-O.jpg",
        "pieces": 3
      }
    ],
    "headphones":[
      {
        "id":"kasdj49324239402394",
        "name": "Gettech GH-3000N synergy",
        "price": 149,
        "type": "AUDIFONOS",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qgIO%2B03tL._AC_SY355_.jpg",
        "pieces": 4
      }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer, initialState,composeEnhancers());

ReactDOM.render( 
  <Provider store={store}>
      <App /> 
  </Provider>
  , 
  document.getElementById('app')
);